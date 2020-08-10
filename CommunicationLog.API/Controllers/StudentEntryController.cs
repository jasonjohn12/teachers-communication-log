using CommunicationLog.API.Models;
using DataAccessLayer;
using Manager;
using Microsoft.AspNetCore.Mvc;
using Models.DataAccess;
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
        private readonly ICommunicationLogManager _communicationLogManager;

        public StudentEntryController(ICommunicationLogManager communicationLogManager)
        {
            _communicationLogManager = communicationLogManager;
        }
        [HttpGet()]
        public IActionResult GetAllEntries()
        {
            var entries = _communicationLogManager.GetAllEntries();

           if (entries == null)
            {
                return NotFound();
            }
            return Ok(entries);
        }
        [HttpGet("students/{studentId}")]
        public IActionResult GetStudentEntriesByStudentId(int studentId)
        {
            var entries = StudentEntriesDataStore.Current.Entries.FindAll(s => s.StudentId == studentId);
            if (entries == null)
            {
                return NotFound();
            }
            return Ok(entries);
        }
        [HttpGet("entry/{entryId}")]
        public IActionResult GetEntryById(int entryId)
        {
            var entry = StudentEntriesDataStore.Current.Entries.Find(x => x.EntryId == entryId);
            if (entry == null)
            {
                return NotFound();
            }

            return Ok(entry);
        }
        //[HttpPost("entry/{studentId}")]
        //public IActionResult AddEntry(EntryDto entryDto, int studentId)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest();
        //    }
        //    Random rnd = new Random();

        //    int id = rnd.Next(52);

        //    var createdEntry = new EntryDto()
        //    {
        //        EntryId = id,
        //        StudentId = studentId,
        //        Contacted = entryDto.Contacted,
        //        DatesContacted = DateTime.Now,
        //        Notes = entryDto.Notes
        //    };

        //    StudentEntryDataStore.Current.Entries.Add(createdEntry);
        //    return StatusCode(201, createdEntry);
        //}

        [HttpDelete("entry/{entryId}")]
        public IActionResult DeleteEntry(int entryId)
        {
            var entryToDelete = StudentEntriesDataStore.Current.Entries.Find(x => x.EntryId == entryId);
            if (entryToDelete == null)
            {
                return NotFound();
            }

            StudentEntriesDataStore.Current.Entries.Remove(entryToDelete);

            return StatusCode(204);
        }
    }
}
