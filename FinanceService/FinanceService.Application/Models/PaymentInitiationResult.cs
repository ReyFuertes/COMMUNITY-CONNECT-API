namespace FinanceService.Application.Models
{
    public class PaymentInitiationResult
    {
        public bool IsSuccess { get; set; }
        public string? PaymentUrl { get; set; } // Redirect here
        public string? ExternalId { get; set; }
        public string? ErrorMessage { get; set; }
    }
}