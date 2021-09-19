namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model
{
    public class HolidayDetails
    {
        public int Id { get; set; }
        public string Entitled { get; set; }
        public string Remaining { get; set; }
        public string CarryOver { get; set; }
        public HolidayRequest HolidayRequest { get; set; }
    }
}