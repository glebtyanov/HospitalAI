namespace HospitalAPI.Dto
{
    public class ReportDto
    {
        public int ExaminationId { get; set; }
        public string DoctorName { get; set; } = null!;
        public string DiseaseName { get; set; } = null!;
        public DateTime ExaminationDate { get; set; }
        public string Conclusion { get; set; }
    }
}