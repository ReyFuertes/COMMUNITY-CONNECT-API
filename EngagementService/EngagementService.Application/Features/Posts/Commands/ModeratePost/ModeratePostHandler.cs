using MediatR;
using EngagementService.Application.Interfaces;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Posts.Commands.ModeratePost
{
    public class ModeratePostHandler : IRequestHandler<ModeratePostCommand, bool>
    {
        private readonly IPostRepository _repository;
        private readonly IUserAndUnitIntegrationClient _userAndUnitClient;

        public ModeratePostHandler(IPostRepository repository, IUserAndUnitIntegrationClient userAndUnitClient)
        {
            _repository = repository;
            _userAndUnitClient = userAndUnitClient;
        }

        public async Task<bool> Handle(ModeratePostCommand request, CancellationToken cancellationToken)
        {
            // Check if user is authorized to moderate
            if (!await _userAndUnitClient.IsAdminOrPropertyManagerAsync(request.ModeratorId))
            {
                throw new UnauthorizedAccessException("Only admins or property managers can moderate posts.");
            }

            var post = await _repository.GetByIdAsync(request.PostId);
            if (post == null) return false;

            post.IsModerated = request.IsModerated;
            post.ModeratedBy = request.ModeratorId;
            post.ModeratedAt = DateTime.UtcNow;

            await _repository.UpdateAsync(post);
            return true;
        }
    }
}