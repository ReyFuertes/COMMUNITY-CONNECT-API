using Microsoft.EntityFrameworkCore;
using SecurityService.Domain.Entities;
using SecurityService.Domain.Enums;
using SecurityService.Domain.Interfaces;
using SecurityService.Infrastructure.Persistence;

namespace SecurityService.Infrastructure.Repositories
{
    public class ParcelRepository : GenericRepository<Parcel>, IParcelRepository
    {
        public ParcelRepository(SecurityDbContext context) : base(context) { }

        public async Task<IReadOnlyList<Parcel>> GetPendingByResidentIdAsync(Guid residentId)
        {
            return await _context.Parcels
                .Where(p => p.ResidentId == residentId && p.Status == ParcelStatus.Received)
                .OrderByDescending(p => p.ReceivedAt)
                .ToListAsync();
        }
    }
}