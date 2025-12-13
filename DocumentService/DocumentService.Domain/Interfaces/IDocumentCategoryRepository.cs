using DocumentService.Domain.Entities;

namespace DocumentService.Domain.Interfaces
{
    public interface IDocumentCategoryRepository : IRepository<DocumentCategory>
    {
        Task<DocumentCategory?> GetByNameAsync(string name);
        Task<DocumentCategory?> GetCategoryWithPermissionsAsync(Guid categoryId);
    }
}