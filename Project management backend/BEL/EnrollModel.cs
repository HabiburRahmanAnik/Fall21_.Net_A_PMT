using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEL
{
    public class EnrollModel
    {
        public int Id { get; set; }
        public int UId { get; set; }
        public int PId { get; set; }

        public virtual ProjectModel Project { get; set; }
        public virtual UserModel User { get; set; }
    }
}
