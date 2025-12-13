using FinanceService.Domain.Enums;

namespace FinanceService.Application.Dtos
{
    public class PaymentDto
    {
        public Guid Id { get; set; }
        public Guid InvoiceId { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public PaymentMethod Method { get; set; }
        public string? TransactionReference { get; set; }
        public string? Remarks { get; set; }
    }
}