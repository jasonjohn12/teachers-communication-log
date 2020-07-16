using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CommunicationLog.API.Models
{
    public class StudentsWithEntriesDto
    {
        public List<StudentDto> Students { get; set; }
        public List<StudentsEntryDto> Entries { get; set; }
    }
}
