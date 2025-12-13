using FinanceService.Domain.Enums;
using MediatR;

namespace FinanceService.Application.Features.Payments.Commands.UpdatePaymentStatus
{
    public record UpdatePaymentStatusCommand(string ExternalId, PaymentStatus Status) : IRequest<bool>;
}