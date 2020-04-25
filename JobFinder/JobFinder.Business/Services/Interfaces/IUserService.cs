using System;
using System.Collections.Generic;
using System.Text;
using JobFinder.Business.Results;
using JobFinder.General.Entities;

namespace JobFinder.Business.Services.Interfaces
{
    public interface IUserService : IService<User>
    {
        IServiceResult<User> GetByCredentials(string login, string password);
    }
}
