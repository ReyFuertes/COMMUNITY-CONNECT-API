using MediatR;

namespace FinanceService.Application.Features.Payments.Commands.UploadPaymentProof
{
    public record UploadPaymentProofCommand(Guid PaymentId, string ProofUrl) : IRequest<bool>;
}