using System;
using System.Collections.Generic;
using System.Text;
using JobFinder.Business.Services.Interfaces;
using JobFinder.General.Entities;

namespace JobFinder.Business.Services.Realizations
{
    public class LoginService : ILoginService
    {
        public User Login(string login, string password)
        {
            return new User()
            {
                Id = 1,
                Login = "testLogin",
                Password = "testPass"
            };
        }

        public User Register(string login, string password)
        {
            throw new NotImplementedException();
        }

        public User Login(string login)
        {
            throw new NotImplementedException();
        }
    }
}
