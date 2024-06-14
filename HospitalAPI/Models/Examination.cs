namespace HospitalAPI.Models;

public class Examination
{
    public int ExaminationId { get; set; }
    public int PatientId { get; set; }
    public int DoctorId { get; set; }
    public int DiseaseId { get; set; }
    public string Conclusion { get; set; } = null!;
    public DateTime ExaminationDate { get; set; }
    public Doctor Doctor { get; set; } = null!;
    public Patient Patient { get; set; } = null!;
    public Disease Disease { get; set; } = null!;
    public List<Xray> Xrays { get; set; } = null!;
}