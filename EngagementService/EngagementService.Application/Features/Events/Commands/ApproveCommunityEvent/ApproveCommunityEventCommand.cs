using MediatR;

namespace EngagementService.Application.Features.Events.Commands.ApproveCommunityEvent
{
    public record ApproveCommunityEventCommand(Guid EventId, Guid AdminId, bool Approve) : IRequest<bool>;
}