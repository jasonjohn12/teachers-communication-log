using System.Threading.Tasks;
using CommunicationLog.API.Models;
using Models.DataAccess;

namespace CommunicationLog.API.Data
{
    public interface IAuthRepository
    {
      Task<User> Register(User user, string password);
      Task<TestUser> Login(string username, string password);
    }
}