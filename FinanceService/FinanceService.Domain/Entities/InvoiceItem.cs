namespace FinanceService.Domain.Entities
{
    public class InvoiceItem
    {
        public Guid Id { get; set; }
        public Guid InvoiceId { get; set; }
        public required string Description { get; set; }
        public decimal Amount { get; set; }
        
        // Navigation property
        public Invoice? Invoice { get; set; }
    }
}