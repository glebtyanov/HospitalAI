namespace HospitalAPI.Models
{
    public class Xray
    {
        public int XrayId { get; set; }
        public string XrayCode { get; set; } = null!;
        public string XrayFileIndex { get; set; } = null!;
        public List<Examination> Examinations { get; set; } = new List<Examination>();
    }

}
