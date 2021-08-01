using KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY
{
    public class HR_STRIVE_DbContext: DbContext
    {
        public HR_STRIVE_DbContext(DbContextOptions options)
            :base(options)
        {

        }

        public DbSet<Address> Address { get; set; }
        public DbSet<HolidayRequest> HolidayRequest { get; set; }
        public DbSet<HolidayDetails> HolidayDetails { get; set; }
        public DbSet<Metricz> Metricz { get; set; }
        public DbSet<TimeSheet> TimeSheets { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<UserAccount> UserAccounts { get; set; }
        

    }
}
