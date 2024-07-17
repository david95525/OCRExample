using Microsoft.AspNetCore.Mvc;
using Azure.AI.Vision.ImageAnalysis;
using Azure;
using System.Reflection;

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
        public IActionResult Analyze([FromBody] ImageModel model)
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
    }
}
