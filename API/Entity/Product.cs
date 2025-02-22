namespace API.Entity;
using System.ComponentModel.DataAnnotations;

public class Product { //veritabanında tabloya karşılık gelecek. Product tablosu
      
     [Key]
     public int Id { get; set; }

     [Required]  //Name alanı zorunlu alan oldu
     public string? Name {get; set;}  // <Nullable>enable</Nullable>  //nullable

     public string? Description {get; set;}

     public decimal Price {get; set;}

     public bool IsActive {get; set;}

     public string? ImageUrl {get; set;}
     
     public int Stock {get; set;}
}