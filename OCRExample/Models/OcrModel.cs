namespace OCRExample.Models
{
    public class OcrModel
    {
        public String DestinationLanguage { get; set; }
        public IFormFile Image { get; set; }
    }

    public static class DestinationLanguage
    {
        public const string English = "eng";
        public const string Chinese_Traditional = "chi_tra";
    }
}
