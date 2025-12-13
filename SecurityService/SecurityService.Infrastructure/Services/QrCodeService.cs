using QRCoder;
using SecurityService.Application.Interfaces;

namespace SecurityService.Infrastructure.Services
{
    public class QrCodeService : IQrCodeGenerator
    {
        public string GenerateQrCodeBase64(string content)
        {
            using var qrGenerator = new QRCodeGenerator();
            using var qrCodeData = qrGenerator.CreateQrCode(content, QRCodeGenerator.ECCLevel.Q);
            using var qrCode = new Base64QRCode(qrCodeData);
            return qrCode.GetGraphic(20);
        }
    }
}