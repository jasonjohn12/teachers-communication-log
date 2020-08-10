using CommunicationLog.API.Models;
using Manager;
using Microsoft.AspNetCore.Mvc;
using Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;

namespace CommunicationLog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly ICommunicationLogManager _communicationLogManager;
        public StudentsController(ICommunicationLogManager communicationLogManager)
        {
            _communicationLogManager = communicationLogManager;
        }

        [HttpGet]
        public IActionResult GetStudents()
        {
            var students = _communicationLogManager.GetAllStudents();
            return Ok(students);
 
        }

        //[HttpGet("entries")]
        //public IActionResult GetStudentsWithEntries()
        //{
        //    return Ok(StudentsDataStore.Current.Students);
        //}
        [HttpGet("{id}")]
        public IActionResult GetStudentById(int id)
        {
            var student = _communicationLogManager.GetStudentById(id);

            if (student == null) return NotFound();
            return Ok(student);
        }

        [HttpPost]
        public IActionResult AddStudent(StudentDto student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var studentToCreate = _communicationLogManager.StudentToCreate(student);
            return StatusCode(201, studentToCreate);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            _communicationLogManager.DeleteStudentById(id);
            return StatusCode(204);
        }
    }
}
