using EngagementService.Domain.Entities;

namespace EngagementService.Domain.Interfaces
{
    public interface IPollRepository : IRepository<Poll>
    {
        Task<Poll?> GetPollWithOptionsAndVotesAsync(Guid pollId);
    }
}