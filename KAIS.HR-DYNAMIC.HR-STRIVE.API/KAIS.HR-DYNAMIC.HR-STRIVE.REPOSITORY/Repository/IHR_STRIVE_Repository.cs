
using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using System.Threading.Tasks;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Repository
{
    public interface IHR_STRIVE_Repository
    {
        Task<ServiceResponse> Login(LogInDetails details);
        Task<bool> CreateUserAccount(UserAccount user);
    }
}
