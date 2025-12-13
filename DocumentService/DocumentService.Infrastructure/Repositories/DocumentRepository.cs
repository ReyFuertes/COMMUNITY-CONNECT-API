using Microsoft.EntityFrameworkCore;
using DocumentService.Domain.Entities;
using DocumentService.Domain.Interfaces;
using DocumentService.Infrastructure.Persistence;

namespace DocumentService.Infrastructure.Repositories
{
    public class DocumentRepository : GenericRepository<Document>, IDocumentRepository
    {
        public DocumentRepository(DocumentDbContext context) : base(context) { }

        public async Task<IReadOnlyList<Document>> GetByCategoryIdAsync(Guid categoryId)
        {
            return await _context.Documents
                .Where(d => d.DocumentCategoryId == categoryId)
                .OrderByDescending(d => d.Version)
                .ThenByDescending(d => d.UploadDate)
                .ToListAsync();
        }

        public async Task<Document?> GetLatestVersionAsync(Guid categoryId, string fileName)
        {
            return await _context.Documents
                .Where(d => d.DocumentCategoryId == categoryId && d.FileName == fileName)
                .OrderByDescending(d => d.Version)
                .FirstOrDefaultAsync();
        }
    }
}