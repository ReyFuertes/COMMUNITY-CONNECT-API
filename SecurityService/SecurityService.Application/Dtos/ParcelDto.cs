using SecurityService.Domain.Enums;

namespace SecurityService.Application.Dtos
{
    public class ParcelDto
    {
        public Guid Id { get; set; }
        public string CourierName { get; set; }
        public string? TrackingNumber { get; set; }
        public string? PhotoUrl { get; set; }
        public ParcelStatus Status { get; set; }
        public string PickupCode { get; set; }
        public DateTime ReceivedAt { get; set; }
    }
}