using System;
using System.Collections.Generic;
using System.Text;

namespace JobFinder.Business.Validators.Entities
{
    public class Condition<T>
    {
        public Predicate<T> CheckIsMatches { get; set; }

        public string ErrorMessage { get; set; }
    }
}
