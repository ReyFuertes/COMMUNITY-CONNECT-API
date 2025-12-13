using MediatR;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Enums;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Polls.Commands.VoteOnPoll
{
    public class VoteOnPollHandler : IRequestHandler<VoteOnPollCommand, bool>
    {
        private readonly IPollRepository _pollRepository;
        private readonly IRepository<UserVote> _userVoteRepository;

        public VoteOnPollHandler(IPollRepository pollRepository, IRepository<UserVote> userVoteRepository)
        {
            _pollRepository = pollRepository;
            _userVoteRepository = userVoteRepository;
        }

        public async Task<bool> Handle(VoteOnPollCommand request, CancellationToken cancellationToken)
        {
            var poll = await _pollRepository.GetPollWithOptionsAndVotesAsync(request.PollId);
            if (poll == null || poll.Status != PollStatus.Active)
            {
                throw new Exception("Poll not found or not active.");
            }

            // Check if user has already voted in this poll
            bool hasVoted = poll.Options.Any(o => o.UserVotes.Any(uv => uv.UserId == request.UserId));
            if (hasVoted)
            {
                throw new Exception("User has already voted in this poll.");
            }

            var option = poll.Options.FirstOrDefault(o => o.Id == request.PollOptionId);
            if (option == null)
            {
                throw new Exception("Poll option not found.");
            }

            option.VoteCount++;
            
            var userVote = new UserVote
            {
                Id = Guid.NewGuid(),
                PollOptionId = request.PollOptionId,
                UserId = request.UserId,
                VotedAt = DateTime.UtcNow
            };

            await _userVoteRepository.AddAsync(userVote);
            await _pollRepository.UpdateAsync(poll); // Update poll to save vote count increment

            return true;
        }
    }
}