using MediatR;
using Microsoft.AspNetCore.Mvc;
using DocumentService.Application.Features.Categories.Commands.CreateDocumentCategory;
using DocumentService.Application.Features.Categories.Commands.SetCategoryPermissions;
using DocumentService.Application.Features.Categories.Queries.GetDocumentCategories;

namespace DocumentService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocumentCategoriesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public DocumentCategoriesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> CreateCategory([FromBody] CreateDocumentCategoryCommand command)
        {
            var result = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetCategories), new { id = result.Id }, result);
        }

        [HttpPut("{id}/permissions")]
        public async Task<ActionResult> SetCategoryPermissions(Guid id, [FromBody] List<DocumentService.Application.Dtos.DocumentPermissionDto> permissions)
        {
            var result = await _mediator.Send(new SetCategoryPermissionsCommand(id, permissions));
            if (!result) return NotFound("Category not found.");
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult> GetCategories()
        {
            var result = await _mediator.Send(new GetDocumentCategoriesQuery());
            return Ok(result);
        }
    }
}