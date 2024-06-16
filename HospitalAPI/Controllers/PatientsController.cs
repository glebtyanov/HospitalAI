using Microsoft.AspNetCore.Http.HttpResults;

namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PatientsController(HospitalDbContext context, IMapper mapper) : ControllerBase
    {
        private readonly PatientValidator _validator = new();

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var patients = await context.Patients.ToListAsync();

            return Ok(patients);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var patient = await context.Patients.FindAsync(id);

            if (patient is null)
            {
                return NotFound("Object with given id was not found");
            }

            return Ok(patient);
        }

        [HttpPost]
        public async Task<IActionResult> Create(PatientAddDto patientAdd)
        {
            var patient = mapper.Map<Patient>(patientAdd);

            var validationResult = await _validator.ValidateAsync(patient);

            if (!validationResult.IsValid)
                return BadRequest(validationResult);

            await context.AddAsync(patient);
            await context.SaveChangesAsync();

            return Ok(mapper.Map<PatientGetDto>(patient));
        }

        [HttpPut]
        public async Task<IActionResult> Update(PatientAddDto patientUpdate, int id)
        {
            var patient = await context.Patients.FindAsync(id);

            if (patient is null)
            {
                return NotFound();
            }
            
            patient = mapper.Map<Patient>(patientUpdate);
            patient.PatientId = id;
            
            var validationResult = await _validator.ValidateAsync(patient);

            if (!validationResult.IsValid)
                return BadRequest(validationResult);

            context.Update(patient);
            await context.SaveChangesAsync();

            return Ok(mapper.Map<PatientGetDto>(patient));
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var patient = await context.Patients.FindAsync(id);

            if (patient is null)
            {
                return NotFound("Object with given id was not found");
            }

            context.Patients.Remove(patient);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}