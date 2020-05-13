using System.Threading.Tasks;
using CommunicationLog.API.Models;

namespace CommunicationLog.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        public async Task<TestUser> Login(string username, string password)
        {
            // essentially will get user from database
            var testUser = new TestUser {
                Id = 1,
                UserName = "jjohn",
                FirstName = "Jason",
                LastName = "John",
                Email = "test@test.com"
            };
            return testUser;
        }

        public async Task<User> Register(User user, string password)
        {
            throw new System.NotImplementedException();
        }
    }
}