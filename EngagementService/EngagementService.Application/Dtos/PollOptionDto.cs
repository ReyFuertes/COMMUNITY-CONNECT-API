namespace EngagementService.Application.Dtos
{
    public class PollOptionDto
    {
        public Guid Id { get; set; }
        public Guid PollId { get; set; }
        public required string OptionText { get; set; }
        public int VoteCount { get; set; }
    }
}