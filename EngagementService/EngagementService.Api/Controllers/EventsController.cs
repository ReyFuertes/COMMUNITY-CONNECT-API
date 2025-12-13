using MediatR;
using Microsoft.AspNetCore.Mvc;
using EngagementService.Application.Features.Events.Commands.ApproveCommunityEvent;
using EngagementService.Application.Features.Events.Commands.CreateCommunityEvent;
using EngagementService.Application.Features.Events.Queries.GetCommunityEvents;

namespace EngagementService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public EventsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> CreateEvent([FromBody] CreateCommunityEventCommand command)
        {
            var result = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetEvents), new { id = result.Id }, result);
        }

        [HttpPut("{id}/approve")]
        public async Task<ActionResult> ApproveEvent(Guid id, [FromQuery] Guid adminId, [FromQuery] bool approve)
        {
            var result = await _mediator.Send(new ApproveCommunityEventCommand(id, adminId, approve));
            if (!result) return NotFound("Event not found.");
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult> GetEvents([FromQuery] GetCommunityEventsQuery query)
        {
            var result = await _mediator.Send(query);
            return Ok(result);
        }
    }
}