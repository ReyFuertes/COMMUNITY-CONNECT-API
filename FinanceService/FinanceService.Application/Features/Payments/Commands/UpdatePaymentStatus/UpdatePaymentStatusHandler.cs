using FinanceService.Domain.Interfaces;
using MediatR;

namespace FinanceService.Application.Features.Payments.Commands.UpdatePaymentStatus
{
    public class UpdatePaymentStatusHandler : IRequestHandler<UpdatePaymentStatusCommand, bool>
    {
        private readonly IPaymentRepository _repository;

        public UpdatePaymentStatusHandler(IPaymentRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> Handle(UpdatePaymentStatusCommand request, CancellationToken cancellationToken)
        {
            var payment = await _repository.GetByExternalIdAsync(request.ExternalId);
            if (payment == null) return false;

            payment.Status = request.Status;
            payment.UpdatedAt = DateTime.UtcNow;

            await _repository.UpdateAsync(payment);
            return true;
        }
    }
}