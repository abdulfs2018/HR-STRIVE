using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON;
using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Helpers.Authentication;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Repository
{
    public class HR_STRIVE_Repository : IHR_STRIVE_Repository
    {

        private HR_STRIVE_DbContext _dbContext;

        public HR_STRIVE_Repository(HR_STRIVE_DbContext context)
        {
            _dbContext = context;
        }
    }
}
