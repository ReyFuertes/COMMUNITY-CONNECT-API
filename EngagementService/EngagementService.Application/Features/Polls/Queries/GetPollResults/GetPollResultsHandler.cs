using AutoMapper;
using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Polls.Queries.GetPollResults
{
    public class GetPollResultsHandler : IRequestHandler<GetPollResultsQuery, PollDto>
    {
        private readonly IPollRepository _repository;
        private readonly IMapper _mapper;

        public GetPollResultsHandler(IPollRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<PollDto> Handle(GetPollResultsQuery request, CancellationToken cancellationToken)
        {
            var poll = await _repository.GetPollWithOptionsAndVotesAsync(request.PollId);
            if (poll == null)
            {
                throw new Exception("Poll not found.");
            }
            return _mapper.Map<PollDto>(poll);
        }
    }
}