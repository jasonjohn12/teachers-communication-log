using Models.DataAccess;
using Models.Outbound;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public interface ICommunicationCenterDataAccess
    {
        StudentOutboundDto GetStudentAndEntriesByStudentId(int studentId);
        Task<List<StudentOutboundDto>> GetAllStudentsWithEntries();
        Task<List<EntryDto>> GetAllEntriesForStudents();
        void DeleteStudentById(int studentId);
        StudentDto CreateStudent(StudentDto student);
        IEnumerable<EntryDto> RetrieveAllEntries();
    }
}
