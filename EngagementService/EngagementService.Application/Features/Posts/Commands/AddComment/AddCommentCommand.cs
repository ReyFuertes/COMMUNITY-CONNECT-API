using MediatR;
using EngagementService.Application.Dtos;

namespace EngagementService.Application.Features.Posts.Commands.AddComment
{
    public record AddCommentCommand(Guid PostId, Guid AuthorId, string Content) : IRequest<CommentDto>;
}