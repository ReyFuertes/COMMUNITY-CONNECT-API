namespace EngagementService.Application.Interfaces
{
    public interface INotificationClient
    {
        Task SendNewPostNotificationAsync(Guid postId, Guid authorId);
        Task SendNewEventNotificationAsync(Guid eventId, string title);
        Task SendPollUpdateNotificationAsync(Guid pollId, string question);
    }
}