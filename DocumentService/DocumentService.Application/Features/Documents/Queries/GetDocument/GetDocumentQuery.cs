using MediatR;
using DocumentService.Application.Dtos;

namespace DocumentService.Application.Features.Documents.Queries.GetDocument
{
    public record GetDocumentQuery(Guid DocumentId, Guid UserId) : IRequest<DocumentDto>;
}