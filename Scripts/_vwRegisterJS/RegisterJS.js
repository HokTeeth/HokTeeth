//驗證圖形碼是否相符
$("#BtnSubmit").on("click", function (e) {

    var Account = $("#Account").val();
    var PassWord = $("#PassWord").val();
    var CheckPassWord = $("#CheckPassWord").val();
    var CanvasIDforCheck = $("#CanvasIDforCheck").val();
    var Verification = $("#Verification").val();

    //欄位是否為空
    if (Account == "" || PassWord == "" || CheckPassWord == "" || Verification == "" ) {
        alert("欄位不能為空");
        return false;
    }

    //驗證碼
    if (CanvasIDforCheck != Verification) {
        alert("驗證碼輸入錯誤");
        return false;
    }

    e.preventdefault();//防止Enter送出表單/以及其他DOM綁定的送出
    $("#FormSubmit").submit();
});