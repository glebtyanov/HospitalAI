namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
	[ApiController]
	public class DoctorsController(HospitalDbContext context, IMapper mapper) : ControllerBase
	{
        private readonly DoctorValidator _validator = new();

		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			var doctors = await context.Doctors.ToListAsync();

			return Ok(doctors);
		}
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var doctor = await context.Doctors.FindAsync(id);

            if (doctor is null)
            {
                return NotFound("Object with given id was not found");
            }

            return Ok(doctor);
        }

		[HttpPost]
        [Authorize(Policy = "AdminOnly")]
		public async Task<IActionResult> Create(DoctorAddDto doctorAdd)
		{
			var doctor = mapper.Map<Doctor>(doctorAdd);

			var validationResult = await _validator.ValidateAsync(doctor);

			if (!validationResult.IsValid)
				return BadRequest(validationResult);

			await context.AddAsync(doctor);
			await context.SaveChangesAsync();

			return Ok(mapper.Map<DoctorGetDto>(doctor));
		}

		[HttpPut]
		public async Task<IActionResult> Update(DoctorAddDto doctorUpdate)
		{
			var doctor = mapper.Map<Doctor>(doctorUpdate);

			var validationResult = await _validator.ValidateAsync(doctor);

			if (!validationResult.IsValid)
				return BadRequest(validationResult);

			context.Update(doctor);
			await context.SaveChangesAsync();

			return Ok(mapper.Map<DoctorGetDto>(doctor));
		}

		[HttpDelete]
		public async Task<IActionResult> Delete(int id)
		{
			context.Doctors.Remove(await context.Doctors.FindAsync(id));
            await context.SaveChangesAsync();

			return NoContent();
		}
	}
}