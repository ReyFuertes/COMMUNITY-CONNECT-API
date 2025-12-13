using AutoMapper;
using MediatR;
using DocumentService.Application.Dtos;
using DocumentService.Domain.Entities;
using DocumentService.Domain.Interfaces;

namespace DocumentService.Application.Features.Documents.Commands.UploadDocument
{
    public class UploadDocumentHandler : IRequestHandler<UploadDocumentCommand, DocumentDto>
    {
        private readonly IDocumentRepository _documentRepository;
        private readonly IMapper _mapper;

        public UploadDocumentHandler(IDocumentRepository documentRepository, IMapper mapper)
        {
            _documentRepository = documentRepository;
            _mapper = mapper;
        }

        public async Task<DocumentDto> Handle(UploadDocumentCommand request, CancellationToken cancellationToken)
        {
            // Check for existing document to handle versioning
            var existingDocument = await _documentRepository.GetLatestVersionAsync(request.DocumentCategoryId, request.FileName);
            int newVersion = (existingDocument?.Version ?? 0) + 1;

            var document = _mapper.Map<Document>(request);
            document.Id = Guid.NewGuid();
            document.Version = newVersion;
            document.UploadDate = DateTime.UtcNow;

            await _documentRepository.AddAsync(document);
            return _mapper.Map<DocumentDto>(document);
        }
    }
}