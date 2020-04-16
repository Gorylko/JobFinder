using JobFinder.General.Entities;

namespace JobFinder.Business.Services.Interfaces
{
    public interface ILoginService
    {
        User Login(string login, string password);

        User Register(string login, string password);
    }
}
