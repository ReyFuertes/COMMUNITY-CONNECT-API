using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using SecurityService.Application.Interfaces;
using Microsoft.Extensions.Configuration;

namespace SecurityService.Infrastructure.Services
{
    public class AzureBlobStorageService : IFileStorageService
    {
        private readonly string _connectionString;
        private readonly string _containerName;

        public AzureBlobStorageService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("AzureStorage") ?? throw new ArgumentNullException("AzureStorage connection string is missing");
            _containerName = configuration["AzureStorage:ContainerName"] ?? "security-files";
        }

        public async Task<string> UploadAsync(Stream fileStream, string fileName, string contentType)
        {
            var blobServiceClient = new BlobServiceClient(_connectionString);
            var containerClient = blobServiceClient.GetBlobContainerClient(_containerName);
            
            await containerClient.CreateIfNotExistsAsync(PublicAccessType.Blob);

            var blobClient = containerClient.GetBlobClient(fileName);
            
            var blobUploadOptions = new BlobUploadOptions
            {
                HttpHeaders = new BlobHttpHeaders { ContentType = contentType }
            };

            await blobClient.UploadAsync(fileStream, blobUploadOptions);

            return blobClient.Uri.ToString();
        }
    }
}