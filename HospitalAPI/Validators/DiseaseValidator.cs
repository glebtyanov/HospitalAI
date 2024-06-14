using HospitalAPI.Models;

namespace HospitalAPI.Validators
{
	public class DiseaseValidator : AbstractValidator<Disease>
	{
		public DiseaseValidator()
		{
			RuleFor(e => e.Class).NotEmpty();
			RuleFor(e => e.Name).NotEmpty();
		}
	}
}