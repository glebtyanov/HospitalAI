using HospitalAPI.Models;

namespace HospitalAPI.Validators
{
	public class PatientValidator : AbstractValidator<Patient>
	{
		public PatientValidator()
		{
			RuleFor(p => p.FullName).NotEmpty().MaximumLength(100);
		}
	}
}
