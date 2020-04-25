using JobFinder.Business.Results;
using JobFinder.Business.Validators.Entities;
using JobFinder.Business.Validators.Interfaces;
using JobFinder.General.Entities;

namespace JobFinder.Business.Validators.Realizations
{
    public class ItemValidator : IValidator<Item>
    {
        private readonly ConditionList<Item> _conditionList;

        public ItemValidator()
        {
            _conditionList = new ConditionList<Item>();

            InitializeConditions();
        }

        private void InitializeConditions()
        {
            _conditionList
                .Add(item => item.Name != null, "Name is null")
                .Add(item => item.Name.Length > 5, "Name is so short");
        }

        public ServiceResult<Item> IsValid(Item obj)
        {
            return _conditionList.CheckConditions(obj);
        }
    }
}
