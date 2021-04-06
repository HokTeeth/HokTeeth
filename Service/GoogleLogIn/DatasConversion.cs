using Hok_Teeth.Domain.Dto;
using Hok_Teeth.EF;
using System.Collections.Generic;

namespace Hok_Teeth.Service.GoogleLogIn
{
    public class DatasConversion
    {
        ///<summary>C_Project_M的Table資料塞給對應的Model再傳到前端顯示在行事曆上</summary>
        public List<dto_ProjectM> Datas(List<C_Project_M> datas)
        {
            List<dto_ProjectM> list = new List<dto_ProjectM>();
            foreach (var Q in datas)
            {
                dto_ProjectM Calendardata = new dto_ProjectM()
                {
                    userid = Q.Cptm_CusmId,
                    ProjectName =Q.Cptm_Project_Name,
                    CreateDatetime =Q.Cptm_Create_Datetime
                };
                list.Add(Calendardata);
            }

            return list;
        }
    }
}