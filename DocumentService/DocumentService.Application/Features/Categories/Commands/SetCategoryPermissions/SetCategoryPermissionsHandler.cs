using AutoMapper;
using MediatR;
using DocumentService.Domain.Entities;
using DocumentService.Domain.Interfaces;

namespace DocumentService.Application.Features.Categories.Commands.SetCategoryPermissions
{
    public class SetCategoryPermissionsHandler : IRequestHandler<SetCategoryPermissionsCommand, bool>
    {
        private readonly IDocumentCategoryRepository _categoryRepository;
        private readonly IDocumentPermissionRepository _permissionRepository;
        private readonly IMapper _mapper;

        public SetCategoryPermissionsHandler(IDocumentCategoryRepository categoryRepository, IDocumentPermissionRepository permissionRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _permissionRepository = permissionRepository;
            _mapper = mapper;
        }

        public async Task<bool> Handle(SetCategoryPermissionsCommand request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId);
            if (category == null) return false;

            // Delete existing permissions for the category
            var existingPermissions = await _permissionRepository.GetPermissionsForCategoryAsync(request.CategoryId);
            foreach (var perm in existingPermissions)
            {
                await _permissionRepository.DeleteAsync(perm);
            }

            // Add new permissions
            foreach (var permDto in request.Permissions)
            {
                var permission = _mapper.Map<DocumentPermission>(permDto);
                permission.Id = Guid.NewGuid();
                permission.DocumentCategoryId = request.CategoryId;
                await _permissionRepository.AddAsync(permission);
            }

            return true;
        }
    }
}