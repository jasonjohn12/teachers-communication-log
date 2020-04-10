using System.Threading.Tasks;
using CommunicationLog.API.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace CommunicationLog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public async Task<IActionResult> Login(UserForLoginDto userforLogin)
        {
            
        }
    }
}