using System.ComponentModel.DataAnnotations;

namespace CommunicationLog.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        //[StringLength(8, MinimumLength = 4, ErrorMessage = "You must specifiy a password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}