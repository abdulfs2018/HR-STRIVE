using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.COMMON
{
    public sealed class TokenManager
    {
        public static readonly Lazy<TokenManager> lazy = new Lazy<TokenManager>();

        public static TokenManager Instance
        {
            get
            {
                return lazy.Value;
            }
        }

        public List<Token> TokenList { get; set; } = new List<Token>();

        public TokenManager()
        {

        }

        public Token GenerateToken()
        {
            Token newToken = new Token();

            TokenList.Add(newToken);

            return newToken;
        }

        public bool VerifyToken(Guid tokenId)
        {
            bool ret = false;

            Token token = TokenList.FirstOrDefault(x => x.ID == tokenId);
            if (token != null)
            {
                token.ResetActiveTime();

                ret = true;
            }

            return ret;
        }

        public void PurgeTokens(int timeOutMinutes)
        {
            List<Token> toRemove = new List<Token>();
            foreach (Token token in TokenList)
            {
                TimeSpan time = DateTime.Now - token.LastActiveTime;

                int minutesSinceActive = time.Minutes;

                if (minutesSinceActive > timeOutMinutes)
                {
                    toRemove.Add(token);
                }
            }

            foreach (Token token in toRemove)
            {
                TokenList.Remove(token);
            }
        }

        public List<Token> GetExpiredTokens(int timeOutMinutes)
        {
            List<Token> expired = new List<Token>();
            foreach (Token token in TokenList)
            {
                TimeSpan time = DateTime.Now - token.LastActiveTime;

                int minutesSinceActive = time.Minutes;

                if (minutesSinceActive > timeOutMinutes)
                {
                    expired.Add(token);
                }
            }
            return expired;
        }

        public Token DecodeData(byte[] data)
        {
            int dataSeperatorIndex = 16;

            DateTime time = DateTime.FromBinary(BitConverter.ToInt64(data, dataSeperatorIndex));

            byte[] idByte = new byte[dataSeperatorIndex];
            for (int i = 0; i < dataSeperatorIndex; i++)
            {
                idByte[i] = data[i];
            }

            Guid id = new Guid(idByte);

            return new Token(id, time);
        }
    }
}
