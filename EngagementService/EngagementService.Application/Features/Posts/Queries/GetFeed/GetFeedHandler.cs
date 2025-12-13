using AutoMapper;
using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Posts.Queries.GetFeed
{
    public class GetFeedHandler : IRequestHandler<GetFeedQuery, List<PostDto>>
    {
        private readonly IPostRepository _repository;
        private readonly IMapper _mapper;

        public GetFeedHandler(IPostRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<PostDto>> Handle(GetFeedQuery request, CancellationToken cancellationToken)
        {
            var posts = await _repository.GetFeedPostsAsync(request.PageNumber, request.PageSize);
            return _mapper.Map<List<PostDto>>(posts);
        }
    }
}