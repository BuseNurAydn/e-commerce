using API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


[Route("/api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{

   private readonly ProductDbContext _context; // sadece okunabilir ProductDbContext tanımlıyoruz

   public ProductController(ProductDbContext context)//constructor yardımıyla DbContext'ten nesne üretiyoruz
   {
      _context = context;
   }

   //get isteği
   //GET: api/products
   [HttpGet]
   public async Task<IActionResult> GetProducts()
   {
      var products = await _context.Products.ToListAsync();
      return Ok(products);
   }

   //Belirli bir ürüne ait bilgileri almak için kullanılır
   //GET: api/products/1
   [HttpGet("{id}")]
   public async Task<IActionResult> GetProduct(int? id) // asenkron // int? id -> null değer de alabilir
   {                                                    // nullable integer (null olabilen tamsayı)
      if (id == null)
      {
         return NotFound(); //404 Hata kodu
      }

      var product = await _context.Products.FindAsync(id);
       if (product == null)
      {
         return NotFound(); //404 Hata kodu
      }

      return Ok(product);  // 200 ok kodu

   }

}