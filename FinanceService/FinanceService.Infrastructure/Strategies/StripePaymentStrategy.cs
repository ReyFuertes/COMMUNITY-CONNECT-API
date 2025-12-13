using FinanceService.Application.Interfaces;
using FinanceService.Application.Models;
using FinanceService.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Stripe;
using Stripe.Checkout;

namespace FinanceService.Infrastructure.Strategies
{
    public class StripePaymentStrategy : IPaymentStrategy
    {
        private readonly IConfiguration _config;

        public StripePaymentStrategy(IConfiguration config)
        {
            _config = config;
            StripeConfiguration.ApiKey = _config["Stripe:SecretKey"];
        }

        public async Task<PaymentInitiationResult> InitiatePaymentAsync(Payment payment, FinanceService.Domain.Entities.Invoice invoice)
        {
            try
            {
                var options = new SessionCreateOptions
                {
                    PaymentMethodTypes = new List<string> { "card" },
                    LineItems = new List<SessionLineItemOptions>
                    {
                        new SessionLineItemOptions
                        {
                            PriceData = new SessionLineItemPriceDataOptions
                            {
                                UnitAmount = (long)(payment.Amount * 100), // Cents
                                Currency = "php",
                                ProductData = new SessionLineItemPriceDataProductDataOptions
                                {
                                    Name = $"Invoice #{invoice.InvoiceNumber}",
                                },
                            },
                            Quantity = 1,
                        },
                    },
                    Mode = "payment",
                    SuccessUrl = _config["Stripe:SuccessUrl"] + "?session_id={CHECKOUT_SESSION_ID}",
                    CancelUrl = _config["Stripe:CancelUrl"],
                    ClientReferenceId = payment.Id.ToString()
                };

                var service = new SessionService();
                var session = await service.CreateAsync(options);

                return new PaymentInitiationResult
                {
                    IsSuccess = true,
                    PaymentUrl = session.Url,
                    ExternalId = session.Id
                };
            }
            catch (StripeException ex)
            {
                return new PaymentInitiationResult
                {
                    IsSuccess = false,
                    ErrorMessage = ex.Message
                };
            }
        }
    }
}