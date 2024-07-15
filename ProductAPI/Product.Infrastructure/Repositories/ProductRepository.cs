using Product.Domain.Interfaces;
using Product.Infrastructure.Context;

namespace Product.Infrastructure.Repositories
{
    public class ProductRepository : BaseRepository<Product.Domain.Entities.Product>, IProductRepository
    {
        public ProductRepository(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
