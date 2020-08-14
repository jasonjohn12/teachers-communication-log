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

        [HttpGet("{id}")]
        public IActionResult GetStudentById(int id)
        {
            if(id <= 0)
            {
                return NotFound();
            }
            var student = _communicationLogManager.GetStudentById(id);

            if (student.StudentId == 0) return NotFound();
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
