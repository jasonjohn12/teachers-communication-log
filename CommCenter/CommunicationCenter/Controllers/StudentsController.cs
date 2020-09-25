using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Manager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.DataAccess;

namespace CommunicationCenter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly ICommunicationCenterManager _communicationCenterManager;
        public StudentsController(ICommunicationCenterManager communicationCenterManager)
        {
            _communicationCenterManager = communicationCenterManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            var students = await _communicationCenterManager.GetAllStudents();
            return Ok(students);

        }

        [HttpGet("{id}")]
        public IActionResult GetStudentById(int id)
        {
            if (id <= 0)
            {
                return NotFound();
            }
            var student = _communicationCenterManager.GetStudentById(id);

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
            var studentToCreate = _communicationCenterManager.StudentToCreate(student);
            return StatusCode(201, studentToCreate);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            _communicationCenterManager.DeleteStudentById(id);
            return StatusCode(204);
        }
    }
}