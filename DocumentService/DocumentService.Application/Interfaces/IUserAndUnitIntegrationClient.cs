using DocumentService.Domain.Enums;

namespace DocumentService.Application.Interfaces
{
    public interface IUserAndUnitIntegrationClient
    {
        Task<UserRole?> GetUserRoleAsync(Guid userId);
    }
}