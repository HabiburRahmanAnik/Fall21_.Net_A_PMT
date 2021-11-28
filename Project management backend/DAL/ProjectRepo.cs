using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ProjectRepo : IProjectRepository
    {
        public PeojectManagementEntities db;

        public ProjectRepo(PeojectManagementEntities db)
        {
            this.db = db;
        }
        public void Add(Project p)
        {
            db.Projects.Add(p);
            db.SaveChanges();
        }

      

        public List<Project> CompleteProject()
        {
            var project = (from p in db.Projects
                           where p.Status == "complete"
                           select p).ToList();
            return project;
        }

        public List<Project> OpenProject()
        {
            var project = (from p in db.Projects
                           where p.Status == "open"
                           select p).ToList();
            return project;
        }

        public List<Project> ProcessingProject()
        {
            var project = (from p in db.Projects
                           where p.Status == "processing"
                           select p).ToList();
            return project;
        }
    }
}
