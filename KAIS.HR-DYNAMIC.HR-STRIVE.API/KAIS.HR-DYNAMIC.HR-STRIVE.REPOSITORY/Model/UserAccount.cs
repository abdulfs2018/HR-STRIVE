using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY.Model
{
    public class UserAccount
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PasswordSalt { get; set; }
        public UserType UserType { get; set; }

        [ForeignKey("EmployeeId")]
        public Employee Employee { get; set; }
    }
}
