using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using JobFinder.Business.Services.Interfaces;
using JobFinder.Data.Context;
using JobFinder.General.Entities;
using Microsoft.EntityFrameworkCore;

namespace JobFinder.Business.Services.Realizations
{
    public class ItemService : IItemService
    {
        private readonly JFContext _context;

        public ItemService()
        {
            this._context = new JFContext();
        }
        public IEnumerable<Item> GetAll()
        {
            return _context.Items.ToList();
        }

        public Item GetById(int id)
        {
            return _context.Items.Find(id);
        }

        public void Save(Item obj)
        {
            _context.Items.Add(obj);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var medicament = _context.Find<Item>(id);
            Delete(medicament);
        }

        public void Delete(Item item)
        {
            if (_context.Entry(item).State == EntityState.Detached)
            {
                _context.Attach(item);
            }

            _context.Remove(item);
        }
    }
}
