using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserRepo:IUserRepository
    {
        public PeojectManagementEntities db;

        public UserRepo(PeojectManagementEntities db)
        {
            this.db = db;
        }

        public User Verify(string email, string password)
        {
            var data = (from u in  db.Users
                        where u.Email == email && password == u.Password
                        select u).FirstOrDefault();
            
                return data;
        }
    }
}
