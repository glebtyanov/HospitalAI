namespace HospitalAPI.Models
{
	public class Disease
	{
		public int DiseaseId { get; set; }
		public string Class { get; set; } = null!;
		public string Name { get; set; } = null!;

        public List<Examination> Examinations { get; set; } = null!;
	}

}
