using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models
{
    public class RegisterResponseModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public RegisterResponseModel(AppUser user)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email;
        }
    }
}
