using MediatR;
using EngagementService.Application.Interfaces;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Events.Commands.ApproveCommunityEvent
{
    public class ApproveCommunityEventHandler : IRequestHandler<ApproveCommunityEventCommand, bool>
    {
        private readonly ICommunityEventRepository _repository;
        private readonly IUserAndUnitIntegrationClient _userAndUnitClient;

        public ApproveCommunityEventHandler(ICommunityEventRepository repository, IUserAndUnitIntegrationClient userAndUnitClient)
        {
            _repository = repository;
            _userAndUnitClient = userAndUnitClient;
        }

        public async Task<bool> Handle(ApproveCommunityEventCommand request, CancellationToken cancellationToken)
        {
            // Check if user is authorized to approve events
            if (!await _userAndUnitClient.IsAdminOrPropertyManagerAsync(request.AdminId))
            {
                throw new UnauthorizedAccessException("Only admins or property managers can approve events.");
            }

            var communityEvent = await _repository.GetByIdAsync(request.EventId);
            if (communityEvent == null) return false;

            communityEvent.IsApproved = request.Approve;

            await _repository.UpdateAsync(communityEvent);
            return true;
        }
    }
}