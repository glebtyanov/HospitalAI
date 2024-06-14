namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
	[ApiController]
	public class XraysController(HospitalDbContext context, IMapper mapper) : ControllerBase
	{
        private readonly XrayValidator _validator = new();

		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			var xrays = await context.Xrays.ToListAsync();

			return Ok(xrays);
		}
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var xray = await context.Xrays.FindAsync(id);

            if (xray is null)
            {
                return NotFound("Object with given id was not found");
            }

            return Ok(xray);
        }

		[HttpPost]
		public async Task<IActionResult> Create(XrayAddDto xrayAdd)
		{
			var xray = mapper.Map<Xray>(xrayAdd);

			var validationResult = await _validator.ValidateAsync(xray);

			if (!validationResult.IsValid)
				return BadRequest(validationResult);

			await context.AddAsync(xray);
			await context.SaveChangesAsync();

			return Ok(mapper.Map<XrayGetDto>(xray));
		}

		[HttpPut]
		public async Task<IActionResult> Update(XrayAddDto xrayUpdate)
		{
			var xray = mapper.Map<Xray>(xrayUpdate);

			var validationResult = await _validator.ValidateAsync(xray);

			if (!validationResult.IsValid)
				return BadRequest(validationResult);

			context.Update(xray);
			await context.SaveChangesAsync();

			return Ok(mapper.Map<XrayGetDto>(xray));
		}

		[HttpDelete]
		public async Task<IActionResult> Delete(int id)
		{
			context.Xrays.Remove(await context.Xrays.FindAsync(id));
            await context.SaveChangesAsync();

			return NoContent();
		}
	}
}