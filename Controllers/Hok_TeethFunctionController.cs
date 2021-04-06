using Google.Apis.Auth;
using Hok_Teeth.Domain.Helpers;
using Hok_Teeth.Service.GoogleLogIn;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Mvc;

namespace Hok_Teeth.Controllers
{
    public class Hok_TeethFunctionController : Controller
    {

        ///<summary>NLog</summary>
        private NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        public Hok_TeethFunctionController()
        {
            
        }


        ///<summary>快速登入Gmail</summary>
        ///<param name="id_token">使用者加密過的GoogleID</param>
        ///<param name="Email">使用者信箱</param>
        [HttpPost]
        public async Task<ActionResult> Hok_GmailLogIn(string id_token, string Email)
        {          
            string msg = "";
            try
            {
                GoogleJsonWebSignature.Payload payload = null;

                payload = await GoogleJsonWebSignature.ValidateAsync(id_token, new GoogleJsonWebSignature.ValidationSettings()
                {
                    //要驗證的client id，把自己申請的Client ID填進去
                    Audience = new List<string>() { WebConfigurationManager.AppSettings["Google_clientId_forLogin"] }
                });

                if (payload == null)
                {
                    logger.Debug(" Token錯誤 : " + payload);
                    return Content("TokenFail");
                }

                //取得Google_user_id
                string user_id = payload.Subject;

                //先驗證是否是跟後台申請過的登入帳號相符 資料庫內先寫死資料
                bool IsGmail = new _dtsSelect_GoogleMail().Select(Email, user_id);
                if (!IsGmail)
                {
                    logger.Debug(" Gmail沒申請過，帳號是 : " + Email);
                    return Content("GmailFail");
                }

                //取出流水號userid傳到下一頁
                string id = new _dtsSelect_GoogleMail().UserID(Email).ToString();
                return Content(id);
            }
            catch (Google.Apis.Auth.InvalidJwtException ex)
            {
                msg = ex.Message;
            }
            catch (Newtonsoft.Json.JsonReaderException ex)
            {
                msg = ex.Message;
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            //這裡的msg把它寫進Log內
            logger.Debug(" Catch抓到的錯誤 : " + msg);
            return Content("CatchFail");
        }


        ///<summary>行事曆一進頁面透過userid流水號撈目前有幾個專案(進去主TABLE撈)</summary>
        ///<param name="userid">每一個Table傳遞間互動的userid</param>
        [HttpPost]
        public ActionResult Hok_Calendar(string userid)
        {
            try
            {
                logger.Debug(" userid : " + userid);
                var datas = new _dtsSelect_Calendar().calendar(userid);
                var datatojson = new DatasConversion().Datas(datas);
                string datasjson = JsonConvert.SerializeObject(datatojson);
                return Content(datasjson);               
            }
            catch (Exception e)
            {
                logger.Debug(" Catch錯誤 : " + e.Message.ToString());
                return Content("CatchFail");
            }           
        }
    }
}