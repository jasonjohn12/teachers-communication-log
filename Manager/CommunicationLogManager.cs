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
        private readonly ICommunicationLogDataAccess _communicationLogDataAccess;

        public CommunicationLogManager(ICommunicationLogDataAccess communicationLogDataAccess)
        {
            _communicationLogDataAccess = communicationLogDataAccess;
        }


        public StudentOutboundDto GetStudentById(int studentId)
        {
            var student = _communicationLogDataAccess.GetStudentAndEntriesByStudentId(studentId);

            if(student == null)
            {
                return new StudentOutboundDto();
            }
            else
            {
                return student;
            }
        }



        public IEnumerable<StudentOutboundDto> GetAllStudents()
        {
            return _communicationLogDataAccess.GetAllStudentsWithEntries();
        }

        public void DeleteStudentById(int studentId)
        {
            _communicationLogDataAccess.DeleteStudentById(studentId);
        }

        public StudentDto StudentToCreate(StudentDto student)
        {
            return _communicationLogDataAccess.CreateStudent(student);
        }

        public IEnumerable<EntryDto> GetAllEntries()
        {
            return _communicationLogDataAccess.RetrieveAllEntries();
        }
    }
}
