using FinanceService.Domain.Enums;

namespace FinanceService.Application.Dtos
{
    public class ExpenseDto
    {
        public Guid Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime DateIncurred { get; set; }
        public ExpenseCategory Category { get; set; }
        public string? ReceiptUrl { get; set; }
        public Guid RecordedByUserId { get; set; }
    }
}