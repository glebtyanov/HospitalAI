namespace HospitalAPI.Models
{
	public class Doctor
	{
		public int DoctorId { get; set; }
		public string FullName { get; set; } = null!;
		public string Login { get; set; } = null!;
		public string Password { get; set; } = null!;
		public string Position { get; set; } = null!;
        public string WorkPlace { get; set; } = null!;

        public bool IsAdmin { get; set; } 

		public List<Examination> Examinations { get; set; } = null!;
	}
}
