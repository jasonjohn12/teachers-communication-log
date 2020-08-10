using Models.DataAccess;
using Models.Outbound;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager
{
    public interface ICommunicationLogManager
    {
        IEnumerable<StudentOutboundDto> GetAllStudents();
        IEnumerable<EntryDto> GetAllEntries();
        StudentOutboundDto GetStudentById(int studentId);
        Models.DataAccess.StudentDto StudentToCreate(Models.DataAccess.StudentDto student);
        void DeleteStudentById(int studentId);
    }
}
