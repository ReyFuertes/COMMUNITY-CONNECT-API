using FinanceService.Application.Dtos;
using MediatR;

namespace FinanceService.Application.Features.Invoices.Commands.CreateInvoice
{
    public record CreateInvoiceCommand : IRequest<Guid>
    {
        public Guid ResidentId { get; set; }
        public Guid UnitId { get; set; }
        public DateTime DueDate { get; set; }
        public List<InvoiceItemDto> Items { get; set; } = new();
    }
}