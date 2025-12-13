using EngagementService.Domain.Enums;

namespace EngagementService.Domain.Entities
{
    public class Poll
    {
        public Guid Id { get; set; }
        public Guid AdminId { get; set; } // User ID of admin who created it
        public required string Question { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime ExpiresAt { get; set; }
        public PollStatus Status { get; set; } = PollStatus.Draft;

        public ICollection<PollOption> Options { get; set; } = new List<PollOption>();
    }
}