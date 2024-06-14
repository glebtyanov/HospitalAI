using System.Globalization;
using HospitalAPI.Dto;
using iText.IO.Font;
using iText.Kernel.Font;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using iText.Layout.Properties;

namespace HospitalAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReportsController(HospitalDbContext context) : ControllerBase
    {
        [HttpGet, Route("data/{year}/{month}")]
        public async Task<IActionResult> GetReportData(int year = 2024, int month = 06)
        {
            var reportData = await GetReportByMonthAsync(year, month);
            return Ok(reportData);
        }

        [HttpGet, Route("pdf/{year}/{month}")]
        public async Task<IActionResult> GetReportInPdf(int year = 2024, int month = 12)
        {
            var pdfReportPath = GeneratePdf(await GetReportByMonthAsync(year, month));
            var absolutePath = new DirectoryInfo(Directory.GetCurrentDirectory()).FullName + pdfReportPath[1..];
            return PhysicalFile(absolutePath, "application/pdf", $"Report.{year}.{month}.pdf");
        }

        private async Task<IEnumerable<IGrouping<string, ReportDto>>> GetReportByMonthAsync(int year, int month)
        {
            var reportData = context.Examinations!
                .Include(e => e.Doctor)
                .Include(o => o.Disease)
                .Where(e => e.ExaminationDate.Year == year && e.ExaminationDate.Month == month);
            
            var reportDtos = await (reportData.Select(examination => new ReportDto
            {
                ExaminationId = examination.ExaminationId,
                DoctorName = examination.Doctor.FullName,
                DiseaseName = examination.Disease.Name,
                ExaminationDate = examination.ExaminationDate,
                Conclusion = examination.Conclusion,
            }).ToListAsync());
            return reportDtos.GroupBy(r => r.DiseaseName);
        }

        private static string GeneratePdf(IEnumerable<IGrouping<string, ReportDto>> groupedData)
        {
            var pdfDest = $"./reports/report{DateTime.Now:yy-MM-dd}.pdf";
            var fileStream = new FileStream(pdfDest, FileMode.Create);
            fileStream.Close();
            using var writer = new PdfWriter(pdfDest);
            using var pdf = new PdfDocument(writer);
            var document = new Document(pdf);
            var currentDir = Directory.GetCurrentDirectory();

            var fontProgram = FontProgramFactory.CreateFont(currentDir + "/wwwroot/fonts/Arsenal-Regular.otf");
            var font = PdfFontFactory.CreateFont(fontProgram);
            document.SetFont(font);
            document.Add(new Paragraph($"Создано в {DateTime.Now}"));
            foreach (var group in groupedData)
            {
                document.Add(new Paragraph($"Болезнь {group.Key}. Всего {group.Count()}"));
                var table = new Table(UnitValue.CreatePercentArray(6)).UseAllAvailableWidth();
                table.AddHeaderCell("Код заключения");
                table.AddHeaderCell("ФИО врача");
                table.AddHeaderCell("Дата заключения");
                table.AddHeaderCell("Заключение");
                foreach (var examination in group)
                {
                    table.AddCell(examination.ExaminationId.ToString());
                    table.AddCell(examination.DoctorName);
                    table.AddCell(examination.ExaminationDate.ToString(CultureInfo.InvariantCulture));
                    table.AddCell(examination.Conclusion);
                }

                document.Add(table);
                document.Add(new Paragraph("\n"));
            }

            return pdfDest;
        }
    }
}