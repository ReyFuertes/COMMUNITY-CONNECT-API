namespace EngagementService.Domain.Entities
{
    public class CommunityEvent
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public DateTime EventDate { get; set; }
        public DateTime EventTime { get; set; } // Can combine with EventDate, but separate for simplicity
        public required string Location { get; set; }
        public Guid OrganizerId { get; set; } // User ID of event creator
        public bool IsApproved { get; set; } = false; // For admin approval
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}