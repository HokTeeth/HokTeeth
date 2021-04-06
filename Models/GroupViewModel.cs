using Hok_Teeth.Domain.Dto;


namespace Hok_Teeth.Models
{
    ///<summary>ViewModel集合(把所有不管共用區還是自己的ViewModel丟進這裡)</summary>
    public class GroupViewModel
    {
        ///<summary>註冊資料</summary>
        public dto_Register dtoRegister { get; set; }
    }
}