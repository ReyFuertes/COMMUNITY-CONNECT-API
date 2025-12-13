using EngagementService.Domain.Enums;

namespace EngagementService.Application.Dtos
{
    public class PostDto
    {
        public Guid Id { get; set; }
        public Guid AuthorId { get; set; }
        public required string Content { get; set; }
        public PostType Type { get; set; }
        public DateTime PostedAt { get; set; }
        public bool IsModerated { get; set; }
        public List<CommentDto> Comments { get; set; } = new();
    }
}