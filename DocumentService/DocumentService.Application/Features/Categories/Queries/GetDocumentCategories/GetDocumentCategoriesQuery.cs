using MediatR;
using DocumentService.Application.Dtos;

namespace DocumentService.Application.Features.Categories.Queries.GetDocumentCategories
{
    public record GetDocumentCategoriesQuery() : IRequest<List<DocumentCategoryDto>>;
}