using DocumentService.Domain.Enums;

namespace DocumentService.Application.Dtos
{
    public class DocumentPermissionDto
    {
        public Guid Id { get; set; }
        public Guid DocumentCategoryId { get; set; }
        public UserRole UserRole { get; set; }
        public bool CanView { get; set; }
        public bool CanUpload { get; set; }
    }
}