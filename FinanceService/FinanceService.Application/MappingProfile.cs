using AutoMapper;
using FinanceService.Application.Dtos;
using FinanceService.Domain.Entities;

namespace FinanceService.Application
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Invoice, InvoiceDto>().ReverseMap();
            CreateMap<InvoiceItem, InvoiceItemDto>().ReverseMap();
            CreateMap<Payment, PaymentDto>().ReverseMap();
            CreateMap<Expense, ExpenseDto>().ReverseMap();
        }
    }
}