using MediatR;
using DocumentService.Application.Interfaces;
using DocumentService.Domain.Enums;
using DocumentService.Domain.Interfaces;

namespace DocumentService.Application.Features.Permissions.Queries.CheckUserPermission
{
    public class CheckUserPermissionHandler : IRequestHandler<CheckUserPermissionQuery, bool>
    {
        private readonly IDocumentPermissionRepository _permissionRepository;
        private readonly IUserAndUnitIntegrationClient _userAndUnitClient;

        public CheckUserPermissionHandler(IDocumentPermissionRepository permissionRepository, IUserAndUnitIntegrationClient userAndUnitClient)
        {
            _permissionRepository = permissionRepository;
            _userAndUnitClient = userAndUnitClient;
        }

        public async Task<bool> Handle(CheckUserPermissionQuery request, CancellationToken cancellationToken)
        {
            // Get user's role from UserAndUnitManagement service
            UserRole? userRole = await _userAndUnitClient.GetUserRoleAsync(request.UserId);
            if (!userRole.HasValue) return false;

            // Get permissions for the category and user's role
            var permission = await _permissionRepository.GetPermissionForRoleAsync(request.DocumentCategoryId, userRole.Value);
            if (permission == null) return false; // No explicit permission set

            return request.PermissionType == PermissionType.View ? permission.CanView : permission.CanUpload;
        }
    }
}