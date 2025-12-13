using AutoMapper;
using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Events.Commands.CreateCommunityEvent
{
    public class CreateCommunityEventHandler : IRequestHandler<CreateCommunityEventCommand, CommunityEventDto>
    {
        private readonly ICommunityEventRepository _repository;
        private readonly IMapper _mapper;

        public CreateCommunityEventHandler(ICommunityEventRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CommunityEventDto> Handle(CreateCommunityEventCommand request, CancellationToken cancellationToken)
        {
            var communityEvent = _mapper.Map<CommunityEvent>(request);
            communityEvent.Id = Guid.NewGuid();
            communityEvent.CreatedAt = DateTime.UtcNow;
            communityEvent.IsApproved = false; // Requires admin approval initially

            await _repository.AddAsync(communityEvent);
            return _mapper.Map<CommunityEventDto>(communityEvent);
        }
    }
}