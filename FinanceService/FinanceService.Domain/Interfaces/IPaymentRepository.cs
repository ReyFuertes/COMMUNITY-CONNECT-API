using FinanceService.Domain.Entities;

namespace FinanceService.Domain.Interfaces
{
    public interface IPaymentRepository : IRepository<Payment>
    {
        Task<IReadOnlyList<Payment>> GetByInvoiceIdAsync(Guid invoiceId);
        Task<IReadOnlyList<Payment>> GetByResidentIdAsync(Guid residentId); // Will require joining with Invoice
        Task<Payment?> GetByExternalIdAsync(string externalId);
    }
}