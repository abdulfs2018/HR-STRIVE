using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON;
using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Helpers.Authentication;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Repository
{
    public class HR_STRIVE_Repository : IHR_STRIVE_Repository
    {

        private HR_STRIVE_DbContext _dbContext;

        public HR_STRIVE_Repository(HR_STRIVE_DbContext context)
        {
            _dbContext = context;
        }

        public async Task<bool> CreateUserAccount(UserAccount user)
        {
            return AddNewUser(user);
        }

        /// <summary>
        /// Validate Users login credentials.
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns>generated token</returns>
        public Task<ServiceResponse> Login(LogInDetails details)
        {
            bool validUser = AuthenticationHelper.CheckDatabaseForLoginCredentials(_dbContext, details.Username, details.Password);
            Token token = null;
            ServiceResponse response = null;
            try
            {
                if (validUser)
                {
                    //generate the token here
                    token = TokenManager.Instance.GenerateToken();
                    var convertedToken = BitConverter.ToString(token.ConvertForSending());

                    response = new ServiceResponse { Success = true, ResponseData = convertedToken };
                    //returns the generated token
                    return Task.FromResult(response);
                }
                //if empty return empty string
                else
                {
                    return Task.FromResult(new ServiceResponse { Success = false, ResponseData = null });
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);

                throw (ex);
            }
        }

        public bool AddNewUser(UserAccount user)
        {
            List<string> salt = new List<string>();
            salt.Add(AuthenticationHelper.GenerateSalt());

            AuthenticationHelper.EncryptPassword(user.Password, salt.ToArray(), out var encryptedPassword);
            //var user = new Users(username, encryptedPassword, null, null, UserType.Standard, salt.FirstOrDefault());

            //change the password with encrypted value. and the password salt
            user.Password = encryptedPassword;
            user.PasswordSalt = salt.FirstOrDefault();

            _dbContext.Add<UserAccount>(user);

            int success = _dbContext.SaveChanges();

            return success > 0;
        }

    }
}
