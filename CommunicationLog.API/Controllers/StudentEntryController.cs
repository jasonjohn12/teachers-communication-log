using CommunicationLog.API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CommunicationLog.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentEntryController : ControllerBase
    {
        [HttpGet("students/{studentId}")]
        public IActionResult GetStudentEntries(int studentId)
        {
            var entries = StudentEntryDataStore.Current.Entries.FindAll(s => s.StudentId == studentId);
            if (entries == null)
            {
                return NotFound();
            }
            return Ok(entries);
        }
        [HttpGet("entry/{entryId}")]
        public IActionResult GetEntryById(int entryId)
        {
            var entry = StudentEntryDataStore.Current.Entries.Find(x => x.EntryId == entryId);
            if (entry == null)
            {
                return NotFound();
            }

            return Ok(entry);
        }
        [HttpPost("entry/{studentId}")]
        public IActionResult AddEntry(StudentsEntryDto entryDto, int studentId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Random rnd = new Random();

            int id = rnd.Next(52);

            var createdEntry = new StudentsEntryDto()
            {
                EntryId = id,
                StudentId = studentId,
                Contacted = entryDto.Contacted,
                DatesContacted = DateTime.Now,
                Notes = entryDto.Notes
            };

            StudentEntryDataStore.Current.Entries.Add(createdEntry);
            return StatusCode(201, createdEntry);
        }

        [HttpDelete("entry/{entryId}")]
        public IActionResult DeleteEntry(int entryId)
        {
            var entryToDelete = StudentEntryDataStore.Current.Entries.Find(x => x.EntryId == entryId);
            if (entryToDelete == null)
            {
                return NotFound();
            }

            StudentEntryDataStore.Current.Entries.Remove(entryToDelete);

            return StatusCode(204);
        }
    }
}
