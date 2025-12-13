using AutoMapper;
using DocumentService.Application.Dtos;
using DocumentService.Domain.Entities;

namespace DocumentService.Application
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Document, DocumentDto>().ReverseMap();
            CreateMap<DocumentCategory, DocumentCategoryDto>().ReverseMap();
            CreateMap<DocumentPermission, DocumentPermissionDto>().ReverseMap();
        }
    }
}