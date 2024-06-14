namespace HospitalAPI.Dto.Xray
{
	public class XrayAddDto
	{
		public int XrayId { get; set; }
		public string XrayCode { get; set; } = null!;
		public string XrayFileIndex { get; set; } = null!;
	}
}
