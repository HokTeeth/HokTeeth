using System;
using System.ComponentModel;

namespace Hok_Teeth.Domain.Dto
{
    ///<summary>建立的牙齒專案(共用資料)</summary>     
    public class dto_ProjectM
    {
        ///<summary>每一個互相連動的userid</summary>
        [DisplayName("Cptm_CusmId")]
        public int userid { get; set; }


        ///<summary>專案名稱</summary>
        [DisplayName("Cptm_Project_Name")]
        public string ProjectName { get; set; }


        ///<summary>專案創建時間</summary>
        [DisplayName("Cptm_Create_Datetime")]
        public DateTime CreateDatetime { get; set; }
    }
}