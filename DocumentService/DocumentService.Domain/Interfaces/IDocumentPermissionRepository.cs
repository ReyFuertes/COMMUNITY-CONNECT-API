using DocumentService.Domain.Entities;
using DocumentService.Domain.Enums;

namespace DocumentService.Domain.Interfaces
{
    public interface IDocumentPermissionRepository : IRepository<DocumentPermission>
    {
        Task<IReadOnlyList<DocumentPermission>> GetPermissionsForCategoryAsync(Guid categoryId);
        Task<DocumentPermission?> GetPermissionForRoleAsync(Guid categoryId, UserRole role);
    }
}