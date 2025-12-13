using EngagementService.Domain.Enums;

namespace EngagementService.Application.Dtos
{
    public class PollDto
    {
        public Guid Id { get; set; }
        public Guid AdminId { get; set; }
        public required string Question { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ExpiresAt { get; set; }
        public PollStatus Status { get; set; }
        public List<PollOptionDto> Options { get; set; } = new();
    }
}