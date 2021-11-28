using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IEnrollRepository
    {
        List<User> ProcessingProjectMember(int id);
        List<User> OpenProjectMember(int id);
        List<User> CompleteProjectMember(int id);
    }
}
