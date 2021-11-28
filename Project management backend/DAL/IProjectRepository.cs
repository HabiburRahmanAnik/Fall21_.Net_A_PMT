using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IProjectRepository
    {
        void Add(Project p);
        List<Project> OpenProject();
        List<Project> ProcessingProject();
        List<Project> CompleteProject();

    }
}
