namespace SecurityService.Domain.Entities
{
    public class VisitLog
    {
        public Guid Id { get; set; }
        public Guid VisitorPassId { get; set; }
        public DateTime CheckInTime { get; set; }
        public DateTime? CheckOutTime { get; set; }
        public Guid GuardId { get; set; }
        public string GateName { get; set; } = "Main Gate";

        public VisitorPass? VisitorPass { get; set; }
    }
}