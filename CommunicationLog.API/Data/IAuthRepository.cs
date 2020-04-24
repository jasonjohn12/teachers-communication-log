using System.Threading.Tasks;
using CommunicationLog.API.Models;

namespace CommunicationLog.API.Data
{
    public interface IAuthRepository
    {
      Task<User> Register(User user, string password);
      Task<TestUser> Login(string username, string password);
    }
}