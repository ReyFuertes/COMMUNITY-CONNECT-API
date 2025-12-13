using FinanceService.Application.Features.Payments.Commands.UpdatePaymentStatus;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using System.Text.Json.Serialization;

namespace FinanceService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WebhooksController : ControllerBase
    {
        private readonly IMediator _mediator;

        public WebhooksController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("stripe")]
        public async Task<IActionResult> StripeWebhook()
        {
            try
            {
                var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
                var stripeEvent = EventUtility.ParseEvent(json);

                if (stripeEvent.Type == "checkout.session.completed")
                {
                    var session = stripeEvent.Data.Object as Stripe.Checkout.Session;
                    if (session != null)
                    {
                        // We map Stripe Session ID to our ExternalTransactionId
                        await _mediator.Send(new UpdatePaymentStatusCommand(session.Id, Domain.Enums.PaymentStatus.Completed));
                    }
                }

                return Ok();
            }
            catch (Exception)
            {
                // Log error
                return BadRequest();
            }
        }

        [HttpPost("xendit")]
        public async Task<IActionResult> XenditWebhook([FromBody] XenditInvoiceCallback payload)
        {
            if (payload == null || string.IsNullOrEmpty(payload.Id)) return BadRequest();

            Domain.Enums.PaymentStatus status;
            if (payload.Status == "PAID")
            {
                status = Domain.Enums.PaymentStatus.Completed;
            }
            else if (payload.Status == "EXPIRED")
            {
                status = Domain.Enums.PaymentStatus.Failed;
            }
            else
            {
                return Ok(); // Ignore other statuses
            }

            // We use payload.Id (Xendit Invoice ID) to match ExternalTransactionId
            await _mediator.Send(new UpdatePaymentStatusCommand(payload.Id!, status));

            return Ok();
        }
    }

    public class XenditInvoiceCallback 
    { 
        [JsonPropertyName("id")]
        public string? Id { get; set; } 
        
        [JsonPropertyName("external_id")]
        public string? ExternalId { get; set; } 
        
        [JsonPropertyName("status")]
        public string? Status { get; set; } 
    }
}