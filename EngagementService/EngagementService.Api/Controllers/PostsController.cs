using MediatR;
using Microsoft.AspNetCore.Mvc;
using EngagementService.Application.Features.Posts.Commands.AddComment;
using EngagementService.Application.Features.Posts.Commands.CreatePost;
using EngagementService.Application.Features.Posts.Commands.ModeratePost;
using EngagementService.Application.Features.Posts.Queries.GetFeed;

namespace EngagementService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PostsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> CreatePost([FromBody] CreatePostCommand command)
        {
            var result = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetFeed), new { id = result.Id }, result);
        }

        [HttpPost("{postId}/comments")]
        public async Task<ActionResult> AddComment(Guid postId, [FromBody] AddCommentCommand command)
        {
            if (postId != command.PostId) return BadRequest("PostId mismatch");
            var result = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetFeed), new { id = command.PostId }, result);
        }

        [HttpGet]
        public async Task<ActionResult> GetFeed([FromQuery] GetFeedQuery query)
        {
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [HttpPut("{postId}/moderate")]
        public async Task<ActionResult> ModeratePost(Guid postId, [FromBody] ModeratePostCommand command)
        {
            if (postId != command.PostId) return BadRequest("PostId mismatch");
            var result = await _mediator.Send(command);
            if (!result) return NotFound("Post not found.");
            return Ok();
        }
    }
}