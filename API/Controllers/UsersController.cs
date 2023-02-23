using API.Data;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseAPIController
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDTO>>> GetUsers()
        {
            var users = await _repository.GetMembersAsync();

            return Ok(users);
        }

        //[HttpGet("{id}")]
        //public async Task<AppUser> GetUser(int id)
        //{
        //    return await _repository.GetUserById(id);
        //}

        [HttpGet("{username}")]
        public async Task<MemberDTO> GetUserByUsername(string username)
        {
            return await _repository.GetMemberAsync(username);
        }
    }
}
