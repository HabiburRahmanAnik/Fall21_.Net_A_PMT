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
    public class ProjectServices
    {
        public static List<ProjectModel> OpenProject()
        {
            var config = new MapperConfiguration(c => c.CreateMap<Project, ProjectModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<ProjectModel>>(DataAccessFactory.ProjectDataAccess().OpenProject());
            return data;
        }

        public static List<ProjectModel> CompleteProject()
        {
            var config = new MapperConfiguration(c => c.CreateMap<Project, ProjectModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<ProjectModel>>(DataAccessFactory.ProjectDataAccess().CompleteProject());
            return data;
        }

        public static List<ProjectModel> ProsessingProject()
        {
            var config = new MapperConfiguration(c => c.CreateMap<Project, ProjectModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<ProjectModel>>(DataAccessFactory.ProjectDataAccess().ProcessingProject());
            return data;
        }

        public static void Add(ProjectModel c)
        {
            var config = new MapperConfiguration(cs => cs.CreateMap<ProjectModel, Project>());
            var mapper = new Mapper(config);
            var data = mapper.Map<Project>(c);
            DataAccessFactory.ProjectDataAccess().Add(data);
        }
    }
}
