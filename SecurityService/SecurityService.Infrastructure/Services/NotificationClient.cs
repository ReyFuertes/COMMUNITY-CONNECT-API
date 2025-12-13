using SecurityService.Application.Interfaces;
using System.Net.Http.Json;

namespace SecurityService.Infrastructure.Services
{
    public class NotificationClient : INotificationClient
    {
        private readonly HttpClient _httpClient;

        public NotificationClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task SendGuestArrivalNotificationAsync(Guid residentId, string guestName)
        {
            // Placeholder: Call CommunicationHub API
            await Task.CompletedTask; 
        }

        public async Task SendParcelArrivedNotificationAsync(Guid residentId, string pickupCode)
        {
             // Placeholder
             await Task.CompletedTask;
        }
    }
}