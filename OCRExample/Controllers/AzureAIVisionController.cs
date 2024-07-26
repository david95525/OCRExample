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
            //string filePath = Path.Combine(_env.WebRootPath, "images/microlifebpm.png");
            //FileStream stream = new FileStream(filePath, FileMode.Create);
            //stream.Write(image, 0, image.Length);
            //stream.Close();
            //BinaryData imageData = BinaryData.FromStream(stream);
            ImageAnalysisClient client = new ImageAnalysisClient(new Uri(endpoint), new AzureKeyCredential(key));
            Uri imageuri = new Uri("https://i.ibb.co/94XFRvb/microlifebpm.png");
            ImageAnalysisResult result = client.Analyze(
                imageData,
                VisualFeatures.Caption | VisualFeatures.Read,
                new ImageAnalysisOptions { GenderNeutralCaption = true });
            string Caption = result.Caption.Text;
            float Confidence = result.Caption.Confidence;
            int[] measurement = new int[3];
            List<string> resultlist = new List<string>();
            int order = 0;
            Console.WriteLine(Caption);
            Console.WriteLine(Confidence);
            foreach (DetectedTextBlock block in result.Read.Blocks)
                foreach (DetectedTextLine line in block.Lines)
                {
                    Console.WriteLine(line.Text);
                    resultlist.Add(line.Text);
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
                resultlist = resultlist,
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

            ComputerVisionClient client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(key)) { Endpoint = endpoint };
            var textHeaders = await client.ReadAsync("https://i.ibb.co/94XFRvb/microlifebpm.png");
            string operationLocation = textHeaders.OperationLocation;
            const int numberOfCharsInOperationId = 36;
            string operationId = operationLocation.Substring(operationLocation.Length - numberOfCharsInOperationId);
            ReadOperationResult results;
            do
            {
                results = await client.GetReadResultAsync(Guid.Parse(operationId));
            }
            while ((results.Status == OperationStatusCodes.Running ||
                results.Status == OperationStatusCodes.NotStarted));

            int[] measurement = new int[4];
            int order = 0;
            var textUrlFileResults = results.AnalyzeResult.ReadResults;
            foreach (Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models.ReadResult page in textUrlFileResults)
            {
                foreach (Line line in page.Lines)
                {
                    Console.WriteLine(line.Text);
                    if (order < 4)
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
                sys = measurement[1],
                dia = measurement[2],
                pul = measurement[3]
            });
        }
    }
}
