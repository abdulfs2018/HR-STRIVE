using IdentityServer4.Services;
using IdentityServer4.Stores;
using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Repository;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {

        public LoginController(SignInManager<AppUser> signInManager, UserManager<AppUser> userManager, IIdentityServerInteractionService interaction, IAuthenticationSchemeProvider schemeProvider, IClientStore clientStore, IEventService events)
        {
            _userManager = userManager;
            _interaction = interaction;
            _schemeProvider = schemeProvider;
            _clientStore = clientStore;
            _events = events;
            _signInManager = signInManager;
        }

        //[HttpGet("ValidateLogin")]
        //public async Task<IActionResult> ValidateLogin(string username, string password)
        //{
        //    try
        //    {
        //        var data = new ServiceResponse();
        //        if (!string.IsNullOrEmpty(username) && !string.IsNullOrEmpty(password))
        //        {
        //            LogInDetails logInDetails = new LogInDetails { Username = username, Password = password };
        //            data = await _repository.Login(logInDetails);
        //        }

        //        return Ok(data);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex);
        //    }
        //}

        //[HttpPost("CreateNewUser")]
        //public async Task<IActionResult> AddNewUser([FromBody] UserAccount User)
        //{
        //    try
        //    {
        //        var inserted = await _repository.CreateUserAccount(User);

        //        return Ok(inserted);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex);
        //    }
        //}

        /// <summary>
        /// Handle postback from username/password login
        /// </summary>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginInputModel model)
        {


            return Ok();
        }


        #region repository
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly IIdentityServerInteractionService _interaction;
        private readonly IAuthenticationSchemeProvider _schemeProvider;
        private readonly IClientStore _clientStore;
        private readonly IEventService _events;
        #endregion
    }
}
