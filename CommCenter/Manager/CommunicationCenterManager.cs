using DataAccess;
using Models.DataAccess;
using Models.Outbound;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manager
{
    public class CommunicationCenterManager : ICommunicationCenterManager
    {
        private readonly ICommunicationCenterDataAccess _communicationCenterDataAccess;

        public CommunicationCenterManager(ICommunicationCenterDataAccess communicationCenterDataAccess)
        {
            _communicationCenterDataAccess = communicationCenterDataAccess;
        }


        public StudentOutboundDto GetStudentById(int studentId)
        {
            var student = _communicationCenterDataAccess.GetStudentAndEntriesByStudentId(studentId);

            if (student == null)
            {
                return new StudentOutboundDto();
            }
            else
            {
                return student;
            }
        }



        public async Task<List<StudentOutboundDto>> GetAllStudents()
        {
            var students = await _communicationCenterDataAccess.GetAllStudentsWithEntries();
            var entries = await _communicationCenterDataAccess.GetAllEntriesForStudents();
            var mergedList = students.Select(s => new StudentOutboundDto
            {
                StudentId = s.StudentId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                Grade = s.Grade,
                Entries = entries.Where(e => e.StudentId == s.StudentId).ToList()
            });
            return mergedList.ToList();
            //return students;
        }

        public void DeleteStudentById(int studentId)
        {
            _communicationCenterDataAccess.DeleteStudentById(studentId);
        }

        public StudentDto StudentToCreate(StudentDto student)
        {
            return _communicationCenterDataAccess.CreateStudent(student);
        }

        //public IEnumerable<EntryDto> GetAllEntries()
        //{
        //    return _communicationCenterDataAccess.RetrieveAllEntries();
        //}
    }
}
