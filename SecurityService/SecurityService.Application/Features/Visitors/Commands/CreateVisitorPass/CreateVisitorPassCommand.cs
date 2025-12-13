using MediatR;
using SecurityService.Application.Dtos;

namespace SecurityService.Application.Features.Visitors.Commands.CreateVisitorPass
{
    public record CreateVisitorPassCommand(Guid ResidentId, Guid UnitId, string GuestName, DateTime VisitDate, string? VehiclePlateNumber) : IRequest<VisitorPassDto>;
}