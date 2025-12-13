using AutoMapper;
using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Application.Interfaces;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Posts.Commands.CreatePost
{
    public class CreatePostHandler : IRequestHandler<CreatePostCommand, PostDto>
    {
        private readonly IPostRepository _repository;
        private readonly INotificationClient _notificationClient;
        private readonly IUserAndUnitIntegrationClient _userAndUnitClient;
        private readonly IMapper _mapper;

        public CreatePostHandler(IPostRepository repository, INotificationClient notificationClient, IUserAndUnitIntegrationClient userAndUnitClient, IMapper mapper)
        {
            _repository = repository;
            _notificationClient = notificationClient;
            _userAndUnitClient = userAndUnitClient;
            _mapper = mapper;
        }

        public async Task<PostDto> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            if (!await _userAndUnitClient.UserExistsAsync(request.AuthorId))
            {
                throw new Exception("Author not found.");
            }

            var post = _mapper.Map<Post>(request);
            post.Id = Guid.NewGuid();
            post.PostedAt = DateTime.UtcNow;
            
            await _repository.AddAsync(post);
            await _notificationClient.SendNewPostNotificationAsync(post.Id, post.AuthorId);

            return _mapper.Map<PostDto>(post);
        }
    }
}