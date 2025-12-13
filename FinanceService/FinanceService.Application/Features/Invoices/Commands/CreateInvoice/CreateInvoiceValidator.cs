using FluentValidation;

namespace FinanceService.Application.Features.Invoices.Commands.CreateInvoice
{
    public class CreateInvoiceValidator : AbstractValidator<CreateInvoiceCommand>
    {
        public CreateInvoiceValidator()
        {
            RuleFor(p => p.ResidentId).NotEmpty().WithMessage("{PropertyName} is required.");
            RuleFor(p => p.UnitId).NotEmpty().WithMessage("{PropertyName} is required.");
            RuleFor(p => p.DueDate).GreaterThan(DateTime.UtcNow).WithMessage("{PropertyName} must be in the future.");
            RuleFor(p => p.Items).NotEmpty().WithMessage("At least one invoice item is required.");
        }
    }
}