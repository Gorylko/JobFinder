namespace JobFinder.Business.Results
{
    public class ServiceResult<T> : IServiceResult<T>
    {
        public T Result { get; set; }
        public bool IsSuccessful { get; set; }
        public string ErrorMessage { get; set; }
    }
}
