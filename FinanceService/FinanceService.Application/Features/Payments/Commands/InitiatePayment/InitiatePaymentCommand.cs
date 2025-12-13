using FinanceService.Application.Models;
using FinanceService.Domain.Enums;
using MediatR;

namespace FinanceService.Application.Features.Payments.Commands.InitiatePayment
{
    public record InitiatePaymentCommand(Guid InvoiceId, decimal Amount, PaymentMethod Method) : IRequest<PaymentInitiationResult>;
}