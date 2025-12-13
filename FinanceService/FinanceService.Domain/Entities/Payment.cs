using FinanceService.Domain.Enums;

namespace FinanceService.Domain.Entities
{
    public class Payment
    {
        public Guid Id { get; set; }
        public Guid InvoiceId { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public PaymentMethod Method { get; set; }
        public PaymentStatus Status { get; set; } = PaymentStatus.Pending;
        
        public string? ExternalTransactionId { get; set; } // Stripe/Xendit ID
        public string? PaymentUrl { get; set; } // Link to pay (Checkout Session / Invoice)
        public string? ProofOfPaymentUrl { get; set; } // For Manual Bank Deposit
        
        public string? Remarks { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        
        // Navigation Property
        public Invoice? Invoice { get; set; }
    }
}