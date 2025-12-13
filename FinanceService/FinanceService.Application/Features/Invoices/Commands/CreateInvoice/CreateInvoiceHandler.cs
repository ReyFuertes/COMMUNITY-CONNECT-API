using AutoMapper;
using FinanceService.Domain.Entities;
using FinanceService.Domain.Enums;
using FinanceService.Domain.Interfaces;
using MediatR;

namespace FinanceService.Application.Features.Invoices.Commands.CreateInvoice
{
    public class CreateInvoiceHandler : IRequestHandler<CreateInvoiceCommand, Guid>
    {
        private readonly IInvoiceRepository _repository;
        private readonly IMapper _mapper;

        public CreateInvoiceHandler(IInvoiceRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<Guid> Handle(CreateInvoiceCommand request, CancellationToken cancellationToken)
        {
            var invoice = new Invoice
            {
                Id = Guid.NewGuid(),
                ResidentId = request.ResidentId,
                UnitId = request.UnitId,
                IssueDate = DateTime.UtcNow,
                DueDate = request.DueDate,
                Status = InvoiceStatus.Sent, // Assuming sent immediately for now
                InvoiceNumber = $"INV-{DateTime.UtcNow.Ticks}",
                CreatedAt = DateTime.UtcNow,
                Items = new List<InvoiceItem>()
            };

            decimal total = 0;
            foreach (var itemDto in request.Items)
            {
                var item = _mapper.Map<InvoiceItem>(itemDto);
                item.Id = Guid.NewGuid();
                item.InvoiceId = invoice.Id;
                invoice.Items.Add(item);
                total += item.Amount;
            }

            invoice.TotalAmount = total;

            await _repository.AddAsync(invoice);

            return invoice.Id;
        }
    }
}