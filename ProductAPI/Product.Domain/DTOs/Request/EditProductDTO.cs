namespace Product.Domain.DTOs.Request
{
    public class EditProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Quantity  { get; set; }
        public decimal Price  { get; set; }
    }
}
