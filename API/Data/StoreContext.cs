using API.Entities;
using API.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }
    public required DbSet<Order> Orders { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole { Id = "8cc36bfa-ec7b-40b5-b172-4f066aaaaa04", Name = "Member", NormalizedName = "MEMBER" },
                new IdentityRole { Id = "994ae4c9-650c-4c30-983a-c99ec76bc451", Name = "Admin", NormalizedName = "ADMIN" }
            );
    }
}
