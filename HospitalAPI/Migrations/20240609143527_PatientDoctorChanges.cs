using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalAPI.Migrations
{
    /// <inheritdoc />
    public partial class PatientDoctorChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BirthDate",
                table: "Patients",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "WorkPlace",
                table: "Patients",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsAdmin",
                table: "Doctors",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "WorkPlace",
                table: "Doctors",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "WorkPlace",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "IsAdmin",
                table: "Doctors");

            migrationBuilder.DropColumn(
                name: "WorkPlace",
                table: "Doctors");
        }
    }
}
