namespace EngagementService.Domain.Entities
{
    public class UserVote
    {
        public Guid Id { get; set; }
        public Guid PollOptionId { get; set; }
        public PollOption? PollOption { get; set; } // Navigation property
        public Guid UserId { get; set; }
        public DateTime VotedAt { get; set; } = DateTime.UtcNow;
    }
}