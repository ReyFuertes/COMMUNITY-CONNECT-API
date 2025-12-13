using FinanceService.Domain.Entities;
using FinanceService.Domain.Interfaces;
using FinanceService.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace FinanceService.Infrastructure.Repositories
{
    public class PaymentRepository : GenericRepository<Payment>, IPaymentRepository
    {
        public PaymentRepository(FinanceDbContext context) : base(context)
        {
        }

        public async Task<IReadOnlyList<Payment>> GetByInvoiceIdAsync(Guid invoiceId)
        {
            return await _context.Payments
                .Where(p => p.InvoiceId == invoiceId)
                .OrderByDescending(p => p.PaymentDate)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<Payment>> GetByResidentIdAsync(Guid residentId)
        {
            return await _context.Payments
                .Include(p => p.Invoice)
                .Where(p => p.Invoice != null && p.Invoice.ResidentId == residentId)
                .OrderByDescending(p => p.PaymentDate)
                .ToListAsync();
        }

        public async Task<Payment?> GetByExternalIdAsync(string externalId)
        {
            return await _context.Payments.FirstOrDefaultAsync(p => p.ExternalTransactionId == externalId);
        }
    }
}