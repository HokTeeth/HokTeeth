//initialDate初始日期
document.addEventListener('DOMContentLoaded', function () {
    var events = [];
    var userid = window.localStorage.getItem("userid");
    console.log(userid);
    //一進頁面去載入有幾個專案
    $.ajax({
        method: "post",
        url: "/Hok_TeethFunction/Hok_Calendar",
        data: { userid: userid },
        success: function (data) {
            if (data == "CatchFail") {
                alert("程式問題，請洽客服人員！");//Catch錯誤
                return false;
            }
            data = JSON.parse(data);
            console.log(data);
            for (var item = 0; item < data.length; item++) {
                //$.each(data, function () {
                    events.push({
                        title: data[item].ProjectName,
                        start: data[item].CreateDatetime,
                    });
                //})
            }

            CalendarEvents(events);   
        }
    });
   

    //日曆顯示器
    function CalendarEvents(events) {
        console.log(events);
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            //locale: 'zh-tw',
            timeZone: 'UTC',//時區
            height:650,
            initialView: 'dayGridMonth',
            initialDate: new Date(),
            headerToolbar: {
                left: 'prev today',
                center: 'title',
                right: 'next'
            },
            firstDay: 1,
            buttonText: {
                today: '今日',
                prev: '上一月',
                next: '下一月'
            },
            buttonIcons: {
                prev: 'circle-triangle-w',
                next: 'circle-triangle-e'
            },
            eventColor: 'red',
            events: events
        });
        calendar.render();
    }
});

