using MediatR;

namespace EngagementService.Application.Features.Polls.Commands.VoteOnPoll
{
    public record VoteOnPollCommand(Guid PollId, Guid PollOptionId, Guid UserId) : IRequest<bool>;
}