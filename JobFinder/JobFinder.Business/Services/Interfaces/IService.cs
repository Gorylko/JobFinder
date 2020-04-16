using System;
using System.Collections.Generic;
using System.Text;

namespace JobFinder.Business.Services.Interfaces
{
    public interface IService<T>
    {
        T GetById(int id);

        IEnumerable<T> GetAll();

        void Save(T obj);

        void Delete(int id);
    }
}
