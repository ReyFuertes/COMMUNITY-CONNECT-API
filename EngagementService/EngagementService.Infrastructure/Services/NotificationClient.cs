using EngagementService.Application.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Json;

namespace EngagementService.Infrastructure.Services
{
    public class NotificationClient : INotificationClient
    {
        private readonly HttpClient _httpClient;
        private readonly string _communicationHubBaseUrl;

        public NotificationClient(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _communicationHubBaseUrl = configuration["CommunicationHub:BaseUrl"] ?? throw new ArgumentNullException("CommunicationHub:BaseUrl configuration is missing");
            _httpClient.BaseAddress = new Uri(_communicationHubBaseUrl);
        }

        public async Task SendNewPostNotificationAsync(Guid postId, Guid authorId)
        {
            // Placeholder: Call CommunicationHub API to send a notification
            await Task.CompletedTask;
        }

        public async Task SendNewEventNotificationAsync(Guid eventId, string title)
        {
            // Placeholder
            await Task.CompletedTask;
        }

        public async Task SendPollUpdateNotificationAsync(Guid pollId, string question)
        {
            // Placeholder
            await Task.CompletedTask;
        }
    }
}