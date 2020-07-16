using CommunicationLog.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CommunicationLog.API
{
    public class StudentsWithEntriesDataStore
    {
        public static StudentsWithEntriesDataStore Current { get; } = new StudentsWithEntriesDataStore();
        public List<StudentDto> Students { get; set; }

        public StudentsWithEntriesDataStore()
        {
            Students = new List<StudentDto>()
            {
                new StudentDto()
                {
                    StudentId = 1,
                    FirstName = "Jason",
                    LastName = "John",
                    Grade = 98.5m
                           

                },
                   new StudentDto()
                {
                    StudentId = 2,
                    FirstName = "Jimmy",
                    LastName = "John",
                    Grade = 48.5m,
                    
                },

            };
        }
    }
}
