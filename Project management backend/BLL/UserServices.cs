using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BEL;
using DAL;

namespace BLL
{
    public class UserServices
    {
        public static UserModel Verify(UserModel u)
        {
            var config = new MapperConfiguration(c => c.CreateMap<User,UserModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<UserModel>(DataAccessFactory.UserDataAccess().Verify(u.Email,u.Password));
            return data;
        }
    }


}
