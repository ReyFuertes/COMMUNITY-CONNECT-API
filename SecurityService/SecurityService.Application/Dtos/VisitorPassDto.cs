using SecurityService.Domain.Enums;

namespace SecurityService.Application.Dtos
{
    public class VisitorPassDto
    {
        public Guid Id { get; set; }
        public required string GuestName { get; set; }
        public DateTime VisitDate { get; set; }
        public string AccessCode { get; set; }
        public VisitorStatus Status { get; set; }
        public string? QrCodeBase64 { get; set; }
    }
}