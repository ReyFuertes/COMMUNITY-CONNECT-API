using MediatR;
using Microsoft.AspNetCore.Mvc;
using SecurityService.Application.Features.Visitors.Commands.CheckInVisitor;
using SecurityService.Application.Features.Visitors.Commands.CreateVisitorPass;

namespace SecurityService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisitorsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public VisitorsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> CreateVisitorPass([FromBody] CreateVisitorPassCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [HttpPost("checkin")]
        public async Task<ActionResult> CheckInVisitor([FromBody] CheckInVisitorCommand command)
        {
            var result = await _mediator.Send(command);
            if (!result) return BadRequest("Invalid or Expired Pass");
            return Ok("Check-in Successful");
        }
    }
}