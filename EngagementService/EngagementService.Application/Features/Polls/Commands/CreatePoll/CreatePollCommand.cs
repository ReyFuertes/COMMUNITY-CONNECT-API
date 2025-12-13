using MediatR;
using EngagementService.Application.Dtos;

namespace EngagementService.Application.Features.Polls.Commands.CreatePoll
{
    public record CreatePollCommand(Guid AdminId, string Question, DateTime ExpiresAt, List<string> Options) : IRequest<PollDto>;
}