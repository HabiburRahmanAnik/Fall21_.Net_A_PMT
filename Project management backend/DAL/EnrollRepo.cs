using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class EnrollRepo : IEnrollRepository
    {
        public PeojectManagementEntities db;

        public EnrollRepo(PeojectManagementEntities db)
        {
            this.db = db;
        }
        public List<User> CompleteProjectMember(int id)
        {
            throw new NotImplementedException();
        }

        public List<User> OpenProjectMember(int id)
        {
            throw new NotImplementedException();
        }

        public List<User> ProcessingProjectMember(int id)
        {
            throw new NotImplementedException();
        }
    }
}
