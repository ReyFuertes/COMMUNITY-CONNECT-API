using FinanceService.Application.Interfaces;
using FinanceService.Domain.Enums;
using FinanceService.Infrastructure.Strategies;
using Microsoft.Extensions.DependencyInjection;

namespace FinanceService.Infrastructure
{
    public class PaymentStrategyFactory : IPaymentStrategyFactory
    {
        private readonly IServiceProvider _serviceProvider;

        public PaymentStrategyFactory(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public IPaymentStrategy GetStrategy(PaymentMethod method)
        {
            return method switch
            {
                PaymentMethod.OnlinePayment => _serviceProvider.GetRequiredService<StripePaymentStrategy>(),
                PaymentMethod.EWallet => _serviceProvider.GetRequiredService<XenditPaymentStrategy>(),
                PaymentMethod.BankTransfer => _serviceProvider.GetRequiredService<BankDepositStrategy>(),
                PaymentMethod.Cash => _serviceProvider.GetRequiredService<BankDepositStrategy>(), // Treat manual as deposit for tracking
                PaymentMethod.Check => _serviceProvider.GetRequiredService<BankDepositStrategy>(),
                _ => throw new ArgumentException("Invalid payment method")
            };
        }
    }
}