using FinanceService.Domain.Entities;
using FinanceService.Domain.Enums;
using FinanceService.Domain.Interfaces;
using FinanceService.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace FinanceService.Infrastructure.Repositories
{
    public class InvoiceRepository : GenericRepository<Invoice>, IInvoiceRepository
    {
        public InvoiceRepository(FinanceDbContext context) : base(context)
        {
        }

        public async Task<IReadOnlyList<Invoice>> GetByResidentIdAsync(Guid residentId)
        {
            return await _context.Invoices
                .Include(i => i.Items) // Eager load items
                .Where(i => i.ResidentId == residentId)
                .OrderByDescending(i => i.IssueDate)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<Invoice>> GetOverdueInvoicesAsync()
        {
            return await _context.Invoices
                .Where(i => i.Status != InvoiceStatus.Paid && i.DueDate < DateTime.UtcNow)
                .ToListAsync();
        }
    }
}