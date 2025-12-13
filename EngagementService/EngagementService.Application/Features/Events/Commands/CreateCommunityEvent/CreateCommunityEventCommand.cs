using MediatR;
using EngagementService.Application.Dtos;

namespace EngagementService.Application.Features.Events.Commands.CreateCommunityEvent
{
    public record CreateCommunityEventCommand(
        string Title, 
        string? Description, 
        DateTime EventDate, 
        DateTime EventTime, 
        string Location, 
        Guid OrganizerId) : IRequest<CommunityEventDto>;
}