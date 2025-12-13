using DocumentService.Domain.Entities;

namespace DocumentService.Domain.Interfaces
{
    public interface IDocumentRepository : IRepository<Document>
    {
        Task<IReadOnlyList<Document>> GetByCategoryIdAsync(Guid categoryId);
        Task<Document?> GetLatestVersionAsync(Guid categoryId, string fileName);
    }
}