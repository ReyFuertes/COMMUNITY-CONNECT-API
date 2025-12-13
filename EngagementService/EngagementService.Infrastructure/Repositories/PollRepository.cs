using Microsoft.EntityFrameworkCore;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Interfaces;
using EngagementService.Infrastructure.Persistence;

namespace EngagementService.Infrastructure.Repositories
{
    public class PollRepository : GenericRepository<Poll>, IPollRepository
    {
        public PollRepository(EngagementDbContext context) : base(context) { }

        public async Task<Poll?> GetPollWithOptionsAndVotesAsync(Guid pollId)
        {
            return await _context.Polls
                .Include(p => p.Options)
                    .ThenInclude(o => o.UserVotes)
                .FirstOrDefaultAsync(p => p.Id == pollId);
        }
    }
}