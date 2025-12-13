using AutoMapper;
using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Application.Interfaces;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Enums;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Polls.Commands.CreatePoll
{
    public class CreatePollHandler : IRequestHandler<CreatePollCommand, PollDto>
    {
        private readonly IPollRepository _repository;
        private readonly IUserAndUnitIntegrationClient _userAndUnitClient;
        private readonly IMapper _mapper;

        public CreatePollHandler(IPollRepository repository, IUserAndUnitIntegrationClient userAndUnitClient, IMapper mapper)
        {
            _repository = repository;
            _userAndUnitClient = userAndUnitClient;
            _mapper = mapper;
        }

        public async Task<PollDto> Handle(CreatePollCommand request, CancellationToken cancellationToken)
        {
            if (!await _userAndUnitClient.IsAdminOrPropertyManagerAsync(request.AdminId))
            {
                throw new UnauthorizedAccessException("Only admins or property managers can create polls.");
            }

            var poll = _mapper.Map<Poll>(request);
            poll.Id = Guid.NewGuid();
            poll.CreatedAt = DateTime.UtcNow;
            poll.Status = PollStatus.Active; // Active on creation

            foreach (var optionText in request.Options)
            {
                poll.Options.Add(new PollOption { Id = Guid.NewGuid(), OptionText = optionText, PollId = poll.Id });
            }

            await _repository.AddAsync(poll);
            return _mapper.Map<PollDto>(poll);
        }
    }
}
