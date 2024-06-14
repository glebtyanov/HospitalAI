using System.Net;
using Microsoft.AspNetCore.Http.HttpResults;

namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    
    public class AiController(IConfiguration configuration) : ControllerBase
    {
        private readonly HttpClient _httpClient = new HttpClient();
    
        [HttpPost("predict")]
        public async Task<IActionResult> Predict([FromForm] IFormFile? image)
        {
            var imageFileName = "";
            try
            {
                imageFileName = await CopyImageToDirectory(image);
            }
            catch (ArgumentNullException)
            {
                return BadRequest("No image was uploaded");
            };

            var predictionResponseMessage = await _httpClient.GetAsync(
                $"http://{configuration["AiPredictApi:IP"]}:{configuration["AiPredictApi:Port"]}/predict?imagePath={imageFileName}");

            if (predictionResponseMessage.StatusCode == HttpStatusCode.BadRequest)
            {
                return BadRequest("Server troubles. Try later.");
            }

            var prediction = await predictionResponseMessage.Content.ReadAsStringAsync();
            return Ok(prediction);
        }
    
        private async Task<string> CopyImageToDirectory(IFormFile? image)
        {
            if (image == null || image.Length == 0)
            {
                throw new ArgumentNullException();
            }

            var filePath = Path.Combine("uploads", image.FileName);

            await using var stream = new FileStream(filePath, FileMode.Create);
            await image.CopyToAsync(stream);

            return image.FileName;
        }
    }
}