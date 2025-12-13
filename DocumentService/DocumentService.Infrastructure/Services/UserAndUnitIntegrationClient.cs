using DocumentService.Application.Interfaces;
using DocumentService.Domain.Enums;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Json;

namespace DocumentService.Infrastructure.Services
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

        public async Task<UserRole?> GetUserRoleAsync(Guid userId)
        {
            // Assuming UserAndUnitManagement has an endpoint like /api/users/{userId}/role
            var response = await _httpClient.GetAsync($"/api/users/{userId}/role");
            if (response.IsSuccessStatusCode)
            {
                var roleString = await response.Content.ReadAsStringAsync(); // Expecting "Owner", "Tenant", etc.
                if (Enum.TryParse(typeof(UserRole), roleString, true, out var role))
                {
                    return (UserRole)role;
                }
            }
            return null;
        }
    }
}