using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CommunicationLog.API.Models
{
    public class StudentDto
    {
        public int StudentId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public decimal Grade { get; set; }
        //public int NumberOfNotes { get; set; }
        //public int NumberOfStudentsEntry
        //{
        //    get
        //    {
        //        return StudentsEntry.Count;
        //    }
        //}
       // public ICollection<StudentsEntryDto> StudentsEntry { get; set; } = new List<StudentsEntryDto>();
    }
}
