using FinanceService.Application.Models;
using FinanceService.Domain.Entities;

namespace FinanceService.Application.Interfaces
{
    public interface IPaymentStrategy
    {
        Task<PaymentInitiationResult> InitiatePaymentAsync(Payment payment, Invoice invoice);
    }
}