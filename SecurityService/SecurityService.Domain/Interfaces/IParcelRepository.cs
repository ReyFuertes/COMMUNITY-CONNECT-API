using SecurityService.Domain.Entities;

namespace SecurityService.Domain.Interfaces
{
    public interface IParcelRepository : IRepository<Parcel>
    {
        Task<IReadOnlyList<Parcel>> GetPendingByResidentIdAsync(Guid residentId);
    }
}