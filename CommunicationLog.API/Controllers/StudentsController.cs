using CommunicationLog.API.Models;
using Microsoft.AspNetCore.Mvc;
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
        [HttpGet]
        public IActionResult GetStudents()
        {
            return Ok(StudentsDataStore.Current.Students);
        }
       
       [HttpGet("{id}")]
        public IActionResult GetStudentById(int id)
        {
            var studentToReturn = StudentsDataStore.Current.Students.FirstOrDefault(s => s.StudentId == id);

            if (studentToReturn == null)
            {
                return NotFound();
            }
            return Ok(studentToReturn);
        }

        [HttpPost]
        public IActionResult AddStudent(StudentDto student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var guid = Guid.NewGuid();
            Random rnd = new Random();
       
            int id = rnd.Next(52);
            var createdStudent = new StudentDto()
            {
                StudentId = id,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Grade = 65
            };
            StudentsDataStore.Current.Students.Add(createdStudent);
           return StatusCode(201);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var student = StudentsDataStore.Current.Students.Find(x => x.StudentId == id);
            if(student == null)
            {
                return NotFound();
            };

            StudentsDataStore.Current.Students.Remove(student);
            return StatusCode(204);
        }
    }
}
