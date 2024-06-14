namespace HospitalAPI.Dto.Examination
{
	public class ExaminationAddDto
	{
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
        public int DiseaseId { get; set; }
        public string Conclusion { get; set; } = null!;
        public DateTime ExaminationDate { get; set; }
	}
}
