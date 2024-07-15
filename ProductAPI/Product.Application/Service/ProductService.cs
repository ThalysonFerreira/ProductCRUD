using Product.Domain.DTOs.Request;
using Product.Domain.DTOs.Response;
using ProductEntity = Product.Domain.Entities.Product;
using Product.Domain.Interfaces;
using Product.Application.Util;

namespace Product.Application.Service
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductService(IUnitOfWork unitOfWork) => _unitOfWork = unitOfWork;

        public async Task<CreateProductResponseDTO> CreateAsync(CreateProductDTO createTodoDTO)
        {
            try
            {
                ProductEntity product = new ProductEntity
                {
                    Name = createTodoDTO.Name,
                    CreationDate = DateTime.Now,
                    Price = createTodoDTO.Price,
                    Quantity = createTodoDTO.Quantity,
                    QuantityType = createTodoDTO.QuantityType
                };

                product = await _unitOfWork.ProductRepository.CreateAsync(product);

                await _unitOfWork.CommitAsync();

                return new CreateProductResponseDTO
                {
                    Id = product.Id
                };
            }
            catch (Exception ex)
            {
                _unitOfWork.Disponse();
                throw ex;
            }
        }

        public async Task DeleteAsync(int id)
        {
            try
            {
                ProductEntity product = await _unitOfWork.ProductRepository.GetByIdAsync(id);

                if (product != null)
                {
                    _unitOfWork.ProductRepository.Delete(product);
                    await _unitOfWork.CommitAsync();
                }

            }
            catch (Exception ex)
            {
                _unitOfWork.Disponse();
                throw ex;
            }
        }

        public async Task EditAsync(EditProductDTO editTodoDTO)
        {
            try
            {
                ProductEntity product = await _unitOfWork.ProductRepository.GetByIdAsync(editTodoDTO.Id);

                if (product is null) throw new Exception(ServiceMsg.PROEXC0001);

                product.Name = editTodoDTO.Name;
                product.Price = editTodoDTO.Price;
                product.UpdateDate = DateTime.Now;
                product.Quantity = editTodoDTO.Quantity;

                _unitOfWork.ProductRepository.Update(product);

                await _unitOfWork.CommitAsync();

            }
            catch (Exception ex)
            {
                _unitOfWork.Disponse();
                throw ex;
            }
        }

        public async Task<IEnumerable<ProductResponseDTO>> GetAllAsync()
        {
            try
            {
               var products = await _unitOfWork.ProductRepository.GetAllAsync();

                return products.Select(product => new ProductResponseDTO
                {
                    Name = product.Name,
                    Price = product.Price,
                    Id = product.Id,
                    Quantity = product.Quantity,
                    QuantityType = product.QuantityType
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
