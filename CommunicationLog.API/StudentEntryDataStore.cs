using CommunicationLog.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CommunicationLog.API
{
    public class StudentEntryDataStore
    {
        public static StudentEntryDataStore Current { get; } = new StudentEntryDataStore();
        public List<StudentsEntryDto> Entries { get; set; }
        public StudentEntryDataStore()
        {
            Entries = new List<StudentsEntryDto>()
            {
                new StudentsEntryDto()
                {
                    StudentId = 1,
                    EntryId = 1,
                    Contacted = false,
                    DatesContacted = DateTime.Now, //DateTime.Now.ToString(),
                    Notes = "Did not answer. Left message"
                },
                new StudentsEntryDto()
                {
                     StudentId = 1,
                     EntryId = 2,
                     Contacted = true,
                     DatesContacted = DateTime.Now.AddDays(1), //DateTime.Now.ToString(),
                     Notes = "Spoke to Parents. Will make sure Jason will turn in his assignments"
                },
                new StudentsEntryDto()
                {
                     StudentId = 2,
                     EntryId = 3,
                     Contacted = true,
                     DatesContacted = DateTime.Now.AddDays(1), //DateTime.Now.ToString(),
                     Notes = "Jimmy sucks"
                }
            };
        }
    }
}

