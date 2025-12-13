using FinanceService.Domain.Enums;

namespace FinanceService.Application.Interfaces
{
    public interface IPaymentStrategyFactory
    {
        IPaymentStrategy GetStrategy(PaymentMethod method);
    }
}