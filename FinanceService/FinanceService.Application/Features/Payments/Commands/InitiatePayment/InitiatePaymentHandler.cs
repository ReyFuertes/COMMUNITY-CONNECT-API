using FinanceService.Application.Interfaces;
using FinanceService.Application.Models;
using FinanceService.Domain.Entities;
using FinanceService.Domain.Enums;
using FinanceService.Domain.Interfaces;
using MediatR;

namespace FinanceService.Application.Features.Payments.Commands.InitiatePayment
{
    public class InitiatePaymentHandler : IRequestHandler<InitiatePaymentCommand, PaymentInitiationResult>
    {
        private readonly IPaymentRepository _paymentRepository;
        private readonly IInvoiceRepository _invoiceRepository;
        private readonly IPaymentStrategyFactory _strategyFactory;

        public InitiatePaymentHandler(IPaymentRepository paymentRepository, IInvoiceRepository invoiceRepository, IPaymentStrategyFactory strategyFactory)
        {
            _paymentRepository = paymentRepository;
            _invoiceRepository = invoiceRepository;
            _strategyFactory = strategyFactory;
        }

        public async Task<PaymentInitiationResult> Handle(InitiatePaymentCommand request, CancellationToken cancellationToken)
        {
            var invoice = await _invoiceRepository.GetByIdAsync(request.InvoiceId);
            if (invoice == null)
            {
                return new PaymentInitiationResult { IsSuccess = false, ErrorMessage = "Invoice not found" };
            }

            // Create pending payment record
            var payment = new Payment
            {
                Id = Guid.NewGuid(),
                InvoiceId = request.InvoiceId,
                Amount = request.Amount,
                PaymentDate = DateTime.UtcNow,
                Method = request.Method,
                Status = PaymentStatus.Pending
            };

            await _paymentRepository.AddAsync(payment);

            // Execute Strategy
            var strategy = _strategyFactory.GetStrategy(request.Method);
            var result = await strategy.InitiatePaymentAsync(payment, invoice);

            // Update record with external details
            if (result.IsSuccess)
            {
                payment.ExternalTransactionId = result.ExternalId;
                payment.PaymentUrl = result.PaymentUrl;
                // For Bank Transfer, we might set status to PendingVerification here or let the Upload step do it.
                // Keeping it Pending is fine.
            }
            else
            {
                payment.Status = PaymentStatus.Failed;
                payment.Remarks = result.ErrorMessage;
            }

            await _paymentRepository.UpdateAsync(payment);

            return result;
        }
    }
}