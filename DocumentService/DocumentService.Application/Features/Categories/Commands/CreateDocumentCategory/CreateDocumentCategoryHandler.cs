using AutoMapper;
using MediatR;
using DocumentService.Application.Dtos;
using DocumentService.Domain.Entities;
using DocumentService.Domain.Interfaces;

namespace DocumentService.Application.Features.Categories.Commands.CreateDocumentCategory
{
    public class CreateDocumentCategoryHandler : IRequestHandler<CreateDocumentCategoryCommand, DocumentCategoryDto>
    {
        private readonly IDocumentCategoryRepository _repository;
        private readonly IMapper _mapper;

        public CreateDocumentCategoryHandler(IDocumentCategoryRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<DocumentCategoryDto> Handle(CreateDocumentCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = _mapper.Map<DocumentCategory>(request);
            category.Id = Guid.NewGuid();
            category.IsActive = true; // Default

            await _repository.AddAsync(category);
            return _mapper.Map<DocumentCategoryDto>(category);
        }
    }
}