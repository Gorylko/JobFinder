using System;
using System.Collections.Generic;
using JobFinder.General.Entities;
using Microsoft.EntityFrameworkCore;

namespace JobFinder.Data.Context
{
    public class JFContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Item> Items { get; set; }

        public JFContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=jf_db;Trusted_Connection=True;");
        }
    }
}
