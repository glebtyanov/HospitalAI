namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ExaminationsController(HospitalDbContext context, IMapper mapper) : ControllerBase
    {
        private readonly ExaminationValidator _validator = new();

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var examinations = await context.Examinations.ToListAsync();

            return Ok(examinations);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var examination = await context.Examinations.FindAsync(id);

            if (examination is null)
            {
                return NotFound("Object with given id was not found");
            }

            return Ok(examination);
        }

        [HttpPost]
        public async Task<IActionResult> Create(ExaminationAddDto examinationAdd)
        {
            var examination = mapper.Map<Examination>(examinationAdd);

            var validationResult = await _validator.ValidateAsync(examination);

            if (!validationResult.IsValid)
                return BadRequest(validationResult);

            await context.Examinations.AddAsync(examination);
            await context.SaveChangesAsync();

            return Ok(mapper.Map<ExaminationGetDto>(examination));
        }

        [HttpPut]
        public async Task<IActionResult> Update(ExaminationAddDto examinationUpdate)
        {
            var examination = mapper.Map<Examination>(examinationUpdate);

            var validationResult = await _validator.ValidateAsync(examination);

            if (!validationResult.IsValid)
                return BadRequest(validationResult);

            context.Update(examination);
            await context.SaveChangesAsync();

            return Ok(mapper.Map<ExaminationGetDto>(examination));
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            context.Examinations.Remove(await context.Examinations.FindAsync(id));
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}