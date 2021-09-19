namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model
{
    public class Address
    {
        public int Id { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public CountryRegion CountryRegion { get; set; }
    }
}