using FinanceService.Domain.Enums;

namespace FinanceService.Application.Dtos
{
    public class InvoiceDto
    {
        public Guid Id { get; set; }
        public Guid ResidentId { get; set; }
        public Guid UnitId { get; set; }
        public string InvoiceNumber { get; set; } = string.Empty;
        public DateTime IssueDate { get; set; }
        public DateTime DueDate { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal AmountPaid { get; set; }
        public InvoiceStatus Status { get; set; }
        public List<InvoiceItemDto> Items { get; set; } = new();
    }
}