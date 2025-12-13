using MediatR;

namespace EngagementService.Application.Features.Posts.Commands.ModeratePost
{
    public record ModeratePostCommand(Guid PostId, Guid ModeratorId, bool IsModerated) : IRequest<bool>;
}