
using IdentityServer4.Events;
using IdentityServer4.Services;
using IdentityServer4.Stores;
using KAIS.HR_DYNAMIC.HR_STRIVE.API.Authentication.Models;
using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON;
using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Models;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
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


        /// <summary>
        /// Handle postback from username/password login
        /// </summary>
        [HttpPost("Login")]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginInputModel model)
        {
            try
            {
                // check if we are in the context of an authorization request
                var context = await _interaction.GetAuthorizationContextAsync(model.ReturnUrl);
                Token token = null;
                ServiceResponse response = null;

                // validate username/password
                var user = await _userManager.FindByNameAsync(model.Username);
                if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    token = TokenManager.Instance.GenerateToken();
                    var convertedToken = BitConverter.ToString(token.ConvertForSending());

                    response = new ServiceResponse { Success = true, ResponseData = convertedToken };
                }


                return Ok(response);
            }catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestModel model)
        {
            var user = new AppUser { UserName = model.Email, Name = model.Name, Email = model.Email };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("userName", user.UserName));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("name", user.Name));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("email", user.Email));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("role", UserType.Standard.ToString()));

            return Ok(new RegisterResponseModel(user));
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
