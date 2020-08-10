using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer;
using Models.DataAccess;
using Models.Outbound;

namespace Manager
{
    public class CommunicationLogManager : ICommunicationLogManager
    {


        public StudentOutboundDto GetStudentById(int studentId)
        {
            var students = DataAccessLayer.StudentsDataStore.Current.Students;
            var student = students.FirstOrDefault(x => x.StudentId == studentId);

            var entries = DataAccessLayer.StudentEntriesDataStore.Current.Entries;
            var studentToReturn = new StudentOutboundDto()
            {
                StudentId = student.StudentId,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Grade = student.Grade,
                Entries = entries.Where(e => e.StudentId == student.StudentId).ToList()
            };
            return studentToReturn;

        }



        public IEnumerable<StudentOutboundDto> GetAllStudents()
        {
            var students = DataAccessLayer.StudentsDataStore.Current.Students;
            Models.Outbound.StudentOutboundDto retVal;

            // get entries
            var entries = DataAccessLayer.StudentEntriesDataStore.Current.Entries;
            // figure out how to join entries to student and add the retval

            var mergedList = students.Select(s => new StudentOutboundDto
            {
                StudentId = s.StudentId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                Grade = s.Grade,
                Entries = entries.Where(e => e.StudentId == s.StudentId).ToList()
            });

            Console.WriteLine("students", mergedList);


            return mergedList;
        }

        public void DeleteStudentById(int studentId)
        {
            var students = DataAccessLayer.StudentsDataStore.Current.Students;
            students.RemoveAll(r => r.StudentId == studentId);
        }

        public Models.DataAccess.StudentDto StudentToCreate(Models.DataAccess.StudentDto student)
        {
            var guid = Guid.NewGuid();
            Random rnd = new Random();
            int id = rnd.Next(52);
            var createdStudent = new Models.DataAccess.StudentDto()
            {
                StudentId = id,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Grade = student.Grade
            };

            DataAccessLayer.StudentsDataStore.Current.Students.Add(createdStudent);
            return createdStudent;
        }

        public IEnumerable<EntryDto> GetAllEntries()
        {
            return StudentEntriesDataStore.Current.Entries;
        }
    }
}
