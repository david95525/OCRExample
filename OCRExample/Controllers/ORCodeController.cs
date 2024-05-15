using Microsoft.AspNetCore.Mvc;

namespace OCRExample.Controllers
{
    public class ORCodeController : Controller
    {
        public IActionResult html5qrcode()
        {
            return View();
        }
    }
}
