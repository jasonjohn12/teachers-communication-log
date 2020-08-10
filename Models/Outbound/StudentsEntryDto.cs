using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Models.Outbound
{
    public class StudentsEntryDto
    {
        public int EntryId { get; set; }
        [Required]
        public bool Contacted { get; set; }
        [Required]
        public DateTime DatesContacted { get; set; }
        public string Notes { get; set; }
        [Required]
        public int StudentId { get; set; }
    }
}
