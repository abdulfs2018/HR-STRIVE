using System;
using System.Linq;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.COMMON
{
    public class Token
    {
        public Guid ID { get; set; }
        public DateTime LastActiveTime { get; set; }

        public Token()
        {
            ID = Guid.NewGuid();
            LastActiveTime = DateTime.Now;
        }

        public Token(Guid id, DateTime lastActive)
        {
            ID = id;
            LastActiveTime = lastActive;
        }

        public void ResetActiveTime()
        {
            LastActiveTime = DateTime.Now;
        }

        public byte[] ConvertForSending()
        {
            byte[] time = BitConverter.GetBytes(LastActiveTime.ToBinary());

            string token = Convert.ToBase64String(ID.ToByteArray().ToArray().Concat(time).ToArray());

            return Convert.FromBase64String(token);
        }

    }
}