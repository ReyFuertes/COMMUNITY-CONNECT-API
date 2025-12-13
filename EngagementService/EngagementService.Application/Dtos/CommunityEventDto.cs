namespace EngagementService.Application.Dtos
{
    public class CommunityEventDto
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public DateTime EventDate { get; set; }
        public DateTime EventTime { get; set; }
        public required string Location { get; set; }
        public Guid OrganizerId { get; set; }
        public bool IsApproved { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}