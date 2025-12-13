using FinanceService.Application.Interfaces;
using FinanceService.Domain.Interfaces;
using FinanceService.Infrastructure.Persistence;
using FinanceService.Infrastructure.Repositories;
using FinanceService.Infrastructure.Services;
using FinanceService.Infrastructure.Strategies;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FinanceService.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructureLayer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<FinanceDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(FinanceDbContext).Assembly.FullName)));

            services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IInvoiceRepository, InvoiceRepository>();
            services.AddScoped<IPaymentRepository, PaymentRepository>();
            services.AddScoped<IExpenseRepository, ExpenseRepository>();

            services.AddScoped<IFileStorageService, AzureBlobStorageService>();

            // Strategies
            services.AddTransient<StripePaymentStrategy>();
            services.AddTransient<BankDepositStrategy>();
            services.AddHttpClient<XenditPaymentStrategy>(); // Registers typed client
            services.AddTransient<XenditPaymentStrategy>();

            services.AddScoped<IPaymentStrategyFactory, PaymentStrategyFactory>();

            return services;
        }
    }
}