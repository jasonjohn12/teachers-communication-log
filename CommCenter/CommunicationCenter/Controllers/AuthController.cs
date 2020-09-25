using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace CommunicationCenter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLogin userForLogin)
        {
            if (String.IsNullOrEmpty(userForLogin.Username))
            {
                return BadRequest("Username is required");
            };
            if (String.IsNullOrEmpty(userForLogin.Password))
            {
                return BadRequest("Password is required");
            }

            var testUser = new
            {
                Id = 1,
                UserName = "jjohn",
                FirstName = "Jason",
                LastName = "John",
                Email = "test@test.com"
            };
            return Ok(testUser);
        }
    }
}