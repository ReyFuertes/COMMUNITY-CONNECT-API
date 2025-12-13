using Microsoft.EntityFrameworkCore;
using DocumentService.Domain.Entities;
using DocumentService.Domain.Enums;
using DocumentService.Domain.Interfaces;
using DocumentService.Infrastructure.Persistence;

namespace DocumentService.Infrastructure.Repositories
{
    public class DocumentPermissionRepository : GenericRepository<DocumentPermission>, IDocumentPermissionRepository
    {
        public DocumentPermissionRepository(DocumentDbContext context) : base(context) { }

        public async Task<IReadOnlyList<DocumentPermission>> GetPermissionsForCategoryAsync(Guid categoryId)
        {
            return await _context.DocumentPermissions
                .Where(p => p.DocumentCategoryId == categoryId)
                .ToListAsync();
        }

        public async Task<DocumentPermission?> GetPermissionForRoleAsync(Guid categoryId, UserRole role)
        {
            return await _context.DocumentPermissions
                .FirstOrDefaultAsync(p => p.DocumentCategoryId == categoryId && p.UserRole == role);
        }
    }
}