using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

  //Add ProductDbContext
builder.Services.AddDbContext<ProductDbContext>(options =>{
      var config = builder.Configuration;
      var connectionString = config.GetConnectionString("defaultConnection");

      options.UseSqlServer(connectionString);
});
    
  // CORS hatasi verdigi için ayarlari yapiyoruz 
builder.Services.AddCors();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options => {
        options.SwaggerEndpoint("/openapi/v1.json", "Demo API");
    });
}

app.UseHttpsRedirection();

app.UseStaticFiles(); // Statik dosyaların (wwwroot içeriği) servis edilmesini sağlar

// CORS'u kullan
app.UseCors(opt => {
  opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000") ;// Frontend adresi
});

app.UseAuthorization();

app.MapControllers();

app.Run();
