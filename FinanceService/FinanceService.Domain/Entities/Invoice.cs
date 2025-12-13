using FinanceService.Domain.Enums;

namespace FinanceService.Domain.Entities
{
    public class Invoice
    {
        public Guid Id { get; set; }
        public Guid ResidentId { get; set; } // Foreign Key to User Service
        public Guid UnitId { get; set; }     // Foreign Key to Unit Service
        public string InvoiceNumber { get; set; } = string.Empty;
        public DateTime IssueDate { get; set; }
        public DateTime DueDate { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal AmountPaid { get; set; }
        public InvoiceStatus Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public ICollection<InvoiceItem> Items { get; set; } = new List<InvoiceItem>();
        public ICollection<Payment> Payments { get; set; } = new List<Payment>();
    }
}