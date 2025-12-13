using Microsoft.EntityFrameworkCore;
using EngagementService.Domain.Interfaces;
using EngagementService.Infrastructure.Persistence;

namespace EngagementService.Infrastructure.Repositories
{
    public class GenericRepository<T> : IRepository<T> where T : class
    {
        protected readonly EngagementDbContext _context;

        public GenericRepository(EngagementDbContext context)
        {
            _context = context;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task DeleteAsync(T entity)
        {
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public virtual async Task<T?> GetByIdAsync(Guid id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task UpdateAsync(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}