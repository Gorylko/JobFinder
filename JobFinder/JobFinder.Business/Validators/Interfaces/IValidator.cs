using JobFinder.Business.Results;

namespace JobFinder.Business.Validators.Interfaces
{
    public interface IValidator<T>
    {
        ServiceResult<T> IsValid(T obj);
    }
}
