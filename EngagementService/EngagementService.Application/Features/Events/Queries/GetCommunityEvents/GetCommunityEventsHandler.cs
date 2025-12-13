using AutoMapper;
using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Events.Queries.GetCommunityEvents
{
    public class GetCommunityEventsHandler : IRequestHandler<GetCommunityEventsQuery, List<CommunityEventDto>>
    {
        private readonly ICommunityEventRepository _repository;
        private readonly IMapper _mapper;

        public GetCommunityEventsHandler(ICommunityEventRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<CommunityEventDto>> Handle(GetCommunityEventsQuery request, CancellationToken cancellationToken)
        {
            var events = await _repository.GetApprovedEventsAsync(); // Returns only approved events
            return _mapper.Map<List<CommunityEventDto>>(events);
        }
    }
}