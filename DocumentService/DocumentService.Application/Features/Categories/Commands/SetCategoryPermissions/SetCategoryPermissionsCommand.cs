using MediatR;
using DocumentService.Application.Dtos;

namespace DocumentService.Application.Features.Categories.Commands.SetCategoryPermissions
{
    public record SetCategoryPermissionsCommand(Guid CategoryId, List<DocumentPermissionDto> Permissions) : IRequest<bool>;
}