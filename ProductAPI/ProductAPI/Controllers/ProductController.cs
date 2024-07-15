using Microsoft.AspNetCore.Mvc;
using Product.API.Models;
using Product.API.Util;
using Product.Domain.DTOs.Request;
using Product.Domain.DTOs.Response;
using Product.Domain.Interfaces;

namespace ProductAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService) => _productService = productService;


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<ProductResponseDTO> todos = await _productService.GetAllAsync();

            return Ok(new { products = todos, message = "Ok" });
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateProductModel createProductModel)
        {
            CreateProductDTO createProductDTO = new CreateProductDTO
            {
                Price = createProductModel.Price,
                Quantity = createProductModel.Quantity,
                QuantityType = createProductModel.QuantityType,
                Name = createProductModel.Name
            };

            CreateProductResponseDTO response = await _productService.CreateAsync(createProductDTO);

            return Created("", response);
        }


        [HttpPut("{Id}")]
        public async Task<IActionResult> Put(EditProductModel editProductModel)
        {
            EditProductDTO editProductDTO = new EditProductDTO
            {
                Id = editProductModel.Id,
                Price = editProductModel.Price,
                Name = editProductModel.Name,
                Quantity = editProductModel.Quantity,
            };

            await _productService.EditAsync(editProductDTO);

            return Ok(APIMsg.APIDIS002);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _productService.DeleteAsync(id);

            return Ok(APIMsg.APIDIS001);
        }
    }
}
