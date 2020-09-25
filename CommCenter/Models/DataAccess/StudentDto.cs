using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DataAccess
{
    public class StudentDto
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal Grade { get; set; }
    }
}
