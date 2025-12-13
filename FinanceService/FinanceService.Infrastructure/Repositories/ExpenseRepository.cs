using FinanceService.Domain.Entities;
using FinanceService.Domain.Interfaces;
using FinanceService.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace FinanceService.Infrastructure.Repositories
{
    public class ExpenseRepository : GenericRepository<Expense>, IExpenseRepository
    {
        public ExpenseRepository(FinanceDbContext context) : base(context)
        {
        }

        public async Task<IReadOnlyList<Expense>> GetByDateRangeAsync(DateTime startDate, DateTime endDate)
        {
            return await _context.Expenses
                .Where(e => e.DateIncurred >= startDate && e.DateIncurred <= endDate)
                .OrderBy(e => e.DateIncurred)
                .ToListAsync();
        }
    }
}