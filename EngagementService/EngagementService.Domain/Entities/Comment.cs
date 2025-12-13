namespace EngagementService.Domain.Entities
{
    public class Comment
    {
        public Guid Id { get; set; }
        public Guid PostId { get; set; }
        public Post? Post { get; set; } // Navigation property
        public Guid AuthorId { get; set; }
        public required string Content { get; set; }
        public DateTime PostedAt { get; set; } = DateTime.UtcNow;
    }
}