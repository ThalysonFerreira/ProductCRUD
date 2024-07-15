namespace Product.Domain.Interfaces;

public interface IUnitOfWork
{
    IProductRepository ProductRepository { get; }

    Task CommitAsync();

    void Disponse();
}
