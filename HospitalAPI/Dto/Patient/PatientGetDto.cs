namespace HospitalAPI.Dto.Patient
{
    public class PatientGetDto
    {
            public int PatientId { get; set; }
            public string FullName { get; set; } = null!;
            public string BirthDate { get; set; } = null!;
            public string WorkPlace { get; set; } = null!;
    }
}