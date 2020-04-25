using System.Collections.Generic;
using System.Linq;
using JobFinder.Business.Results;
using JobFinder.Business.Services.Interfaces;
using JobFinder.Data.Context;
using JobFinder.General.Entities;
using Microsoft.EntityFrameworkCore;

namespace JobFinder.Business.Services.Realizations
{
    public class UserService : IUserService
    {
        private readonly JFContext _context;

        public UserService()
        {
            this._context = new JFContext();    
        }
        public IServiceResult<User> GetByCredentials(string login, string password)
        {
            return new ServiceResult<User>()
            {
                Result = _context.Users
                    .FirstOrDefault(user => user.Login == login
                                            && user.Password == password),
                IsSuccessful = true
            };
        }

        public IServiceResult<IEnumerable<User>> GetAll()
        {
            return new ServiceResult<IEnumerable<User>>()
            {
                Result = _context.Users.AsQueryable(),
                IsSuccessful = true
            };
        }

        public IServiceResult<User> GetById(int id)
        {
            return new ServiceResult<User>()
            {
                Result = _context.Users.Find(id),
                IsSuccessful = true
            };
        }

        public IServiceResult<User> Save(User obj)
        {
            _context.Users.Add(obj);
            _context.SaveChanges();

            return new ServiceResult<User>()
            {
                Result = obj,
                IsSuccessful = true,
            };
        }

        public IServiceResult<User> Delete(int id)
        {
            var user = _context.Find<User>(id);
            Delete(user);

            return new ServiceResult<User>()
            {
                Result = user,
                IsSuccessful = true
            };
        }

        public void Delete(User medicament)
        {
            if (_context.Entry(medicament).State == EntityState.Detached)
            {
                _context.Attach(medicament);
            }

            _context.Remove(medicament);
        }
    }
}
