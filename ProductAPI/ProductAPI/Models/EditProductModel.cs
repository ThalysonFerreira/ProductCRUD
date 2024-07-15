using System.ComponentModel.DataAnnotations;

namespace Product.API.Models
{
    public class EditProductModel
    {
        [Required]
        public int Id { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
        public decimal Quantity { get; set; }
    }
}
