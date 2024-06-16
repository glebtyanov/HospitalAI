using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HospitalAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddNewProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Examinations_Doctors_ExaminationId",
                table: "Examinations");

            migrationBuilder.AlterColumn<int>(
                name: "ExaminationId",
                table: "Examinations",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.CreateIndex(
                name: "IX_Examinations_DoctorId",
                table: "Examinations",
                column: "DoctorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Examinations_Doctors_DoctorId",
                table: "Examinations",
                column: "DoctorId",
                principalTable: "Doctors",
                principalColumn: "DoctorId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Examinations_Doctors_DoctorId",
                table: "Examinations");

            migrationBuilder.DropIndex(
                name: "IX_Examinations_DoctorId",
                table: "Examinations");

            migrationBuilder.AlterColumn<int>(
                name: "ExaminationId",
                table: "Examinations",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .OldAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddForeignKey(
                name: "FK_Examinations_Doctors_ExaminationId",
                table: "Examinations",
                column: "ExaminationId",
                principalTable: "Doctors",
                principalColumn: "DoctorId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
