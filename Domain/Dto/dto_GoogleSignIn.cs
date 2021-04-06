

namespace Hok_Teeth.Domain.Dto
{
    ///<summary>快速登入Gmail(共用資料)</summary>
    public class dto_GoogleSignIn
    {
        ///<summary>登入者信箱帳號</summary>
        public string HokGmailAccount { get; set; }


        ///<summary>登入者姓名</summary>
        public string HokGmailName { get; set; }


        ///<summary>登入者GmailUserID</summary>
        public string HokGmailUserID { get; set; }
    }
}