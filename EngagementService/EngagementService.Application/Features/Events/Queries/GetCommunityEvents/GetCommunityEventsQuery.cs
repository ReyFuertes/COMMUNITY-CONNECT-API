using MediatR;
using EngagementService.Application.Dtos;

namespace EngagementService.Application.Features.Events.Queries.GetCommunityEvents
{
    public record GetCommunityEventsQuery(bool ApprovedOnly = true) : IRequest<List<CommunityEventDto>>;
}