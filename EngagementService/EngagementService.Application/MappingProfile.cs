using AutoMapper;
using EngagementService.Application.Dtos;
using EngagementService.Domain.Entities;

namespace EngagementService.Application
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Post, PostDto>().ReverseMap();
            CreateMap<Comment, CommentDto>().ReverseMap();
            CreateMap<Poll, PollDto>().ReverseMap();
            CreateMap<PollOption, PollOptionDto>().ReverseMap();
            CreateMap<CommunityEvent, CommunityEventDto>().ReverseMap();
        }
    }
}