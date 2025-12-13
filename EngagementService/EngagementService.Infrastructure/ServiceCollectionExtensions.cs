using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using EngagementService.Application.Interfaces;
using EngagementService.Domain.Interfaces;
using EngagementService.Infrastructure.Persistence;
using EngagementService.Infrastructure.Repositories;
using EngagementService.Infrastructure.Services;

namespace EngagementService.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructureLayer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<EngagementDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(EngagementDbContext).Assembly.FullName)));

            services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IPostRepository, PostRepository>();
            services.AddScoped<IPollRepository, PollRepository>();
            services.AddScoped<ICommunityEventRepository, CommunityEventRepository>();

            services.AddHttpClient<IUserAndUnitIntegrationClient, UserAndUnitIntegrationClient>();
            services.AddHttpClient<INotificationClient, NotificationClient>();

            return services;
        }
    }
}