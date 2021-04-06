//圖形驗證碼的製作(共用)

var arr = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

function getCanvasImg() {
    var temp = "";
    for (var i = 0; i <= 3; i++) {
        var M = Math.round(Math.random() * 30) + Math.round(Math.random() * 5);
        temp += arr[M];
    }
    $("#CanvasIDforCheck").val(temp);//塞正確的驗證碼的值 一起傳入後端去驗證是否輸入相符
    return temp;
    
}

var img = new Image();
img.src = "../Content/Image/1.png";


//驗證碼背景模糊製作方法 :
function getXsize() {
    return Math.round(Math.random()*100);
}

function getYsize() {
    return Math.round(Math.random() * 50) + Math.round(Math.random() * 20);
}

function getLsize() {
    var L = Math.round(Math.random() * 20);
    return L;
}

//顯示做好的驗證碼圖片 : onclick去觸發
function showImg() {
    var canvas = document.getElementById("HokCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 98;
    canvas.height = 28;
    ctx.font = "26px myfont";
    var x = getXsize();
    var y = getYsize();
    ctx.drawImage(img,x,y,100,20,0,0,100,20);
    ctx.fillText(getCanvasImg(), 5, 18, 100);
    ctx.beginPath();
    ctx.strokeStyle = "#000020";
    ctx.moveTo(0, getLsize());
    ctx.lineTo(100, getLsize());
    ctx.stroke();
    ctx.linewidth = 3;
    ctx.strokeStyle = "white";
    ctx.moveTo(0, getLsize());
    ctx.lineTo(100, getLsize());
    ctx.stroke();
}




