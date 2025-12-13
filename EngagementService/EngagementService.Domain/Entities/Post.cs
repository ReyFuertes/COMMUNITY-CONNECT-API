using EngagementService.Domain.Enums;

namespace EngagementService.Domain.Entities
{
    public class Post
    {
        public Guid Id { get; set; }
        public Guid AuthorId { get; set; } // From UserAndUnitManagement
        public required string Content { get; set; }
        public PostType Type { get; set; }
        public DateTime PostedAt { get; set; } = DateTime.UtcNow;
        public bool IsModerated { get; set; } = false;
        public Guid? ModeratedBy { get; set; }
        public DateTime? ModeratedAt { get; set; }

        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}