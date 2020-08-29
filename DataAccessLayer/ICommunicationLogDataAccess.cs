using Models.DataAccess;
using Models.Outbound;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer
{
    public interface ICommunicationLogDataAccess
    {
        StudentOutboundDto GetStudentAndEntriesByStudentId(int studentId);
        IEnumerable<StudentOutboundDto> GetAllStudentsWithEntries();
        void DeleteStudentById(int studentId);
        StudentDto CreateStudent(StudentDto student);
        IEnumerable<EntryDto> RetrieveAllEntries();
    }
}
