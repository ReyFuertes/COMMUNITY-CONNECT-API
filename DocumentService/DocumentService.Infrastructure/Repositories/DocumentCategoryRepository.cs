using Microsoft.EntityFrameworkCore;
using DocumentService.Domain.Entities;
using DocumentService.Domain.Interfaces;
using DocumentService.Infrastructure.Persistence;

namespace DocumentService.Infrastructure.Repositories
{
    public class DocumentCategoryRepository : GenericRepository<DocumentCategory>, IDocumentCategoryRepository
    {
        public DocumentCategoryRepository(DocumentDbContext context) : base(context) { }

        public async Task<DocumentCategory?> GetByNameAsync(string name)
        {
            return await _context.DocumentCategories.FirstOrDefaultAsync(c => c.Name == name);
        }

        public async Task<DocumentCategory?> GetCategoryWithPermissionsAsync(Guid categoryId)
        {
            return await _context.DocumentCategories
                .Include(c => c.Permissions)
                .FirstOrDefaultAsync(c => c.Id == categoryId);
        }

        public override async Task<DocumentCategory?> GetByIdAsync(Guid id)
        {
            return await _context.DocumentCategories
                .Include(c => c.Permissions)
                .FirstOrDefaultAsync(c => c.Id == id);
        }
    }
}