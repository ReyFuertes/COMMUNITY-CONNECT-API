using MediatR;
using DocumentService.Domain.Enums;

namespace DocumentService.Application.Features.Permissions.Queries.CheckUserPermission
{
    public record CheckUserPermissionQuery(Guid DocumentCategoryId, Guid UserId, PermissionType PermissionType) : IRequest<bool>;
}