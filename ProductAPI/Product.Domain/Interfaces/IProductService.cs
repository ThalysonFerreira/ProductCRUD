using Product.Domain.DTOs.Request;
using Product.Domain.DTOs.Response;

namespace Product.Domain.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductResponseDTO>> GetAllAsync();

        Task<CreateProductResponseDTO> CreateAsync(CreateProductDTO createTodoDTO);

        Task EditAsync(EditProductDTO editTodoDTO);

        Task DeleteAsync(int id);
    }
}
