using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Product.Application.Service;
using Product.Domain.Interfaces;
using Product.Infrastructure.Context;
using Product.Infrastructure.Repositories;

namespace Product.CrossCutting.IoC;

public static class DependencyInjection
{
    public static IServiceCollection AddInfraestructureDependency(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(opt => opt.UseInMemoryDatabase("ProductDatabase"));

        services.AddScoped<IUnitOfWork, UnitOfWork>();

        return services;
    }

    public static IServiceCollection AddApplicationDependency(this IServiceCollection services)
    {
        services.AddScoped<IProductService, ProductService>();

        return services;
    }
}
