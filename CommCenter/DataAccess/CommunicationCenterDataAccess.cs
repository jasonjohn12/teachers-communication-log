using Microsoft.Extensions.Configuration;
using Models.DataAccess;
using Models.Outbound;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class CommunicationCenterDataAccess : BaseRepository, ICommunicationCenterDataAccess
    {
        public CommunicationCenterDataAccess(IConfiguration configuration) : base(configuration, "sinkingPiratesDb")
        {

        }
        public StudentDto CreateStudent(StudentDto student)
        {
            var guid = Guid.NewGuid();
            Random rnd = new Random();
            int id = rnd.Next(52);
            var createdStudent = new StudentDto()
            {
                StudentId = id,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Grade = student.Grade

            };
            StudentsDataStore.Current.Students.Add(createdStudent);
            return createdStudent;
        }

        public void DeleteStudentById(int studentId)
        {
            var students = StudentsDataStore.Current.Students;
            students.RemoveAll(r => r.StudentId == studentId);
        }

        public async Task<List<EntryDto>> GetAllEntriesForStudents()
        {
            var query = @"SELECT * FROM Entry";

            var entries = await QueryAsync<EntryDto>(query);
            return entries;
        }

        public async Task<List<StudentOutboundDto>> GetAllStudentsWithEntries()
        {

                var query = @"SELECT * FROM Student";
            
                var students = await QueryAsync<StudentOutboundDto>(query);
            return students;
             

         
           // var students = StudentsDataStore.Current.Students;
            // get entries
            var entries = StudentEntriesDataStore.Current.Entries;
            // figure out how to join entries to student and add the retval

            //var mergedList = students.Select(s => new StudentOutboundDto
            //{
            //    StudentId = s.StudentId,
            //    FirstName = s.FirstName,
            //    LastName = s.LastName,
            //    Grade = s.Grade,
            //    Entries = entries.Where(e => e.StudentId == s.StudentId).ToList()
            //});
            //return mergedList;
            //return await ExecuteAsync(query,
            //    commandType: CommandType.Text);
        }

        public StudentOutboundDto GetStudentAndEntriesByStudentId(int studentId)
        {
            var students = StudentsDataStore.Current.Students;
            var student = students.FirstOrDefault(x => x.StudentId == studentId);
            if (student == null)
            {
                return new StudentOutboundDto();
            }

            var entries = StudentEntriesDataStore.Current.Entries;
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

        public IEnumerable<EntryDto> RetrieveAllEntries()
        {
            return StudentEntriesDataStore.Current.Entries;
        }
    }
}
