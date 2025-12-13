using FinanceService.Application.Interfaces;
using FinanceService.Application.Models;
using FinanceService.Domain.Entities;

namespace FinanceService.Infrastructure.Strategies
{
    public class BankDepositStrategy : IPaymentStrategy
    {
        public Task<PaymentInitiationResult> InitiatePaymentAsync(Payment payment, Invoice invoice)
        {
            // Logic: Return success immediately. 
            // The frontend should interpret "IsSuccess=true" + "No External URL" as "Show Bank Details & Upload Form".
            // Or we can provide a frontend route.
            
            return Task.FromResult(new PaymentInitiationResult
            {
                IsSuccess = true,
                PaymentUrl = $"/finance/upload-receipt/{payment.Id}", // Frontend route
                ExternalId = null
            });
        }
    }
}