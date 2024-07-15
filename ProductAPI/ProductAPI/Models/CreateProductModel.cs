using Product.Domain.Entities;
using System.ComponentModel.DataAnnotations;

namespace Product.API.Models
{
    public class CreateProductModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public QuantityType QuantityType { get; set; }

        [Required]
        public decimal Quantity { get; set; }
    }
}
