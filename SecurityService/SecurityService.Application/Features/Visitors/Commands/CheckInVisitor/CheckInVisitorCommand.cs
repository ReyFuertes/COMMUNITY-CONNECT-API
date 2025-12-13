using MediatR;

namespace SecurityService.Application.Features.Visitors.Commands.CheckInVisitor
{
    public record CheckInVisitorCommand(string AccessCode, Guid GuardId) : IRequest<bool>;
}