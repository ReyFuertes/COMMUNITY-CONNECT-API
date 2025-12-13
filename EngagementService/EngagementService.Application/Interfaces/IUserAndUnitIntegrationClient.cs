namespace EngagementService.Application.Interfaces
{
    public interface IUserAndUnitIntegrationClient
    {
        Task<bool> UserExistsAsync(Guid userId);
        Task<bool> IsAdminOrPropertyManagerAsync(Guid userId); // For moderation
    }
}