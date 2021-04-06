using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Hok_Teeth.Domain.Dto
{
    ///<summary>帳密(共用資料)</summary>
    public class dto_Register
    {
        ///<summary>帳號</summary>
        [Required(ErrorMessage = "帳號未輸入")]
        public string HokAccount { get; set; }


        ///<summary>密碼</summary>
        [Required(ErrorMessage = "密碼未輸入")]
        public string HokPassWord { get; set; }


        ///<summary>確認密碼</summary>
        [Compare("HokPassWord", ErrorMessage = "密碼輸入不相符")]
        [Required(ErrorMessage = "密碼未輸入")]
        public string HokCheckPassWord { get; set; }


        ///<summary>(使用者輸入的)圖片驗證碼</summary>
        [Required(ErrorMessage = "驗證碼未輸入")]      
        public string HokVerification { get; set; }


        ///<summary>(正確的)圖片驗證碼</summary>
        [Compare("HokVerification", ErrorMessage="驗證碼輸入不相符")]
        [Required(ErrorMessage = "驗證碼未輸入")]
        public string CheckCanvasID { get; set; }
    }
}