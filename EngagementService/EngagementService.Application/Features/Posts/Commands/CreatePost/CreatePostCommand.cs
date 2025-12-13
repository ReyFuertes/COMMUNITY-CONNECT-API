using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Domain.Enums;

namespace EngagementService.Application.Features.Posts.Commands.CreatePost
{
    public record CreatePostCommand(Guid AuthorId, string Content, PostType Type) : IRequest<PostDto>;
}