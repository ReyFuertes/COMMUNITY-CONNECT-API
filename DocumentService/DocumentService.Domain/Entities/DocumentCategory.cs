namespace DocumentService.Domain.Entities
{
    public class DocumentCategory
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public Guid? ParentCategoryId { get; set; }
        public bool IsActive { get; set; } = true;

        public DocumentCategory? ParentCategory { get; set; } // Navigation property
        public ICollection<DocumentCategory> ChildCategories { get; set; } = new List<DocumentCategory>();
        public ICollection<Document> Documents { get; set; } = new List<Document>();
        public ICollection<DocumentPermission> Permissions { get; set; } = new List<DocumentPermission>();
    }
}