using FinanceService.Domain.Interfaces;
using MediatR;

namespace FinanceService.Application.Features.Payments.Commands.UploadPaymentProof
{
    public class UploadPaymentProofHandler : IRequestHandler<UploadPaymentProofCommand, bool>
    {
        private readonly IPaymentRepository _repository;

        public UploadPaymentProofHandler(IPaymentRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> Handle(UploadPaymentProofCommand request, CancellationToken cancellationToken)
        {
            var payment = await _repository.GetByIdAsync(request.PaymentId);
            if (payment == null) return false;

            payment.ProofOfPaymentUrl = request.ProofUrl;
            payment.Status = Domain.Enums.PaymentStatus.PendingVerification;
            payment.UpdatedAt = DateTime.UtcNow;

            await _repository.UpdateAsync(payment);
            return true;
        }
    }
}