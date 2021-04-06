//一進頁面把圖片Load出來
window.onload = function () {
    showImg();
}


//圖形驗證碼圖案直接按可以重新整理方法
$("#HokCanvas").on("click", function () {
    showImg();
});


//圖形驗證碼重新整理方法
//圖形變更的Button : onclick
$("#ImgReload").on("click", function () {
    showImg();
});