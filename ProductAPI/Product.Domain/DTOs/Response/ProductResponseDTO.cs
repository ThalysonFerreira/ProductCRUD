using Product.Domain.Entities;

namespace Product.Domain.DTOs.Response
{
    public class ProductResponseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public QuantityType QuantityType { get; set; }
        public decimal Quantity { get; set; }
    }
}
