using MediatR;
using DocumentService.Application.Dtos;

namespace DocumentService.Application.Features.Documents.Commands.UploadDocument
{
    public record UploadDocumentCommand(
        Guid DocumentCategoryId, 
        string FileName, 
        string FilePath, // URL from storage service
        string ContentType, 
        long FileSize,
        Guid UploadedByUserId
    ) : IRequest<DocumentDto>;
}