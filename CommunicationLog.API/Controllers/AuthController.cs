using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CommunicationLog.API.Data;
using CommunicationLog.API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

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

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
            new Claim(ClaimTypes.Name, userFromRepo.UserName), 
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SUPERSECRETSTUFF"));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = credentials
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new{
                token = tokenHandler.WriteToken(token),
                user = userFromRepo
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