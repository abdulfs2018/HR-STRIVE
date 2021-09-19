using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE
{
    public class HR_STRIVE_DbContext: IdentityDbContext<AppUser>
    {
        public HR_STRIVE_DbContext(DbContextOptions<HR_STRIVE_DbContext> options)
            :base(options)
        {

        }

        public DbSet<Address> Address { get; set; }
        public DbSet<HolidayRequest> HolidayRequest { get; set; }
        public DbSet<HolidayDetails> HolidayDetails { get; set; }
        public DbSet<Metricz> Metricz { get; set; }
        public DbSet<TimeSheet> TimeSheets { get; set; }
        public DbSet<Employee> Employee { get; set; }
        //public DbSet<UserAccount> UserAccounts { get; set; }
    }
}
