using Product.Domain.Interfaces;
using Product.Infrastructure.Context;

namespace Product.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _appDbContext;
        private IProductRepository _productRepository;

        public UnitOfWork(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IProductRepository ProductRepository
        {
            get
            {
                _productRepository ??= new ProductRepository(_appDbContext);
                return _productRepository;
            }
        }

        public async Task CommitAsync()
        {
            await _appDbContext.SaveChangesAsync();
        }

        public void Disponse()
        {
            _appDbContext.Dispose();
        }
    }
}

