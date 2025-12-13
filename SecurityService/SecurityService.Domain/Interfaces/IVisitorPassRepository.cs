using SecurityService.Domain.Entities;

namespace SecurityService.Domain.Interfaces
{
    public interface IVisitorPassRepository : IRepository<VisitorPass>
    {
        Task<VisitorPass?> GetByAccessCodeAsync(string accessCode);
        Task<IReadOnlyList<VisitorPass>> GetByResidentIdAsync(Guid residentId);
    }
}