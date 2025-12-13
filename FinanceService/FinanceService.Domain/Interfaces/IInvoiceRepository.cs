using FinanceService.Domain.Entities;

namespace FinanceService.Domain.Interfaces
{
    public interface IInvoiceRepository : IRepository<Invoice>
    {
        Task<IReadOnlyList<Invoice>> GetByResidentIdAsync(Guid residentId);
        Task<IReadOnlyList<Invoice>> GetOverdueInvoicesAsync();
    }
}