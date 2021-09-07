using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models
{
    public class LogInDetails
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public LogInDetails()
        {

        }

        public LogInDetails(string username, string password)
        {
            Username = username;
            Password = password;
        }
    }
}
