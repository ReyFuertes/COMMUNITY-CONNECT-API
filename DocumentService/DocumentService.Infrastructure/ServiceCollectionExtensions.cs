using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using DocumentService.Application.Interfaces;
using DocumentService.Domain.Interfaces;
using DocumentService.Infrastructure.Persistence;
using DocumentService.Infrastructure.Repositories;
using DocumentService.Infrastructure.Services;

namespace DocumentService.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructureLayer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DocumentDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(DocumentDbContext).Assembly.FullName)));

            services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IDocumentRepository, DocumentRepository>();
            services.AddScoped<IDocumentCategoryRepository, DocumentCategoryRepository>();
            services.AddScoped<IDocumentPermissionRepository, DocumentPermissionRepository>();

            services.AddScoped<IFileStorageService, AzureBlobStorageService>();
            services.AddHttpClient<IUserAndUnitIntegrationClient, UserAndUnitIntegrationClient>();

            return services;
        }
    }
}