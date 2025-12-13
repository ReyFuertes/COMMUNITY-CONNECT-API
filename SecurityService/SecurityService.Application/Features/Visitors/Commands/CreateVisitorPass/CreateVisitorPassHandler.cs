using AutoMapper;
using MediatR;
using SecurityService.Application.Dtos;
using SecurityService.Application.Interfaces;
using SecurityService.Domain.Entities;
using SecurityService.Domain.Enums;
using SecurityService.Domain.Interfaces;

namespace SecurityService.Application.Features.Visitors.Commands.CreateVisitorPass
{
    public class CreateVisitorPassHandler : IRequestHandler<CreateVisitorPassCommand, VisitorPassDto>
    {
        private readonly IVisitorPassRepository _repository;
        private readonly IQrCodeGenerator _qrGenerator;
        private readonly IMapper _mapper;

        public CreateVisitorPassHandler(IVisitorPassRepository repository, IQrCodeGenerator qrGenerator, IMapper mapper)
        {
            _repository = repository;
            _qrGenerator = qrGenerator;
            _mapper = mapper;
        }

        public async Task<VisitorPassDto> Handle(CreateVisitorPassCommand request, CancellationToken cancellationToken)
        {
            var accessCode = Guid.NewGuid().ToString("N").Substring(0, 8).ToUpper(); 

            var pass = new VisitorPass
            {
                Id = Guid.NewGuid(),
                ResidentId = request.ResidentId,
                UnitId = request.UnitId,
                GuestName = request.GuestName,
                VisitDate = request.VisitDate,
                VehiclePlateNumber = request.VehiclePlateNumber,
                AccessCode = accessCode,
                Status = VisitorStatus.Pending,
                ValidFrom = request.VisitDate.Date,
                ValidUntil = request.VisitDate.Date.AddDays(1).AddTicks(-1),
                CreatedAt = DateTime.UtcNow
            };

            await _repository.AddAsync(pass);

            var dto = _mapper.Map<VisitorPassDto>(pass);
            dto.QrCodeBase64 = _qrGenerator.GenerateQrCodeBase64(accessCode);

            return dto;
        }
    }
}