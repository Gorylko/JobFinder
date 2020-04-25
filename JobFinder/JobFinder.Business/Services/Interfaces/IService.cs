using System;
using System.Collections.Generic;
using System.Text;
using JobFinder.Business.Results;

namespace JobFinder.Business.Services.Interfaces
{
    public interface IService<T>
    {
        IServiceResult<T> GetById(int id);

        IServiceResult<IEnumerable<T>> GetAll();

        IServiceResult<T> Save(T obj);

        IServiceResult<T> Delete(int id);
    }
}
