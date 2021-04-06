using System.Web.Mvc;

namespace Hok_Teeth.Controllers
{
    ///<summary></summary>
    ///<returns></returns>
    ///<param name=""></param>
    public class Hok_TeethController : Controller
    {

        ///<summary>首頁 : 登入頁面</summary>
        public ActionResult Hok_SignIn()
        {
            return View();
        }


        ///<summary>註冊頁面</summary>
        public ActionResult Hok_Register()
        {
            return View();
        }


        ///<summary>清單頁面(目錄搜尋)</summary>
        public ActionResult Hok_ListPage()
        {
            return View();
        }

        ///<summary>上傳牙齒專案頁面</summary>
        public ActionResult Hok_UploadTeeth()
        {
            return View();
        }

        ///<summary>清單頁面(行事曆)</summary>
        public ActionResult Hok_CalendarPage()
        {
            return View();
        }

        ///<summary>設定頁面</summary>
        public ActionResult Hok_setup()
        {
            return View();
        }

        ///<summary>Hok 錯誤頁面</summary>
        public ActionResult Hok_FailView()
        {
            return View();
        }

    }
}