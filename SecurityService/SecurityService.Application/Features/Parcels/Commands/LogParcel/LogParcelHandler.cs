using MediatR;
using SecurityService.Application.Interfaces;
using SecurityService.Domain.Entities;
using SecurityService.Domain.Enums;
using SecurityService.Domain.Interfaces;

namespace SecurityService.Application.Features.Parcels.Commands.LogParcel
{
    public class LogParcelHandler : IRequestHandler<LogParcelCommand, Guid>
    {
        private readonly IParcelRepository _repository;
        private readonly INotificationClient _notificationClient;

        public LogParcelHandler(IParcelRepository repository, INotificationClient notificationClient)
        {
            _repository = repository;
            _notificationClient = notificationClient;
        }

        public async Task<Guid> Handle(LogParcelCommand request, CancellationToken cancellationToken)
        {
            var pickupCode = new Random().Next(100000, 999999).ToString(); 

            var parcel = new Parcel
            {
                Id = Guid.NewGuid(),
                ResidentId = request.ResidentId,
                UnitId = request.UnitId,
                CourierName = request.CourierName,
                TrackingNumber = request.TrackingNumber,
                PhotoUrl = request.PhotoUrl,
                Status = ParcelStatus.Received,
                PickupCode = pickupCode,
                ReceivedAt = DateTime.UtcNow,
                ReceivedByGuardId = request.GuardId
            };

            await _repository.AddAsync(parcel);

            await _notificationClient.SendParcelArrivedNotificationAsync(request.ResidentId, pickupCode);

            return parcel.Id;
        }
    }
}