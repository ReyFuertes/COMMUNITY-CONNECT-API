using MediatR;
using EngagementService.Application.Dtos;

namespace EngagementService.Application.Features.Polls.Queries.GetPollResults
{
    public record GetPollResultsQuery(Guid PollId) : IRequest<PollDto>;
}