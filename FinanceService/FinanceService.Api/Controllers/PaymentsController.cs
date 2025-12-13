using FinanceService.Application.Features.Payments.Commands.InitiatePayment;
using FinanceService.Application.Features.Payments.Commands.UploadPaymentProof;
using FinanceService.Application.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace FinanceService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IFileStorageService _fileStorageService;

        public PaymentsController(IMediator mediator, IFileStorageService fileStorageService)
        {
            _mediator = mediator;
            _fileStorageService = fileStorageService;
        }

        [HttpPost("initiate")]
        public async Task<ActionResult> InitiatePayment([FromBody] InitiatePaymentCommand command)
        {
            var result = await _mediator.Send(command);
            if (!result.IsSuccess)
            {
                return BadRequest(result.ErrorMessage);
            }
            return Ok(result);
        }

        [HttpPost("{id}/proof")]
        public async Task<ActionResult> UploadProof(Guid id, IFormFile file)
        {
            if (file == null || file.Length == 0) return BadRequest("No file uploaded.");

            string fileUrl;
            using (var stream = file.OpenReadStream())
            {
                var uniqueFileName = $"{id}_{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";
                fileUrl = await _fileStorageService.UploadAsync(stream, uniqueFileName, file.ContentType);
            }

            var result = await _mediator.Send(new UploadPaymentProofCommand(id, fileUrl));

            if (!result) return NotFound("Payment not found.");

            return Ok(new { Message = "Proof uploaded successfully.", Url = fileUrl });
        }
    }
}