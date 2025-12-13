using AutoMapper;
using SecurityService.Application.Dtos;
using SecurityService.Domain.Entities;

namespace SecurityService.Application
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<VisitorPass, VisitorPassDto>();
            CreateMap<Parcel, ParcelDto>();
        }
    }
}