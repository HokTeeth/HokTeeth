using Hok_Teeth.EF;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hok_Teeth.Domain.Helpers
{
    public class _dtsSelect_Calendar
    {
        ///<summary>撈取C_Project_M內有幾筆建好的專案(CusmId要一樣的)</summary>
        public List<C_Project_M> calendar(string userid)
        {
            int intuserid = int.Parse(userid);
            using (HokTeethEntities UserMailDB = new HokTeethEntities())
            {
                var Q = (from q in UserMailDB.C_Project_M
                         where q.Cptm_CusmId == intuserid
                         select q).ToList();

                return Q;
            }
        }
    }
}