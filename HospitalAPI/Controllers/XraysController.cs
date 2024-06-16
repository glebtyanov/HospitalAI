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

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(XrayAddDto xrayUpdate, int id)
		{
            var patient = await context.Xrays.FindAsync(id);

            if (patient is null)
            {
                return NotFound();
            }
            
            patient = mapper.Map<Xray>(xrayUpdate);
            patient.XrayId = id;
            
            var validationResult = await _validator.ValidateAsync(patient);

            if (!validationResult.IsValid)
                return BadRequest(validationResult);

            context.Update(patient);
            await context.SaveChangesAsync();

            return Ok(mapper.Map<XrayGetDto>(patient));
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