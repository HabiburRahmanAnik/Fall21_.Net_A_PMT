using BEL;
using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Project_management.Controllers
{
    [EnableCors("*","*","*")]
    public class UserController : ApiController
    {
        [Route("api/users/login")]
        [HttpPost]
        public UserModel Login(UserModel u)
        {
            return UserServices.Verify(u);
        }
    }
}
