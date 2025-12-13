using Microsoft.EntityFrameworkCore;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Interfaces;
using EngagementService.Infrastructure.Persistence;

namespace EngagementService.Infrastructure.Repositories
{
    public class CommunityEventRepository : GenericRepository<CommunityEvent>, ICommunityEventRepository
    {
        public CommunityEventRepository(EngagementDbContext context) : base(context) { }

        public async Task<IReadOnlyList<CommunityEvent>> GetApprovedEventsAsync()
        {
            return await _context.CommunityEvents
                .Where(e => e.IsApproved && e.EventDate >= DateTime.UtcNow.Date)
                .OrderBy(e => e.EventDate)
                .ToListAsync();
        }
    }
}