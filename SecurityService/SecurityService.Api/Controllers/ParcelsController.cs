using MediatR;
using Microsoft.AspNetCore.Mvc;
using SecurityService.Application.Features.Parcels.Commands.LogParcel;
using SecurityService.Application.Interfaces;

namespace SecurityService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParcelsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IFileStorageService _fileStorageService;

        public ParcelsController(IMediator mediator, IFileStorageService fileStorageService)
        {
            _mediator = mediator;
            _fileStorageService = fileStorageService;
        }

        [HttpPost]
        public async Task<ActionResult> LogParcel([FromForm] LogParcelRequest request)
        {
            // Upload Photo
            string photoUrl = "";
            if (request.Photo != null)
            {
                using var stream = request.Photo.OpenReadStream();
                var fileName = $"parcel_{Guid.NewGuid()}_{request.Photo.FileName}";
                photoUrl = await _fileStorageService.UploadAsync(stream, fileName, request.Photo.ContentType);
            }

            var command = new LogParcelCommand(
                request.ResidentId, 
                request.UnitId, 
                request.CourierName, 
                request.TrackingNumber, 
                photoUrl, 
                request.GuardId
            );

            var id = await _mediator.Send(command);
            return Ok(new { ParcelId = id });
        }
    }

    public class LogParcelRequest
    {
        public Guid ResidentId { get; set; }
        public Guid UnitId { get; set; }
        public required string CourierName { get; set; }
        public string? TrackingNumber { get; set; }
        public IFormFile? Photo { get; set; }
        public Guid GuardId { get; set; }
    }
}