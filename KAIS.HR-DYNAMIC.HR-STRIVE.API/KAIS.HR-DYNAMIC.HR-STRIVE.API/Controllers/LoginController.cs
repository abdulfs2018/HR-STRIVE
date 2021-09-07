using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models;
using KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY.Model;
using KAIS.HR_DYNAMIC.HR_STRIVE.REPOSITORY.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController: Controller
    {

        public LoginController(IHR_STRIVE_Repository repository)
        {
            _repository = repository;
        }

        [HttpGet("ValidateLogin")]
        public async Task<IActionResult> ValidateLogin(string username, string password)
        {
            try
            {
                var data = new ServiceResponse();
                if (!string.IsNullOrEmpty(username) && !string.IsNullOrEmpty(password))
                {
                    LogInDetails logInDetails = new LogInDetails { Username = username, Password = password };
                    data = await _repository.Login(logInDetails);
                }

                return Ok(data);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("CreateNewUser")]
        public async Task<IActionResult> AddNewUser([FromBody] UserAccount User)
        {
            try
            {
                var inserted = await _repository.CreateUserAccount(User);

                return Ok(inserted);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        #region repository
        private readonly IHR_STRIVE_Repository _repository;
        #endregion
    }
}
