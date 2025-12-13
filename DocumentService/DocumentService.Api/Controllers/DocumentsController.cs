using MediatR;
using Microsoft.AspNetCore.Mvc;
using DocumentService.Application.Features.Documents.Commands.UploadDocument;
using DocumentService.Application.Features.Documents.Queries.GetDocumentsByCategory;
using DocumentService.Application.Interfaces;
using DocumentService.Application.Features.Permissions.Queries.CheckUserPermission;
using DocumentService.Domain.Enums;
using DocumentService.Application.Features.Documents.Queries.GetDocument;

namespace DocumentService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocumentsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IFileStorageService _fileStorageService;

        public DocumentsController(IMediator mediator, IFileStorageService fileStorageService)
        {
            _mediator = mediator;
            _fileStorageService = fileStorageService;
        }

        [HttpPost("upload")]
        public async Task<ActionResult> UploadDocument(
            [FromForm] Guid documentCategoryId, 
            [FromForm] IFormFile file, 
            [FromForm] Guid uploadedByUserId)
        {
            if (file == null || file.Length == 0) return BadRequest("No file uploaded.");

            // Check upload permission
            var canUpload = await _mediator.Send(new CheckUserPermissionQuery(documentCategoryId, uploadedByUserId, PermissionType.Upload));
            if (!canUpload)
            {
                return Forbid("User does not have permission to upload documents to this category.");
            }

            string fileUrl;
            using (var stream = file.OpenReadStream())
            {
                // To support versioning, append version number to filename or metadata
                // For simplicity, we'll store with unique name for now. Versioning handled in handler.
                var uniqueFileName = $"{Guid.NewGuid()}-{file.FileName}";
                fileUrl = await _fileStorageService.UploadAsync(stream, uniqueFileName, file.ContentType);
            }

            var command = new UploadDocumentCommand(
                documentCategoryId,
                file.FileName, // Original filename
                fileUrl,
                file.ContentType,
                file.Length,
                uploadedByUserId
            );

            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [HttpGet("category/{categoryId}")]
        public async Task<ActionResult> GetDocumentsByCategoryId(Guid categoryId, [FromQuery] Guid userId)
        {
            var result = await _mediator.Send(new GetDocumentsByCategoryQuery(categoryId, userId));
            return Ok(result);
        }

        [HttpGet("{documentId}")]
        public async Task<ActionResult> DownloadDocument(Guid documentId, [FromQuery] Guid userId)
        {
            // First, get document details and check permissions
            var documentDto = await _mediator.Send(new GetDocumentQuery(documentId, userId));
            
            // Redirect to the Azure Blob Storage URL for the file
            return Redirect(documentDto.FilePath);
        }
    }
}