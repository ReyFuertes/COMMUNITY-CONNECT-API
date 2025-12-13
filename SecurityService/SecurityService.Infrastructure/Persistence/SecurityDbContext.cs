using Microsoft.EntityFrameworkCore;
using SecurityService.Domain.Entities;

namespace SecurityService.Infrastructure.Persistence
{
    public class SecurityDbContext : DbContext
    {
        public SecurityDbContext(DbContextOptions<SecurityDbContext> options) : base(options) { }

        public DbSet<VisitorPass> VisitorPasses { get; set; }
        public DbSet<VisitLog> VisitLogs { get; set; }
        public DbSet<Parcel> Parcels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
             modelBuilder.Entity<VisitorPass>()
                .HasMany(v => v.Logs)
                .WithOne(l => l.VisitorPass)
                .HasForeignKey(l => l.VisitorPassId);
        }
    }
}