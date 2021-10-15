using System.Collections.Generic;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public Address Address { get; set; }
        public HolidayDetails HolidayDetails { get; set; }
        public IEnumerable<Metricz> UserPerformanceReviews { get; set; }
        public TimeSheet TimeSheet { get; set; }

    }
}