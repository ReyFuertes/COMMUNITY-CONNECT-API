namespace EngagementService.Domain.Entities
{
    public class PollOption
    {
        public Guid Id { get; set; }
        public Guid PollId { get; set; }
        public Poll? Poll { get; set; } // Navigation property
        public required string OptionText { get; set; }
        public int VoteCount { get; set; } = 0;

        public ICollection<UserVote> UserVotes { get; set; } = new List<UserVote>();
    }
}