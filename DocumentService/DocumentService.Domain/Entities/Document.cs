namespace DocumentService.Domain.Entities
{
    public class Document
    {
        public Guid Id { get; set; }
        public Guid DocumentCategoryId { get; set; }
        public DocumentCategory? DocumentCategory { get; set; } // Navigation property
        public required string FileName { get; set; }
        public required string FilePath { get; set; } // URL in Azure Blob Storage
        public int Version { get; set; } = 1;
        public DateTime UploadDate { get; set; } = DateTime.UtcNow;
        public Guid UploadedByUserId { get; set; }
        public string ContentType { get; set; } = string.Empty;
        public long FileSize { get; set; }
    }
}