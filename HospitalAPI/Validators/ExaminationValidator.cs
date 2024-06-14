using HospitalAPI.Models;

namespace HospitalAPI.Validators
{
	public class ExaminationValidator : AbstractValidator<Examination>
	{
		public ExaminationValidator()
		{
			RuleFor(e => e.PatientId).NotEmpty();
			RuleFor(e => e.Conclusion).NotEmpty();
			RuleFor(e => e.DiseaseId).NotEmpty();
			RuleFor(e => e.DoctorId).NotEmpty();
			RuleFor(e => e.ExaminationDate).NotEmpty();
		}
	}
}