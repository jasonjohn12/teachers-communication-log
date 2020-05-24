using System;
using System.Threading.Tasks;
using CommunicationLog.API.Data;
using CommunicationLog.API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CommunicationLog.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AuthController : ControllerBase
    {
        private IConfiguration _config;
        private IAuthRepository _repo;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }
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
            var userFromRepo = await _repo.Login(userforLogin.Username.ToLower(), userforLogin.Password);

    
            return Ok(userFromRepo);
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