using FinanceService.Application.Dtos;
using MediatR;

namespace FinanceService.Application.Features.Invoices.Queries.GetInvoicesByResident
{
    public record GetInvoicesByResidentQuery(Guid ResidentId) : IRequest<List<InvoiceDto>>;
}