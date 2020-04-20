using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using JobFinder.Business.Services.Interfaces;
using JobFinder.Web.Auth;
using JobFinder.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace JobFinder.Web.Controllers
{
    [ApiController]
    [Route("api/v1/")]
    public class AccountController : Controller
    {
        private readonly ILoginService _loginService;

        public AccountController(ILoginService loginService)
        {
            _loginService = loginService ?? throw new ArgumentNullException(nameof(loginService));
        }

        [AllowAnonymous]
        [HttpPost("login/")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var identity = await GetIdentity(model.Username, model.Password);
            if (identity == null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            var now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.Issuer,
                    audience: AuthOptions.Audience,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LifeTime)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                username = identity.Name
            };

            Response.Cookies.Append("Token", encodedJwt);
            var a = Json(response);
            return a;
        }

        [AllowAnonymous]
        [HttpPost("register/")]
        public async Task<IActionResult> Register(LoginModel model)
        {
            var user = _loginService.Register(model.Username, model.Password);

            if (user == null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            return Ok("successful");
        }


        private async Task<ClaimsIdentity> GetIdentity(string username, string password)
        {
            //var person = await _userService.Login(username, password);

            var user = _loginService.Login(username, password);

            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, "user"),
                    new Claim("UserId", user.Id.ToString()),
                };

                var claimsIdent = new ClaimsIdentity(
                    claims,
                    "Token",
                    ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType
                    );

                return claimsIdent;
            }

            return null;
        }
    }
}