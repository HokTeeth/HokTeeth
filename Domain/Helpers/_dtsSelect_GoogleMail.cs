using Hok_Teeth.EF;
using System.Linq;

namespace Hok_Teeth.Domain.Helpers
{
    public class _dtsSelect_GoogleMail
    {
        ///<summary>快速登入Gmail(進去資料庫撈看這組帳號有沒有跟後台註冊過)</summary>
        public bool Select(string Gmail, string user_id)
        {
            using (HokTeethEntities UserMailDB = new HokTeethEntities())
            {
                var Q = (from q in UserMailDB.C_User_M
                        where q.Cusm_Gmail == Gmail
                        select q).FirstOrDefault();

                //判斷Gmail帳號是否在後台已經註冊過
                if (Q==null)//表示還沒在後台註冊過的Gmail帳號
                {
                    return false;
                }

                //判斷Gmail帳號的GoogleID是否已經寫入過資料庫
                if (Q.Cusm_GoogleId!=null)//若有則直接回傳True
                {
                    return true;
                }

                //若沒有則塞值進去資料庫
                Q.Cusm_GoogleId = user_id;
                UserMailDB.SaveChanges();
            }
            return true;
        }


        ///<summary>快速登入Gmail(進去資料庫撈userid流水號出來 要傳到下一頁的)</summary>
        public int UserID(string Gmail)
        {
            using (HokTeethEntities UserMailDB = new HokTeethEntities())
            {
                var Q = (from q in UserMailDB.C_User_M
                         where q.Cusm_Gmail == Gmail
                         select q).FirstOrDefault();

                int UserIDs = Q.Cusm_Id;
                return UserIDs;
            }
        }
    }
}