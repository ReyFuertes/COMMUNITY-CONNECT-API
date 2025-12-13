using FinanceService.Domain.Entities;

namespace FinanceService.Domain.Interfaces
{
    public interface IExpenseRepository : IRepository<Expense>
    {
        Task<IReadOnlyList<Expense>> GetByDateRangeAsync(DateTime startDate, DateTime endDate);
    }
}