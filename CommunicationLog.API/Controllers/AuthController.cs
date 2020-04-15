using System;
using System.Threading.Tasks;
using CommunicationLog.API.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace CommunicationLog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userforLogin)
        {
            System.Console.WriteLine("login", userforLogin.Username);
            if(String.IsNullOrEmpty(userforLogin.Username ))
            {
                return BadRequest("Username is required");
            };
            if(String.IsNullOrEmpty(userforLogin.Password ))
            {
                return BadRequest("Password is required");
            };
    
            return Ok(new {
                id = 1,
                firstName = "Jason",
                lastName = "john",
                email = "test@test.com"
            });
        }

         [HttpPost("Register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegister)
        {  
            if(ModelState.IsValid)
            {
                return StatusCode(201);
            }
            return BadRequest();
        }
         [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {  

            return Ok(new {});
        }
    }
}