const view = new ViewAdap();
view.setViewMode({
  designWidth: 1920,
  designHeight: 1080,
  mode: 'contain'
})

// 首页底部导航点击事件
$(document).on('click', '.nav-bottom ul li', function () {
    var index = $(this).index()
    var active = $('.nav-bottom ul li')
    active.eq(index).find('div').slideDown(200).addClass('.active1')
    active.eq(index).siblings().find('div').slideUp(200)
    $('.xiangqing').fadeOut(200)
})

// 列表页点击事件
$(document).on('click', '.nav-bottom ul .li1', function () {
    $('.content1').css({ opacity: '0' })
    $('.list1').fadeIn(200)
})

$(document).on('click', '.bank1', function () {
    $('.content1').css({ opacity: '1' })
    $('.list1').fadeOut(200)
    $('.active').slideUp(200)
})

// 点击列表页弹出详情页
$(document).on('click', '.list ul li', function () {
    $('.xiangqing').fadeIn(200)
    $('.list1').fadeOut(200)
})

$(document).on('click', '.xiangqingbank', function () {
    $('.xiangqing').fadeOut(200)
    $('.list1').fadeIn(200)
})


// ajax封装
let jqPostAjaxPromise = function (param) {
    // 接口地址
    let baseUrl = "http://188.131.235.7/";
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: baseUrl + param.url,
            type: param.type,
            page: param.page,
            limite: param.limite,
            data: param.data || '',
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error)
            }
        });
    });
};


// 获取导航信息

function getnav() {
    jqPostAjaxPromise({
        url: "api/publiceducation/allSort",
        type: "get",
        data: {}
    }).then(res => {
        var data = res.msg
        var img = ['./images/nav.png', './images/nav1.png', './images/nav3.png', './images/nav4.png', './images/nav5.png', './images/nav6.png']
        var img2 = ['./images/1.png', './images/2.png', './images/3-1.png', './images/4-1.png', './images/5.png', './images/6.png']
        var nav = ''
        for (var i in data) {
            nav += `<li class="li1" data-id="${data[i].pId}">
            <img src="${data[i].pImage}" alt="">
            <a href="javascript:;">${data[i].pName}</a>
            <div class="active">
                <img src="${data[i].pImage}" alt="">
                <a href="javascript:;">${data[i].pName}</a>
            </div>
        </li>`

        }
        $('.nav-bottom ul').append(nav)
    }).catch(err => {
        console.log(err)
    })
}
getnav();

// 获取列表页信息
$(document).on('click', '.nav-bottom ul li', function () {
    var id = $(this).attr('data-id')
    function getlist() {
        jqPostAjaxPromise({
            url: "api/publiceducation/getPublicEducationContentByType?id=" + id,
            type: "get",
            data: {}
        }).then(res => {
            var data = res.msg
            var list = '';
            // var listImg = ''
            for (var i in data) {
                list += `<li data-id="${data[i].peId}">
                <img src="${data[i].peContent}" alt="">
                <p>${data[i].peTitle}</p>
            </li>`
            }
            $('.list1 .list ul').append(list)
        }).catch(err => {
            console.log(err)
        })
        $('.list1 .list ul').html('')

    }
    getlist();

})


// 获取详情页信息
$(document).on('click', '.list1 .list ul li', function () {
    var id = $(this).attr('data-id')
    function getxiangqing() {
        jqPostAjaxPromise({
            url: "api/publiceducation/get?id=" + id,
            type: "get",
            data: {}
        }).then(res => {
            var data = res.msg
            var xiangqing = '';
            xiangqing += `<img src="${data.peContent}" alt="">`
            $('.xiangqing-list').append(xiangqing)
        }).catch(err => {
            console.log(err)
        })
    }
    getxiangqing();
    $('.xiangqing-list').html('')
})


var scrollT = $('.list ul').scrollTop()
var num = 100
$(document).on('click', '.next', function () {
    num += 100
    $('.list ul').scrollTop(num)
})


// 富文本解码格式
function _html_decode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
}

