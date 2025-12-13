namespace EngagementService.Application.Dtos
{
    public class CommentDto
    {
        public Guid Id { get; set; }
        public Guid PostId { get; set; }
        public Guid AuthorId { get; set; }
        public required string Content { get; set; }
        public DateTime PostedAt { get; set; }
    }
}