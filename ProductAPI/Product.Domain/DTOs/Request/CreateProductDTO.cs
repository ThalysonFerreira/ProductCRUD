using Product.Domain.Entities;

namespace Product.Domain.DTOs.Request
{
    public class CreateProductDTO
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public QuantityType QuantityType { get; set; }
        public decimal Quantity { get; set; }

    }
}
