// ReSharper disable PropertyCanBeMadeInitOnly.Global
namespace HospitalApi
{
	public class HospitalDbContext(DbContextOptions<HospitalDbContext> options) : DbContext(options)
    {
        public DbSet<Doctor> Doctors { get; set; } = null!;
		public DbSet<Xray> Xrays { get; set; } = null!;
		public DbSet<Examination> Examinations { get; set; } = null!;
		public DbSet<Disease> Diseases { get; set; } = null!;
		public DbSet<Patient> Patients { get; set; } = null!;

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Doctor>(builder =>
			{
				builder.HasKey(e => e.DoctorId);
				builder.Property(e => e.FullName).IsRequired().HasMaxLength(100);
				builder.Property(e => e.Position).IsRequired().HasMaxLength(50);

				builder.HasMany(e => e.Examinations)
					.WithOne(r => r.Doctor)
					.HasForeignKey(r => r.DoctorId);
			});

            modelBuilder.Entity<Examination>(builder =>
            {
                builder.HasKey(e => e.ExaminationId);

                builder.Property(e => e.Conclusion)
                    .IsRequired()
                    .HasMaxLength(1000);

                builder.Property(e => e.ExaminationDate)
                    .IsRequired();

                builder.HasOne(e => e.Doctor)
                    .WithMany(d => d.Examinations)
                    .HasForeignKey(e => e.DoctorId);

                builder.HasOne(e => e.Patient)
                    .WithMany(p => p.Examinations)
                    .HasForeignKey(e => e.PatientId);

                builder.HasOne(e => e.Disease)
                    .WithMany(d => d.Examinations)
                    .HasForeignKey(e => e.DiseaseId);

                builder.HasMany(e => e.Xrays)
                    .WithMany(x => x.Examinations);
            });

			modelBuilder.Entity<Disease>(builder =>
			{
				builder.HasKey(o => o.DiseaseId);
				builder.Property(o => o.Class).IsRequired()
					.HasMaxLength(50);
				builder.Property(o => o.Name).IsRequired()
                    .HasMaxLength(200);

                builder.HasMany(o => o.Examinations)
					.WithOne(p => p.Disease)
					.HasForeignKey(o => o.DiseaseId);
			});

			modelBuilder.Entity<Patient>(builder =>
			{
				builder.HasKey(p => p.PatientId);
				builder.Property(p => p.FullName).IsRequired()
					.HasMaxLength(100);

				builder.HasMany(p => p.Examinations)
					.WithOne(o => o.Patient)
					.HasForeignKey(o => o.PatientId);
			});
            
			modelBuilder.Entity<Xray>(builder =>
			{
				builder.HasKey(p => p.XrayId);
				builder.Property(p => p.XrayFileIndex).IsRequired()
					.HasMaxLength(300);
                builder.Property(p => p.XrayCode).IsRequired()
					.HasMaxLength(50);

                builder.HasMany(p => p.Examinations)
                    .WithMany(o => o.Xrays);
            });
		}
	}
}
