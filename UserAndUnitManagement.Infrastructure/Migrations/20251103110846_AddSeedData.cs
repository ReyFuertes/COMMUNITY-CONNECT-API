using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UserAndUnitManagement.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "Id", "Address", "City", "CreatedDate", "LastModifiedDate", "Name", "State", "Status", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("a1b2c3d4-e5f6-7890-1234-567890abcde0"), "123 Main St", "Anytown", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Unit 101", "CA", 0, "12345" },
                    { new Guid("fedcba09-8765-4321-0987-654321fedcb0"), "456 Oak Ave", "Someville", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Unit 202", "NY", 0, "54321" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedDate", "Email", "FirstName", "IsActive", "LastModifiedDate", "LastName", "OptInToDirectory", "PasswordHash", "Role", "ShowEmailInDirectory" },
                values: new object[,]
                {
                    { new Guid("a1b2c3d4-e5f6-7890-1234-567890abcdef"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "john.doe@example.com", "John", false, null, "Doe", false, "...", 0, false },
                    { new Guid("fedcba09-8765-4321-0987-654321fedcba"), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "jane.smith@example.com", "Jane", false, null, "Smith", false, "...", 0, false }
                });

            migrationBuilder.InsertData(
                table: "Pets",
                columns: new[] { "Id", "Breed", "Name", "PhotoUrl", "RegistrationDate", "Species", "UserId" },
                values: new object[,]
                {
                    { new Guid("a1b2c3d4-e5f6-7890-1234-567890abcde1"), "Golden Retriever", "Buddy", "", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Dog", new Guid("a1b2c3d4-e5f6-7890-1234-567890abcdef") },
                    { new Guid("fedcba09-8765-4321-0987-654321fedcb1"), "Siamese", "Whiskers", "", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Cat", new Guid("a1b2c3d4-e5f6-7890-1234-567890abcdef") }
                });

            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "Id", "Color", "ExpirationDate", "Make", "Model", "PlateNumber", "RegistrationDate", "UserId", "Year" },
                values: new object[,]
                {
                    { new Guid("a1b2c3d4-e5f6-7890-1234-567890abcde2"), "Silver", null, "Toyota", "Camry", "123-ABC", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new Guid("fedcba09-8765-4321-0987-654321fedcba"), 0 },
                    { new Guid("fedcba09-8765-4321-0987-654321fedcb2"), "Black", null, "Honda", "Civic", "456-DEF", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new Guid("fedcba09-8765-4321-0987-654321fedcba"), 0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Pets",
                keyColumn: "Id",
                keyValue: new Guid("a1b2c3d4-e5f6-7890-1234-567890abcde1"));

            migrationBuilder.DeleteData(
                table: "Pets",
                keyColumn: "Id",
                keyValue: new Guid("fedcba09-8765-4321-0987-654321fedcb1"));

            migrationBuilder.DeleteData(
                table: "Units",
                keyColumn: "Id",
                keyValue: new Guid("a1b2c3d4-e5f6-7890-1234-567890abcde0"));

            migrationBuilder.DeleteData(
                table: "Units",
                keyColumn: "Id",
                keyValue: new Guid("fedcba09-8765-4321-0987-654321fedcb0"));

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("a1b2c3d4-e5f6-7890-1234-567890abcde2"));

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("fedcba09-8765-4321-0987-654321fedcb2"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("a1b2c3d4-e5f6-7890-1234-567890abcdef"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("fedcba09-8765-4321-0987-654321fedcba"));
        }
    }
}
