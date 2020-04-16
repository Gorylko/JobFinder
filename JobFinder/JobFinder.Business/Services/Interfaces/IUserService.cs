﻿using System;
using System.Collections.Generic;
using System.Text;
using JobFinder.General.Entities;

namespace JobFinder.Business.Services.Interfaces
{
    public interface IUserService : IService<User>
    {
        User GetByCredentials(string login, string password);
    }
}
