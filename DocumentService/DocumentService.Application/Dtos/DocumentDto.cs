namespace DocumentService.Application.Dtos
{
    public class DocumentDto
    {
        public Guid Id { get; set; }
        public Guid DocumentCategoryId { get; set; }
        public required string FileName { get; set; }
        public required string FilePath { get; set; }
        public int Version { get; set; }
        public DateTime UploadDate { get; set; }
        public Guid UploadedByUserId { get; set; }
        public required string ContentType { get; set; }
        public long FileSize { get; set; }
    }
}