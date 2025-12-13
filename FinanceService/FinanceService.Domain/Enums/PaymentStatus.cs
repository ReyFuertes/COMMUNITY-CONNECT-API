namespace FinanceService.Domain.Enums
{
    public enum PaymentStatus
    {
        Pending,
        Completed,
        Failed,
        Cancelled,
        PendingVerification // For manual bank deposits
    }
}