using System;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY.Model
{
    public class HolidayRequest
    {
        public int Id { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public AmPm AmOrPm { get; set; }
        public bool Approved { get; set; }
        public string ApprovedBy { get; set; }
    }
}