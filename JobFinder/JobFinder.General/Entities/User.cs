using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace JobFinder.General.Entities
{
    public class User
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }
    }
}
