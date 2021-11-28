using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DataAccessFactory
    {
        static PeojectManagementEntities db;

        static DataAccessFactory()
        {
            db = new PeojectManagementEntities();
        }

        public static IUserRepository UserDataAccess()
        {
            return new UserRepo(db);
        }

        public static IProjectRepository ProjectDataAccess()
        {
            return new ProjectRepo(db);
        }
    }
}
