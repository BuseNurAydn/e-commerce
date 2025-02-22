using API.Data;
using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class ProductDbContext : DbContext { // veritabanına karşılık gelecek olan sınıf
    
    public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options) { }  //constructor

    public DbSet<Product> Products {get; set;}  //sınıfı,veritabanına tanıttık.Veritabanına ait olduğunu belirttik


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}