using System;
using System.Collections.Generic;
using System.Text;
using JobFinder.General.Entities;

namespace JobFinder.Business.Services.Interfaces
{
    public interface ILoginService
    {
        User Login(string login, string password);

        User Register(string login, string password);

        User Login(string login);
    }
}
