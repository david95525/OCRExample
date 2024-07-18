using Microsoft.AspNetCore.Mvc;
using Azure.AI.Vision.ImageAnalysis;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;
using Azure;
using System;
using System.Security.Cryptography;
namespace OCRExample.Controllers
{
    public class AzureAIVisionController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        private string key;
        private string endpoint;
        public AzureAIVisionController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _env = env;
            _configuration = configuration;
            endpoint = _configuration.GetSection("VISION_ENDPOINT").Value;
            key = _configuration.GetSection("VISION_KEY").Value;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult ImageAnalyze([FromBody] ImageModel model)
        {
            byte[] image = Convert.FromBase64String(model.imagestring);
            BinaryData imageData = BinaryData.FromBytes(image);
            ImageAnalysisClient client = new ImageAnalysisClient(new Uri(endpoint), new AzureKeyCredential(key));

            //string imgAFIB = Path.Combine(_env.WebRootPath, "images/microlifebpm.png");
            //using FileStream stream = new FileStream(imgAFIB, FileMode.Open);
            //BinaryData imageData = BinaryData.FromStream(stream);

            ImageAnalysisResult result = client.Analyze(
                imageData,
                VisualFeatures.Caption | VisualFeatures.Read,
                new ImageAnalysisOptions { GenderNeutralCaption = true });
            string Caption = result.Caption.Text;
            float Confidence = result.Caption.Confidence;
            int[] measurement = new int[3];
            int order = 0;
            Console.WriteLine(Caption);
            Console.WriteLine(Confidence);
            foreach (DetectedTextBlock block in result.Read.Blocks)
                foreach (DetectedTextLine line in block.Lines)
                {
                    Console.WriteLine(line.Text);
                    if (order < 3)
                    {
                        if (int.TryParse(line.Text, out measurement[order]))
                        {
                            order++;
                        }
                    }
                }
            return Ok(new
            {
                Caption = Caption,
                Confidence = Confidence,
                sys = measurement[0],
                dia = measurement[1],
                pul = measurement[2]
            });
        }
        public class ImageModel
        {
            public string imagestring { get; set; } = string.Empty;
        }
        public async Task<IActionResult> OCR([FromBody] ImageModel model)
        {
            byte[] image = Convert.FromBase64String(model.imagestring);
            string filePath = Path.Combine(_env.WebRootPath, "images/test01.png");
            FileStream stream = new FileStream(filePath, FileMode.Create);
            stream.Write(image, 0, image.Length);
            stream.Close();
            Console.WriteLine("Azure Cognitive Services Computer Vision - .NET quickstart example");
            Console.WriteLine();

            ComputerVisionClient client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(key)) { Endpoint = endpoint };
            // Extract text (OCR) from a URL image using the Read API
            Console.WriteLine("----------------------------------------------------------");
            Console.WriteLine("READ FILE FROM URL");
            Console.WriteLine();

            // Read text from URL
            var textHeaders = await client.ReadAsync("https://ocrresearch.azurewebsites.net/images/test01.png");
            // After the request, get the operation location (operation ID)
            string operationLocation = textHeaders.OperationLocation;
            Thread.Sleep(2000);

            // Retrieve the URI where the extracted text will be stored from the Operation-Location header.
            // We only need the ID and not the full URL
            const int numberOfCharsInOperationId = 36;
            string operationId = operationLocation.Substring(operationLocation.Length - numberOfCharsInOperationId);

            // Extract the text
            ReadOperationResult results;
            Console.WriteLine($"Extracting text from URL file {Path.GetFileName("https://ocrresearch.azurewebsites.net/images/test01.png")}...");
            Console.WriteLine();
            do
            {
                results = await client.GetReadResultAsync(Guid.Parse(operationId));
            }
            while ((results.Status == OperationStatusCodes.Running ||
                results.Status == OperationStatusCodes.NotStarted));

            int[] measurement = new int[3];
            int order = 0;
            Console.WriteLine();
            var textUrlFileResults = results.AnalyzeResult.ReadResults;
            foreach (Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models.ReadResult page in textUrlFileResults)
            {
                foreach (Line line in page.Lines)
                {
                    Console.WriteLine(line.Text);
                    if (order < 3)
                    {
                        if (int.TryParse(line.Text, out measurement[order]))
                        {
                            order++;
                        }
                    }
                    Console.WriteLine();

                }
            }
            return Ok(new
            {
                filePath = filePath,
                sys = measurement[0],
                dia = measurement[1],
                pul = measurement[2]
            });
        }
    }
}
