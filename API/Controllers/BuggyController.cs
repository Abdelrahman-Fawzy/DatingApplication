using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class BuggyController : BaseAPIController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("Auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret message";
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            string? users = _context.Users.Find(-1).ToString();

            return users;

        }

        [HttpGet("not-found")]
        public ActionResult<string> GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("This Is A Bad Request");
        }
    }
}
