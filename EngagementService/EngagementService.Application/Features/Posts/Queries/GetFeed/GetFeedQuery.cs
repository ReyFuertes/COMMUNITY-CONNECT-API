using MediatR;
using EngagementService.Application.Dtos;

namespace EngagementService.Application.Features.Posts.Queries.GetFeed
{
    public record GetFeedQuery(int PageNumber = 1, int PageSize = 20) : IRequest<List<PostDto>>;
}