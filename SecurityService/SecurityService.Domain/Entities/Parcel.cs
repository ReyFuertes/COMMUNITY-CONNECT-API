using SecurityService.Domain.Enums;

namespace SecurityService.Domain.Entities
{
    public class Parcel
    {
        public Guid Id { get; set; }
        public Guid ResidentId { get; set; }
        public Guid UnitId { get; set; }
        public string CourierName { get; set; } = string.Empty;
        public string? TrackingNumber { get; set; }
        public string? PhotoUrl { get; set; }
        public ParcelStatus Status { get; set; }
        public string PickupCode { get; set; } = string.Empty;
        public DateTime ReceivedAt { get; set; }
        public Guid ReceivedByGuardId { get; set; }
        public DateTime? PickedUpAt { get; set; }
    }
}