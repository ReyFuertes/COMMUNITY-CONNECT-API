using MediatR;
using DocumentService.Application.Dtos;

namespace DocumentService.Application.Features.Documents.Queries.GetDocumentsByCategory
{
    public record GetDocumentsByCategoryQuery(Guid CategoryId, Guid UserId) : IRequest<List<DocumentDto>>;
}