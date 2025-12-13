using Microsoft.EntityFrameworkCore;
using EngagementService.Domain.Entities;

namespace EngagementService.Infrastructure.Persistence
{
    public class EngagementDbContext : DbContext
    {
        public EngagementDbContext(DbContextOptions<EngagementDbContext> options) : base(options) { }

        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Poll> Polls { get; set; }
        public DbSet<PollOption> PollOptions { get; set; }
        public DbSet<UserVote> UserVotes { get; set; }
        public DbSet<CommunityEvent> CommunityEvents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Post>()
                .HasMany(p => p.Comments)
                .WithOne(c => c.Post)
                .HasForeignKey(c => c.PostId);

            modelBuilder.Entity<Poll>()
                .HasMany(p => p.Options)
                .WithOne(o => o.Poll)
                .HasForeignKey(o => o.PollId);
            
            modelBuilder.Entity<PollOption>()
                .HasMany(o => o.UserVotes)
                .WithOne(uv => uv.PollOption)
                .HasForeignKey(uv => uv.PollOptionId);

            modelBuilder.Entity<UserVote>()
                .HasIndex(uv => new { uv.PollOptionId, uv.UserId })
                .IsUnique(); // Ensure a user can only vote once per poll option
        }
    }
}