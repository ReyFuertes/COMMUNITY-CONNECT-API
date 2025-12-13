using MediatR;
using Microsoft.AspNetCore.Mvc;
using EngagementService.Application.Features.Polls.Commands.CreatePoll;
using EngagementService.Application.Features.Polls.Commands.VoteOnPoll;
using EngagementService.Application.Features.Polls.Queries.GetPollResults;

namespace EngagementService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PollsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PollsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> CreatePoll([FromBody] CreatePollCommand command)
        {
            var result = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetPollResults), new { id = result.Id }, result);
        }

        [HttpPost("{id}/vote")]
        public async Task<ActionResult> VoteOnPoll(Guid id, [FromBody] VoteOnPollCommand command)
        {
            if (id != command.PollId) return BadRequest("PollId mismatch");
            var result = await _mediator.Send(command);
            if (!result) return BadRequest("Voting failed.");
            return Ok();
        }

        [HttpGet("{id}/results")]
        public async Task<ActionResult> GetPollResults(Guid id)
        {
            var result = await _mediator.Send(new GetPollResultsQuery(id));
            return Ok(result);
        }
    }
}