using JobFinder.Business.Results;
using System;
using System.Collections.Generic;

namespace JobFinder.Business.Validators.Entities
{
    public class ConditionList<T>
    {
        private readonly IList<Condition<T>> _conditions;

        public ConditionList()
        {
            _conditions = new List<Condition<T>>();
        }

        public ConditionList<T> Add(Predicate<T> predicate, string message)
        {
            if (predicate != null)
            {
                _conditions.Add(new Condition<T>()
                {
                    CheckIsMatches = predicate,
                    ErrorMessage = message
                });
            }

            return this;
        }

        public ServiceResult<T> CheckConditions(T obj)
        {
            string errorMessage = String.Empty;

            foreach (var condition in _conditions)
            {
                errorMessage += condition.CheckIsMatches(obj)
                    ? String.Empty
                    : $"{condition.ErrorMessage}\n";
            }

            return new ServiceResult<T>()
            {
                Result = obj,
                IsSuccessful = errorMessage.Equals(String.Empty),
                ErrorMessage = errorMessage
            };
        }
    }
}
