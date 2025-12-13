using AutoMapper;
using MediatR;
using DocumentService.Application.Dtos;
using DocumentService.Application.Features.Permissions.Queries.CheckUserPermission;
using DocumentService.Domain.Interfaces;

namespace DocumentService.Application.Features.Documents.Queries.GetDocument
{
    public class GetDocumentHandler : IRequestHandler<GetDocumentQuery, DocumentDto>
    {
        private readonly IDocumentRepository _documentRepository;
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public GetDocumentHandler(IDocumentRepository documentRepository, IMediator mediator, IMapper mapper)
        {
            _documentRepository = documentRepository;
            _mediator = mediator;
            _mapper = mapper;
        }

        public async Task<DocumentDto> Handle(GetDocumentQuery request, CancellationToken cancellationToken)
        {
            var document = await _documentRepository.GetByIdAsync(request.DocumentId);
            if (document == null) throw new FileNotFoundException("Document not found.");

            // Check if user has permission to view this document's category
            var canView = await _mediator.Send(new CheckUserPermissionQuery(document.DocumentCategoryId, request.UserId, Domain.Enums.PermissionType.View));
            if (!canView)
            {
                throw new UnauthorizedAccessException("User does not have permission to view this document.");
            }

            return _mapper.Map<DocumentDto>(document);
        }
    }
}