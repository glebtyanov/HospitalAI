namespace HospitalAPI.Dto.Disease
{
	public class DiseaseGetDto
	{
        public int DiseaseId { get; set; }
        public string Class { get; set; } = null!;
        public string Name { get; set; } = null!;
	}
}