using AutoMapper;
using MediatR;
using EngagementService.Application.Dtos;
using EngagementService.Application.Interfaces;
using EngagementService.Domain.Entities;
using EngagementService.Domain.Interfaces;

namespace EngagementService.Application.Features.Posts.Commands.AddComment
{
    public class AddCommentHandler : IRequestHandler<AddCommentCommand, CommentDto>
    {
        private readonly IPostRepository _postRepository;
        private readonly IRepository<Comment> _commentRepository;
        private readonly IUserAndUnitIntegrationClient _userAndUnitClient;
        private readonly IMapper _mapper;

        public AddCommentHandler(IPostRepository postRepository, IRepository<Comment> commentRepository, IUserAndUnitIntegrationClient userAndUnitClient, IMapper mapper)
        {
            _postRepository = postRepository;
            _commentRepository = commentRepository;
            _userAndUnitClient = userAndUnitClient;
            _mapper = mapper;
        }

        public async Task<CommentDto> Handle(AddCommentCommand request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if (post == null) throw new Exception("Post not found.");
            
            if (!await _userAndUnitClient.UserExistsAsync(request.AuthorId))
            {
                throw new Exception("Author not found.");
            }

            var comment = _mapper.Map<Comment>(request);
            comment.Id = Guid.NewGuid();
            comment.PostedAt = DateTime.UtcNow;

            await _commentRepository.AddAsync(comment);
            
            // Optionally, send a notification for new comment
            // await _notificationClient.SendNewCommentNotificationAsync(comment.PostId, comment.AuthorId);

            return _mapper.Map<CommentDto>(comment);
        }
    }
}