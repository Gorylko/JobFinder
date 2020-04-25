using System;
using System.Collections.Generic;
using System.Text;

namespace JobFinder.Business.Results
{
    public interface IServiceResult<TValue>
    {
        TValue Result { get; set; }

        bool IsSuccessful { get; set; }

        string ErrorMessage { get; set; }
    }
}
