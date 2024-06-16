using Microsoft.AspNetCore.Http.HttpResults;

namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
	[ApiController]
	public class DiseasesController(HospitalDbContext context, IMapper mapper) : ControllerBase
	{
        private readonly DiseaseValidator _validator = new();

		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			var diseases = await context.Diseases.ToListAsync();

			return Ok(diseases);
		}

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var disease = await context.Diseases.FindAsync(id);

            if (disease is null)
            {
                return NotFound("Object with given id was not found");
            }

            return Ok(disease);
        }

		[HttpPost]
		public async Task<IActionResult> Create(DiseaseAddDto diseaseAdd)
		{
			var disease = mapper.Map<Disease>(diseaseAdd);

			var validationResult = await _validator.ValidateAsync(disease);

			if (!validationResult.IsValid)
				return BadRequest(validationResult);

			await context.AddAsync(disease);
			await context.SaveChangesAsync();

			return Ok(mapper.Map<DiseaseGetDto>(disease));
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(DiseaseAddDto diseaseUpdate, int id)
        {
            var disease = await context.Diseases.FindAsync(id);

            if (disease is null)
            {
                return NotFound();
            }
            
            disease = mapper.Map<Disease>(diseaseUpdate);
            disease.DiseaseId = id;
            
			var validationResult = await _validator.ValidateAsync(disease);

			if (!validationResult.IsValid)
				return BadRequest(validationResult);

			context.Update(disease);
			await context.SaveChangesAsync();

			return Ok(mapper.Map<DiseaseGetDto>(disease));
		}

		[HttpDelete]
		public async Task<IActionResult> Delete(int id)
		{
			context.Diseases.Remove(await context.Diseases.FindAsync(id));
            await context.SaveChangesAsync();

			return NoContent();
		}
	}
}