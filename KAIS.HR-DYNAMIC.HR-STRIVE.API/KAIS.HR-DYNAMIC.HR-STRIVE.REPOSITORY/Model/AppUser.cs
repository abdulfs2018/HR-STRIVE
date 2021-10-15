using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model
{
    public class AppUser : IdentityUser
    {
        // Add additional profile data for application users by adding properties to this class
        public string Name { get; set; }

        [ForeignKey("EmployeeId")]
        public Employee Employee { get; set; }
    }
}
