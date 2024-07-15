
namespace Product.Domain.Entities
{
    public class Product : BaseEntity 
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public QuantityType QuantityType { get; set; }
        public decimal Quantity { get; set; }

    }
}
