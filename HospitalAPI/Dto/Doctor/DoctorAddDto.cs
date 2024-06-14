namespace HospitalAPI.Dto.Doctor
{
	public class DoctorAddDto
	{
		public string FullName { get; set; } = null!;
		public string Position { get; set; } = null!;
        public string Login { get; set; } = null!;
        public string Password { get; set; } = null!;
        public bool IsAdmin { get; set; }
        public string WorkPlace { get; set; } = null!;
	}
}
