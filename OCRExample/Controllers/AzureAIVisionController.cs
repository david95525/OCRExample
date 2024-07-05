using Microsoft.AspNetCore.Mvc;
using Azure.AI.Vision.ImageAnalysis;
using Azure;

namespace OCRExample.Controllers
{
    public class AzureAIVisionController : Controller
    {
        private IConfiguration _configuration;
        private string key;
        private string endpoint;
        public AzureAIVisionController(IConfiguration configuration)
        {
            _configuration = configuration;
            endpoint = _configuration.GetSection("VISION_ENDPOINT").Value;
            key = _configuration.GetSection("VISION_KEY").Value;
        }
        public IActionResult Index()
        {
            Test();
            return View();
        }
        public void Test()
        {

            ImageAnalysisClient client = new ImageAnalysisClient(new Uri(endpoint), new AzureKeyCredential(key));

            ImageAnalysisResult result = client.Analyze(
                new Uri("https://i.ibb.co/HCNLLWp/16454253941.png"),
                VisualFeatures.Caption | VisualFeatures.Read,
                new ImageAnalysisOptions { GenderNeutralCaption = true });

            Console.WriteLine("Image analysis results:");
            Console.WriteLine(" Caption:");
            Console.WriteLine($"   '{result.Caption.Text}', Confidence {result.Caption.Confidence:F4}");

            Console.WriteLine(" Read:");
            foreach (DetectedTextBlock block in result.Read.Blocks)
                foreach (DetectedTextLine line in block.Lines)
                {
                    Console.WriteLine($"   Line: '{line.Text}', Bounding Polygon: [{string.Join(" ", line.BoundingPolygon)}]");
                    foreach (DetectedTextWord word in line.Words)
                    {
                        Console.WriteLine($"     Word: '{word.Text}', Confidence {word.Confidence.ToString("#.####")}, Bounding Polygon: [{string.Join(" ", word.BoundingPolygon)}]");
                    }
                }
        }
    }
}
