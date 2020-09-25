using Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess
{
    public class StudentEntriesDataStore
    {
        public static StudentEntriesDataStore Current { get; } = new StudentEntriesDataStore();
        public List<EntryDto> Entries { get; set; }
        public StudentEntriesDataStore()
        {
            Entries = new List<EntryDto>()
            {
                new EntryDto()
                {
                    StudentId = 1,
                    EntryId = 1,
                    Contacted = false,
                    DatesContacted = DateTime.Now, //DateTime.Now.ToString(),
                    Notes = "Did not answer. Left message"
                },
                new EntryDto()
                {
                     StudentId = 1,
                     EntryId = 2,
                     Contacted = true,
                     DatesContacted = DateTime.Now.AddDays(1), //DateTime.Now.ToString(),
                     Notes = "Spoke to Parents. Will make sure Jason will turn in his assignments"
                },
                new EntryDto()
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
