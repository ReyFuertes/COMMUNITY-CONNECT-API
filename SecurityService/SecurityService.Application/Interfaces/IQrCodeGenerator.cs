namespace SecurityService.Application.Interfaces
{
    public interface IQrCodeGenerator
    {
        string GenerateQrCodeBase64(string content);
    }
}