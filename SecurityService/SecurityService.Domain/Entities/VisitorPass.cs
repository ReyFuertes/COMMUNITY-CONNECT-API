using SecurityService.Domain.Enums;

namespace SecurityService.Domain.Entities
{
    public class VisitorPass
    {
        public Guid Id { get; set; }
        public Guid ResidentId { get; set; }
        public Guid UnitId { get; set; }
        public required string GuestName { get; set; }
        public string? VehiclePlateNumber { get; set; }
        public DateTime VisitDate { get; set; }
        public string AccessCode { get; set; } = string.Empty;
        public VisitorStatus Status { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime ValidUntil { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<VisitLog> Logs { get; set; } = new List<VisitLog>();
    }
}