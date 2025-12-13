using AutoMapper;
using MediatR;
using DocumentService.Application.Dtos;
using DocumentService.Domain.Interfaces;

namespace DocumentService.Application.Features.Categories.Queries.GetDocumentCategories
{
    public class GetDocumentCategoriesHandler : IRequestHandler<GetDocumentCategoriesQuery, List<DocumentCategoryDto>>
    {
        private readonly IDocumentCategoryRepository _repository;
        private readonly IMapper _mapper;

        public GetDocumentCategoriesHandler(IDocumentCategoryRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<DocumentCategoryDto>> Handle(GetDocumentCategoriesQuery request, CancellationToken cancellationToken)
        {
            var categories = await _repository.GetAllAsync();
            return _mapper.Map<List<DocumentCategoryDto>>(categories);
        }
    }
}