using KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY.Helpers.Authentication
{
    public class AuthenticationHelper
    {

        public static bool AddNewUser(UserAccount user, HR_STRIVE_DbContext context)
        {
            List<string> salt = new List<string>();
            salt.Add(GenerateSalt());

            EncryptPassword(user.Password, salt.ToArray(), out var encryptedPassword);
            //var user = new Users(username, encryptedPassword, null, null, UserType.Standard, salt.FirstOrDefault());

            //change the password with encrypted value. and the password salt
            user.Password = encryptedPassword;
            user.PasswordSalt = salt.FirstOrDefault();

            context.Add<UserAccount>(user);

            int success = context.SaveChanges();

            return success > 0;
        }

        /// <summary>
        /// Checks the login credentials being parsed in by hashing newly entered
        /// </summary>
        /// <param name="context"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public static bool CheckDatabaseForLoginCredentials(HR_STRIVE_DbContext context, string username, string password)
        {
            var loginInfo = context.UserAccounts.Where(e => e.UserName.Equals(username)).ToList();
            bool validLogin = false;

            loginInfo.ForEach(e =>
            {
                List<string> storedSalt = new List<string>();
                storedSalt.Add(e.PasswordSalt);
                EncryptPassword(password, storedSalt.ToArray(), out string encryptedLoginPassword);

                if (encryptedLoginPassword.Equals(e.Password))
                {
                    validLogin = true;
                    return;
                }
            });

            return validLogin;
        }

        /// <summary>
        /// Encrypt user password and output the encrypted hash
        /// </summary>
        /// <param name="dataToEncrypt"></param>
        /// <param name="salt"></param>
        /// <param name="encryptedData"></param>
        public static void EncryptPassword(string dataToEncrypt, string[] salt, out string encryptedData)
        {
            // Convert the plain string pwd into bytes
            byte[] plainTextBytes = Encoding.Unicode.GetBytes(dataToEncrypt);
            // Append salt to pwd before hashing
            byte[] combinedBytes = new byte[plainTextBytes.Length + salt.Length];
            Buffer.BlockCopy(plainTextBytes, 0, combinedBytes, 0, plainTextBytes.Length);
            //Buffer.BlockCopy(salt, 0, combinedBytes, plainTextBytes.Length, salt.Length);

            // Create hash for the pwd+salt
            HashAlgorithm hashAlgo = new SHA256Managed();
            byte[] hash = hashAlgo.ComputeHash(combinedBytes);

            //output the hash value
            encryptedData = BitConverter.ToString(hash);
        }


        /// <summary>
        /// Generates random salt value
        /// </summary>
        /// <returns></returns>
        public static string GenerateSalt()
        {
            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
            byte[] buffer = new byte[32];
            rng.GetBytes(buffer);

            var salt = BitConverter.ToString(buffer);

            return salt;
        }
    }
}
