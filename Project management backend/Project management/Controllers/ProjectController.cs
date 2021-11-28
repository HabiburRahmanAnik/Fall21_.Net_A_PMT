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
    public class ProjectController : ApiController
    {
        

        [Route("api/projects/add")]
        [HttpPost]
        public void Add(ProjectModel p)
        {
            ProjectServices.Add(p);
        }


        [Route("api/projects/openProject")]
        [HttpGet]
        public List<ProjectModel> OpenProject()
        {
            return ProjectServices.OpenProject();
        }


        [Route("api/projects/CompleteProject")]
        [HttpGet]
        public List<ProjectModel> CompleteProject()
        {
            return ProjectServices.CompleteProject();
        }


        [Route("api/projects/ProcessingProject")]
        [HttpGet]
        public List<ProjectModel> ProcessingProject()
        {
            return ProjectServices.ProsessingProject();
        }
    }
}
