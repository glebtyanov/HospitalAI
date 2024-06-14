namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class IdentityController(HospitalDbContext context, IConfiguration config) : ControllerBase
    {
        [HttpPost("login")]
        public async Task<string> LoginAsync(LoginDto loginDto)
        {
            var doctor = await context.Doctors
                .Where(e => e.Login == loginDto.Login && e.Password == loginDto.Password)
                .FirstOrDefaultAsync();

            var token = GenerateJsonWebToken(doctor!);

            return token;
        }

        private string GenerateJsonWebToken(Doctor doctor)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            ClaimsIdentity claimsIdentity;
            if (doctor.IsAdmin)
            {
                claimsIdentity = new ClaimsIdentity(new Claim[]
                {
                    new(nameof(doctor.Position), doctor.Position),
                    new(nameof(doctor.FullName), doctor.FullName),
                    new(nameof(doctor.IsAdmin), doctor.IsAdmin.ToString())
                });
            }
            else
            {
                claimsIdentity = new ClaimsIdentity(new Claim[]
                {
                    new(nameof(doctor.Position), doctor.Position),
                    new(nameof(doctor.FullName), doctor.FullName)
                });
            }

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                Expires = DateTime.Now.AddMinutes(120),
                Issuer = config["Jwt:Issuer"],
                Audience = config["Jwt:Audience"],
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}