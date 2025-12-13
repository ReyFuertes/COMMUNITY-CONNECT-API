using Microsoft.EntityFrameworkCore;
using SecurityService.Domain.Entities;
using SecurityService.Domain.Interfaces;
using SecurityService.Infrastructure.Persistence;

namespace SecurityService.Infrastructure.Repositories
{
    public class VisitorPassRepository : GenericRepository<VisitorPass>, IVisitorPassRepository
    {
        public VisitorPassRepository(SecurityDbContext context) : base(context) { }

        public async Task<VisitorPass?> GetByAccessCodeAsync(string accessCode)
        {
            return await _context.VisitorPasses
                .Include(v => v.Logs)
                .FirstOrDefaultAsync(v => v.AccessCode == accessCode);
        }

        public async Task<IReadOnlyList<VisitorPass>> GetByResidentIdAsync(Guid residentId)
        {
            return await _context.VisitorPasses
                .Where(v => v.ResidentId == residentId)
                .OrderByDescending(v => v.VisitDate)
                .ToListAsync();
        }
    }
}