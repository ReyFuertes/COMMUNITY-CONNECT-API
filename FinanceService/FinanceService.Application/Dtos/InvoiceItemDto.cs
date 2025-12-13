namespace FinanceService.Application.Dtos
{
    public class InvoiceItemDto
    {
        public Guid Id { get; set; }
        public required string Description { get; set; }
        public decimal Amount { get; set; }
    }
}