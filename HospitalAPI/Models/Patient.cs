// ReSharper disable PropertyCanBeMadeInitOnly.Global
namespace HospitalAPI.Models
{
    public class Patient
    {
            public int PatientId { get; set; }
            public string FullName { get; set; } = null!;
            public string BirthDate { get; set; } = null!;
            public string WorkPlace { get; set; } = null!;
            public List<Examination> Examinations { get; set; } = null!;
    }
}