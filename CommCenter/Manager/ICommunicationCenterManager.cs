using Models.DataAccess;
using Models.Outbound;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager
{
    public interface ICommunicationCenterManager
    {
        Task<List<StudentOutboundDto>> GetAllStudents();
        //Task<List<EntryDto>> GetAllEntries();
        StudentOutboundDto GetStudentById(int studentId);
        StudentDto StudentToCreate(Models.DataAccess.StudentDto student);
        void DeleteStudentById(int studentId);
    }
}
