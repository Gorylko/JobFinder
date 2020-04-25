using System;
using JobFinder.Business.Results;
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

        public IServiceResult<User> Login(string login, string password)
        {
            return _userService.GetByCredentials(login, password);
        }

        public IServiceResult<User> Register(string login, string password)
        {
            if (_userService.GetByCredentials(login, password).IsSuccessful)
            {
                return new ServiceResult<User>()
                {
                    IsSuccessful = false,
                    ErrorMessage = "already exits"
                };
            }

            var user = new User
            {
                Login = login,
                Password = password
            };

            _userService.Save(user);

            return new ServiceResult<User>()
            {
                IsSuccessful = true
            };
        }
    }
}
