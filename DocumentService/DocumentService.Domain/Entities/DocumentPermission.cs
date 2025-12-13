using DocumentService.Domain.Enums;

namespace DocumentService.Domain.Entities
{
    public class DocumentPermission
    {
        public Guid Id { get; set; }
        public Guid DocumentCategoryId { get; set; }
        public DocumentCategory? DocumentCategory { get; set; } // Navigation property
        public UserRole UserRole { get; set; } // e.g., Owner, Tenant, PropertyManager
        public bool CanView { get; set; }
        public bool CanUpload { get; set; }
    }
}
