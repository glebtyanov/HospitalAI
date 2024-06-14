namespace HospitalAPI.Dto.Xray
{
	public class XrayGetDto
	{
		public int XrayId { get; set; }
		public string XrayCode { get; set; } = null!;
		public string XrayFileIndex { get; set; } = null!;
	}

}
