using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DataAccess
{
    public class EntryDto
    {
        public int EntryId { get; set; }
        public bool Contacted { get; set; }
        public DateTime DatesContacted { get; set; }
        public string Notes { get; set; }
        public int StudentId { get; set; }
    }
}
