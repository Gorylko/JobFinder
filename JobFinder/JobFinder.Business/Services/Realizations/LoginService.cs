using System;
using JobFinder.Business.Services.Interfaces;
using JobFinder.General.Entities;

namespace JobFinder.Business.Services.Realizations
{
    public class LoginService : ILoginService
    {
        private readonly IUserService _userService;

        public LoginService()
        {
            this._userService = new UserService();
        }

        public User Login(string login, string password)
        {
            return _userService.GetByCredentials(login, password);
        }

        public User Register(string login, string password)
        {
            if (_userService.GetByCredentials(login, password) != null)
            {
                return null;
            }

            var user = new User
            {
                Login = login,
                Password = password
            };

            _userService.Save(user);

            return user;
        }
    }
}
