using MediatR;

namespace SecurityService.Application.Features.Parcels.Commands.LogParcel
{
    public record LogParcelCommand(Guid ResidentId, Guid UnitId, string CourierName, string? TrackingNumber, string PhotoUrl, Guid GuardId) : IRequest<Guid>;
}