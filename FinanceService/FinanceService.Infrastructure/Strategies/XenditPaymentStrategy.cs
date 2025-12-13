using FinanceService.Application.Interfaces;
using FinanceService.Application.Models;
using FinanceService.Domain.Entities;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json.Serialization;

namespace FinanceService.Infrastructure.Strategies
{
    public class XenditPaymentStrategy : IPaymentStrategy
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _config;

        public XenditPaymentStrategy(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }

        public async Task<PaymentInitiationResult> InitiatePaymentAsync(Payment payment, Invoice invoice)
        {
            try
            {
                var apiKey = _config["Xendit:SecretKey"];
                if (string.IsNullOrEmpty(apiKey))
                {
                    return new PaymentInitiationResult { IsSuccess = false, ErrorMessage = "Xendit API Key missing" };
                }

                var authHeader = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{apiKey}:"));
                _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", authHeader);

                // Note: payer_email should ideally come from the Resident entity via UserService.
                // For now we use a placeholder or assume it's passed in the invoice metadata if we had it.
                var requestBody = new
                {
                    external_id = payment.Id.ToString(),
                    amount = payment.Amount,
                    description = $"Invoice #{invoice.InvoiceNumber}",
                    success_redirect_url = _config["Xendit:SuccessUrl"],
                    failure_redirect_url = _config["Xendit:FailureUrl"],
                    // By default Xendit enables all active payment channels in the dashboard, 
                    // but we can specify them if we want to limit to e-wallets.
                    // payment_methods = new[] { "GCASH", "PAYMAYA", "GRABPAY", "QR_PH" } 
                };

                var response = await _httpClient.PostAsJsonAsync("https://api.xendit.co/v2/invoices", requestBody);

                if (!response.IsSuccessStatusCode)
                {
                    var error = await response.Content.ReadAsStringAsync();
                    return new PaymentInitiationResult { IsSuccess = false, ErrorMessage = $"Xendit Error: {error}" };
                }

                var result = await response.Content.ReadFromJsonAsync<XenditInvoiceResponse>();
                return new PaymentInitiationResult
                {
                    IsSuccess = true,
                    PaymentUrl = result?.InvoiceUrl,
                    ExternalId = result?.Id
                };
            }
            catch (Exception ex)
            {
                return new PaymentInitiationResult { IsSuccess = false, ErrorMessage = ex.Message };
            }
        }

        private class XenditInvoiceResponse 
        { 
            [JsonPropertyName("id")]
            public string? Id { get; set; } 
            
            [JsonPropertyName("invoice_url")]
            public string? InvoiceUrl { get; set; } 
        }
    }
}