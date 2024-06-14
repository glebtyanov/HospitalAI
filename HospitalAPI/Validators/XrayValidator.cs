using HospitalAPI.Models;

namespace HospitalAPI.Validators
{
	public class XrayValidator : AbstractValidator<Xray>
	{
		public XrayValidator()
		{
			RuleFor(o => o.XrayId).NotEmpty();
			RuleFor(p => p.XrayCode).NotEmpty().MaximumLength(50);
			RuleFor(p => p.XrayFileIndex).NotEmpty().MaximumLength(300);
		}
	}
}
