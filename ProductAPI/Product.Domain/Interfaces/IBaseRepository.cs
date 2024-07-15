using Product.Domain.Entities;

namespace Product.Domain.Interfaces;

public interface IBaseRepository<TEntity> where TEntity : BaseEntity
{
    Task<IEnumerable<TEntity>> GetAllAsync();

    Task<TEntity?> GetByIdAsync(int id);

    Task<TEntity> CreateAsync(TEntity entity);

    TEntity Update(TEntity entity);

    void Delete(TEntity entity);
}
