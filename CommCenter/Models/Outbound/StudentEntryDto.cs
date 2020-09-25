using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models.Outbound
{
    public class StudentEntryDto
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
