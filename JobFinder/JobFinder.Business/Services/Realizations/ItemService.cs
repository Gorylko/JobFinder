using JobFinder.Business.Results;
using JobFinder.Business.Services.Interfaces;
using JobFinder.Business.Validators.Interfaces;
using JobFinder.Business.Validators.Realizations;
using JobFinder.Data.Context;
using JobFinder.General.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace JobFinder.Business.Services.Realizations
{
    public class ItemService : IItemService
    {
        private readonly JFContext _context;
        private readonly IValidator<Item> _validator;

        public ItemService()
        {
            this._context = new JFContext();
            this._validator = new ItemValidator();
        }
        public IServiceResult<IEnumerable<Item>> GetAll()
        {
            return new ServiceResult<IEnumerable<Item>>()
            {
                Result = _context.Items.ToList(),
                IsSuccessful = true
            };
        }

        public IServiceResult<Item> GetById(int id)
        {
            return new ServiceResult<Item>()
            {
                Result = _context.Items.Find(id),
                IsSuccessful = true
            };
        }

        public IServiceResult<Item> Save(Item obj)
        {
            var validatorResult = _validator.IsValid(obj);
            validatorResult.IsSuccessful = true;
            if (!validatorResult.IsSuccessful)
            {
                return validatorResult;
            }

            _context.Items.Add(obj);
            _context.SaveChanges();

            return validatorResult;
        }

        public IServiceResult<Item> Delete(int id)
        {
            var medicament = _context.Find<Item>(id);
            Delete(medicament);

            return new ServiceResult<Item>();
        }

        public IServiceResult<Item> Delete(Item item)
        {
            if (_context.Entry(item).State == EntityState.Detached)
            {
                _context.Attach(item);
            }

            _context.Remove(item);
            _context.SaveChanges();
            return new ServiceResult<Item>();
        }
    }
}
