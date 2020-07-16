using CommunicationLog.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CommunicationLog.API
{
    public class StudentsDataStore
    {
        public static StudentsDataStore Current { get; } = new StudentsDataStore();
        public List<StudentDto> Students { get; set; }

        public StudentsDataStore()
        {
            Students = new List<StudentDto>()
            {
                new StudentDto()
                {
                    StudentId = 1,
                    FirstName = "Jason",
                    LastName = "John",
                    Grade = 98.5m,
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
                     Contacted = false,
                     DatesContacted = DateTime.Now.AddDays(1), //DateTime.Now.ToString(),
                     Notes = "Spoke to Parents. Will make sure Jason will turn in his assignments"
                },

                    }

                },
                   new StudentDto()
                {
                    StudentId = 2,
                    FirstName = "Jimmy",
                    LastName = "John",
                    Grade = 48.5m,
                    Entries = new List<StudentsEntryDto>()
                    {
                    new StudentsEntryDto()
                {
                     StudentId = 2,
                     EntryId = 3,
                     Contacted = true,
                     DatesContacted = DateTime.Now.AddDays(1), //DateTime.Now.ToString(),
                     Notes = "Jimmy sucks"
                }
                    }
                },

            };
        }
    }
}
