using System;
using System.Collections.Generic;
using System.Text;

namespace JobFinder.General.Entities
{
    public class Item
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Requirements { get; set; }

        public string Benefits { get; set; }

        public string AdditionalContacts { get; set; }
    }
}
