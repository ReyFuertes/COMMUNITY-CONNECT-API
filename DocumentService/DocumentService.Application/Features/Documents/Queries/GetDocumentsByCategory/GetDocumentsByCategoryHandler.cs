using AutoMapper;
using MediatR;
using DocumentService.Application.Dtos;
using DocumentService.Application.Features.Permissions.Queries.CheckUserPermission;
using DocumentService.Domain.Interfaces;

namespace DocumentService.Application.Features.Documents.Queries.GetDocumentsByCategory
{
    public class GetDocumentsByCategoryHandler : IRequestHandler<GetDocumentsByCategoryQuery, List<DocumentDto>>
    {
        private readonly IDocumentRepository _documentRepository;
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public GetDocumentsByCategoryHandler(IDocumentRepository documentRepository, IMediator mediator, IMapper mapper)
        {
            _documentRepository = documentRepository;
            _mediator = mediator;
            _mapper = mapper;
        }

        public async Task<List<DocumentDto>> Handle(GetDocumentsByCategoryQuery request, CancellationToken cancellationToken)
        {
            // Check if user has permission to view documents in this category
            var canView = await _mediator.Send(new CheckUserPermissionQuery(request.CategoryId, request.UserId, Domain.Enums.PermissionType.View));
            if (!canView)
            {
                throw new UnauthorizedAccessException("User does not have permission to view documents in this category.");
            }

            var documents = await _documentRepository.GetByCategoryIdAsync(request.CategoryId);
            return _mapper.Map<List<DocumentDto>>(documents);
        }
    }
}