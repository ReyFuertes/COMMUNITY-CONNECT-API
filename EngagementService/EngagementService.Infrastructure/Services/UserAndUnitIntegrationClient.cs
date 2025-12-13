using EngagementService.Application.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Json;

namespace EngagementService.Infrastructure.Services
{
    public class UserAndUnitIntegrationClient : IUserAndUnitIntegrationClient
    {
        private readonly HttpClient _httpClient;
        private readonly string _userAndUnitServiceBaseUrl;

        public UserAndUnitIntegrationClient(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _userAndUnitServiceBaseUrl = configuration["UserAndUnitManagement:BaseUrl"] ?? throw new ArgumentNullException("UserAndUnitManagement:BaseUrl configuration is missing");
            _httpClient.BaseAddress = new Uri(_userAndUnitServiceBaseUrl);
        }

        public async Task<bool> UserExistsAsync(Guid userId)
        {
            // Assuming UserAndUnitManagement has an endpoint like /api/users/{userId}/exists
            var response = await _httpClient.GetAsync($"/api/users/{userId}/exists");
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> IsAdminOrPropertyManagerAsync(Guid userId)
        {
            // Assuming UserAndUnitManagement has an endpoint like /api/users/{userId}/role
            // And that role is "SuperAdmin" or "PropertyManager"
            var response = await _httpClient.GetAsync($"/api/users/{userId}/role");
            if (response.IsSuccessStatusCode)
            {
                var role = await response.Content.ReadAsStringAsync(); // e.g., "SuperAdmin"
                return role == "SuperAdmin" || role == "PropertyManager";
            }
            return false;
        }
    }
}