namespace HospitalAPI.Validators
{
	public class DoctorValidator : AbstractValidator<Doctor>
	{
		public DoctorValidator()
		{
			RuleFor(o => o.FullName).NotEmpty();
			RuleFor(o => o.Login).NotEmpty();
			RuleFor(o => o.Password).NotEmpty();
			RuleFor(o => o.Position).NotEmpty();
		}
	}
}