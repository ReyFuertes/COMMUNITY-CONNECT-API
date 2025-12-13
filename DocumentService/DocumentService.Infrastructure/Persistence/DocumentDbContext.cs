using Microsoft.EntityFrameworkCore;
using DocumentService.Domain.Entities;

namespace DocumentService.Infrastructure.Persistence
{
    public class DocumentDbContext : DbContext
    {
        public DocumentDbContext(DbContextOptions<DocumentDbContext> options) : base(options) { }

        public DbSet<Document> Documents { get; set; }
        public DbSet<DocumentCategory> DocumentCategories { get; set; }
        public DbSet<DocumentPermission> DocumentPermissions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<DocumentCategory>()
                .HasMany(c => c.Documents)
                .WithOne(d => d.DocumentCategory)
                .HasForeignKey(d => d.DocumentCategoryId);
            
            modelBuilder.Entity<DocumentCategory>()
                .HasMany(c => c.Permissions)
                .WithOne(p => p.DocumentCategory)
                .HasForeignKey(p => p.DocumentCategoryId);

            modelBuilder.Entity<DocumentCategory>()
                .HasMany(c => c.ChildCategories)
                .WithOne(c => c.ParentCategory)
                .HasForeignKey(c => c.ParentCategoryId);

            // Ensure DocumentFileName + CategoryId + Version is unique
            modelBuilder.Entity<Document>()
                .HasIndex(d => new { d.DocumentCategoryId, d.FileName, d.Version })
                .IsUnique();
            
            // Ensure CategoryId + UserRole is unique for permissions
            modelBuilder.Entity<DocumentPermission>()
                .HasIndex(p => new { p.DocumentCategoryId, p.UserRole })
                .IsUnique();
        }
    }
}