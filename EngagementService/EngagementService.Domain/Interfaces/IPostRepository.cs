using EngagementService.Domain.Entities;

namespace EngagementService.Domain.Interfaces
{
    public interface IPostRepository : IRepository<Post>
    {
        Task<IReadOnlyList<Post>> GetFeedPostsAsync(int pageNumber, int pageSize);
        Task<Post?> GetPostWithCommentsAsync(Guid postId);
    }
}