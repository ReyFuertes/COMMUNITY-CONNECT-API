using FinanceService.Application.Features.Invoices.Commands.CreateInvoice;
using FinanceService.Application.Features.Invoices.Queries.GetInvoicesByResident;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace FinanceService.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoicesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public InvoicesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateInvoice([FromBody] CreateInvoiceCommand command)
        {
            var id = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetInvoicesByResident), new { residentId = command.ResidentId }, id);
        }

        [HttpGet("resident/{residentId}")]
        public async Task<ActionResult> GetInvoicesByResident(Guid residentId)
        {
            var result = await _mediator.Send(new GetInvoicesByResidentQuery(residentId));
            return Ok(result);
        }
    }
}