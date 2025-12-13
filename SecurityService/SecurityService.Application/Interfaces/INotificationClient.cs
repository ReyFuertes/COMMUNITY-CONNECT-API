namespace SecurityService.Application.Interfaces
{
    public interface INotificationClient
    {
        Task SendGuestArrivalNotificationAsync(Guid residentId, string guestName);
        Task SendParcelArrivedNotificationAsync(Guid residentId, string pickupCode);
    }
}