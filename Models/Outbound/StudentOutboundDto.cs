using Models.DataAccess;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Models.Outbound
{
    public class StudentOutboundDto
    {
        public int StudentId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public decimal Grade { get; set; }

        public ICollection<EntryDto> Entries { get; set; } = new List<EntryDto>();

    }
}
