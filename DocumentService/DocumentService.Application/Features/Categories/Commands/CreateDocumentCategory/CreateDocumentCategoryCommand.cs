using MediatR;
using DocumentService.Application.Dtos;

namespace DocumentService.Application.Features.Categories.Commands.CreateDocumentCategory
{
    public record CreateDocumentCategoryCommand(string Name, string? Description, Guid? ParentCategoryId) : IRequest<DocumentCategoryDto>;
}