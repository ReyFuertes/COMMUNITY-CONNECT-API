using AutoMapper;
using FinanceService.Application.Dtos;
using FinanceService.Domain.Interfaces;
using MediatR;

namespace FinanceService.Application.Features.Invoices.Queries.GetInvoicesByResident
{
    public class GetInvoicesByResidentHandler : IRequestHandler<GetInvoicesByResidentQuery, List<InvoiceDto>>
    {
        private readonly IInvoiceRepository _repository;
        private readonly IMapper _mapper;

        public GetInvoicesByResidentHandler(IInvoiceRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<InvoiceDto>> Handle(GetInvoicesByResidentQuery request, CancellationToken cancellationToken)
        {
            var invoices = await _repository.GetByResidentIdAsync(request.ResidentId);
            return _mapper.Map<List<InvoiceDto>>(invoices);
        }
    }
}