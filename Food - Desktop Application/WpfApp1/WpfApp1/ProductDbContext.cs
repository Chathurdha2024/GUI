using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WpfApp1
{
    public class ProductDbContext : DbContext
    {
        public DbSet<food> foods { get; set; }  // Use the 'Foods' table from your existing database.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\ASUS\Documents\GitHub\GUI\Food Ordering System\backend\database.sqlite");
        }

    }

}
