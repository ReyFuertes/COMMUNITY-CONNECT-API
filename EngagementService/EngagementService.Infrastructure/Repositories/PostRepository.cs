using Microsoft.EntityFrameworkCore;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Interfaces;
using EngagementService.Infrastructure.Persistence;

namespace EngagementService.Infrastructure.Repositories
{
    public class PostRepository : GenericRepository<Post>, IPostRepository
    {
        public PostRepository(EngagementDbContext context) : base(context) { }

        public async Task<IReadOnlyList<Post>> GetFeedPostsAsync(int pageNumber, int pageSize)
        {
            return await _context.Posts
                .Include(p => p.Comments)
                .OrderByDescending(p => p.PostedAt)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<Post?> GetPostWithCommentsAsync(Guid postId)
        {
            return await _context.Posts
                .Include(p => p.Comments)
                .FirstOrDefaultAsync(p => p.Id == postId);
        }
    }
}