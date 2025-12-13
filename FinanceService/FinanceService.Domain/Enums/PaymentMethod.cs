namespace FinanceService.Domain.Enums
{
    public enum PaymentMethod
    {
        Cash,
        BankTransfer,
        Check,
        OnlinePayment, // Stripe/PayPal
        EWallet
    }
}