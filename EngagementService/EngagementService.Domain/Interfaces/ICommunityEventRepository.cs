using EngagementService.Domain.Entities;

namespace EngagementService.Domain.Interfaces
{
    public interface ICommunityEventRepository : IRepository<CommunityEvent>
    {
        Task<IReadOnlyList<CommunityEvent>> GetApprovedEventsAsync();
    }
}