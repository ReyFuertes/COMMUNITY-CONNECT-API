using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SecurityService.Application.Interfaces;
using SecurityService.Domain.Interfaces;
using SecurityService.Infrastructure.Persistence;
using SecurityService.Infrastructure.Repositories;
using SecurityService.Infrastructure.Services;

namespace SecurityService.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructureLayer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<SecurityDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(SecurityDbContext).Assembly.FullName)));

            services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IVisitorPassRepository, VisitorPassRepository>();
            services.AddScoped<IParcelRepository, ParcelRepository>();

            services.AddSingleton<IQrCodeGenerator, QrCodeService>();
            services.AddHttpClient<INotificationClient, NotificationClient>();
            services.AddScoped<IFileStorageService, AzureBlobStorageService>();

            return services;
        }
    }
}