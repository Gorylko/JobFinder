using JobFinder.Business.Results;
using JobFinder.General.Entities;

namespace JobFinder.Business.Services.Interfaces
{
    public interface ILoginService
    {
        IServiceResult<User> Login(string login, string password);

        IServiceResult<User> Register(string login, string password);
    }
}
