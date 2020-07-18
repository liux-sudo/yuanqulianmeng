const view = new ViewAdap();
view.setViewMode({
	designWidth: 1920,
	designHeight: 1080,
	mode: 'contain'
})

//禁止滚动条
$(document.body).css({
	"overflow-x": "hidden",
	"overflow-y": "hidden"
});


var timer;

// 导航栏事件
$(document).on('click', '.nav ul li', function () {
	var index = $(this).index()
	$('p.active').removeClass('active')
	$(this).find('p').addClass('active')
	var action = $('.nav ul li')
	action.eq(index).find('.show').show()
	action.eq(index).siblings().find('.show').hide()
	swiper4.autoplay.stop();
	$('.srfp .shouzhi').fadeIn()
	// clearTimeout(timer)
	// backyqlm()
})

$(document).on('click', '.nav ul li:eq(3)', function () {
	setTimeout(function(){
		$('.srfp .shouzhi').fadeOut()
	},7000)
	clearTimeout(timer)
	backyqlm()
})

$(document).on('click', '.yuanqu-content .yuanqu-nav ul li', function () {
	$('li.active1').removeClass('active1')
	$(this).addClass('active1')
	clearTimeout(timer)
	backyqlm()
})

$(document).on('click', '.btn1', function () {
	$('.btn').addClass('active3')
	clearTimeout(timer)
	backyqlm()
})

// 商户导航点击
$(document).on('click', '.shanghu-nav ul li', function () {
	$('li.active-shanghu').removeClass('active-shanghu')
	$(this).addClass('active-shanghu')
	clearTimeout(timer)
	backyqlm()
})

// 点击商户
$(document).on('click', '.nav ul .nav-shanghu', function () {
	$('.shanghu2').show()
	$('.shouye1').hide()
	$('.srfp').hide()
	$('.gwgs1').hide()
	$('.gzjy').hide()
	guiwei()
	clearTimeout(timer)
	backyqlm()
})

// 点击主页
$(document).on('click', '.nav ul .index', function () {
	$('.shanghu2').hide()
	$('.srfp').hide()
	$('.shouye1').show()
	$('.gwgs1').hide()
	$('.gzjy').hide()
	guiwei()
	clearTimeout(timer)
	backyqlm()
})

// 点击港湾故事
$(document).on('click', '.nav ul .nav-gwgs', function () {
	$('.shanghu2').hide()
	$('.srfp').hide()
	$('.shouye1').hide()
	$('.gwgs1').show()
	$('.gzjy').hide()
	guiwei()
	clearTimeout(timer)
	backyqlm()
})

// 点击善融扶贫
$(document).on('click', '.nav ul .nav-srfp', function () {
	$('.shanghu2').hide()
	$('.shouye1').hide()
	$('.srfp').show()
	$('.gwgs1').hide()
	$('.gzjy').hide()
	guiwei()
	clearTimeout(timer)
	backyqlm()
})

// 点击公众教育
$(document).on('click', '.nav ul .nav-gzjy', function () {
	$('.shanghu2').hide()
	$('.shouye1').hide()
	$('.srfp').hide()
	$('.gwgs1').hide()
	$('.gzjy').show()
	guiwei()
	swiper4.autoplay.start();
	clearTimeout(timer)
	backyqlm()
})

// 点击×关闭酒店
$(document).on('click', '.close', function () {
	$('.tanceng').css({ opacity: 0, zIndex: -1 })
	clearTimeout(timer)
	backyqlm()
})



// 点击close
$(document).on('click', '.close1', function () {
	$('.tanceng').hide()
	$('.dy-title').html('')
	$('.swiper-container2 .swiper-wrapper').html('')
	$('.dy-quan .swiper-container-jiudian .swiper-wrapper').html('')
	$('.jiudian .tou').html('')
	clearTimeout(timer)
	backyqlm()
})




// 商户搜索功能
// $(document).on('click', '.search1 .search2', function () {
// 	console.log($('.search1 input').val())
// })


// 点击公众教育导航栏
$(document).on('click', '.bottom-nav ul li', function () {
	var index = $(this).index()
	$('li.action').removeClass('action')
	$(this).addClass('action')
	$('.img2.img2-1').removeClass('img2-1')
	$('.img2').eq(index).addClass('img2-1')
	// $('.hidden').show()
	$('.nav-back0').show()
	$('.nav-back1').hide()
	swiper4.autoplay.stop()
	clearTimeout(timer)
	backyqlm()
})

$(document).on('click', '.nav-back0', function () {
	$('.gzjy-list').fadeOut(300)
	$('.gzjy-index').fadeIn(300)
	$(this).hide()
	$('.bottom-nav ul li').removeClass('action')
	$('.img2').removeClass('img2-1')
	swiper4.autoplay.start()
	clearTimeout(timer)
	backyqlm()
})

$(document).on('click', '.nav-back1', function () {
	$('.gzjy-xq').fadeOut(300)
	$('.gzjy-list').fadeIn(300)
	$(this).hide()
	$('.nav-back0').show()
	clearTimeout(timer)
	backyqlm()
})

// 点击公众教育导航
$(document).on('click', '.bottom-nav ul li', function () {
	$('.gzjy-list').show(300)
	$('.gzjy-index').hide(300)
	$('.gzjy-xq').hide(300)
	clearTimeout(timer)
	backyqlm()
})

// 点击公众列表
$(document).on('click', '.gzjy-list ul li', function () {
	$('.gzjy-xq').show(300)
	$('.gzjy-list').hide(300)
	$('.nav-back0').hide()
	$('.nav-back1').show()
	clearTimeout(timer)
	backyqlm()
})


$(document).on('click', '.nav-back2', function () {
	$('.gsjs1').hide()
	$('.shouye1').show()
	$('.nav-back2').hide()
	$('.cfjs1').hide()
	$('.zpxx1').hide()
	$('.gsjs-content-left .gsjs-content-left-add').html('')
	clearTimeout(timer)
	backyqlm()
})

$(document).on('click', '.nav-back3', function () {
	$('.gsjs1').show()
	$('.zpxx1').hide()
	$(this).hide()
	$('.nav-back2').show()
	$('.cfjs1').hide()
	clearTimeout(timer)
	backyqlm()

})

// // 点击园区招聘
// $(document).on('click', '.yuanqu-content .yuanqu-ul1 li', function () {
// 	gsjs()
// })

// 点击厂房出租
// $(document).on('click', '.cf ul li', function () {
// 	cfxx()
// })

// 点击公司招聘
// $(document).on('click', '.gsjs-content-right ul li', function () {
// 	zpxx()
// 	// clearTimeout(timer)
// })

// 点击园区招聘二级页厂房出租
// $(document).on('click', '.cf-ul li', function () {
// 	$('.cfjs1').show()
// 	$('.shouye1').hide()
// })

// 归位函数
function guiwei() {
	$('.gzjy-index').show()
	$('.gzjy-list').slideUp()
	$('.gzjy-xq').slideUp()
	$('.bottom-nav ul li').removeClass('action')
	$('.nav-back').hide()
	$('.gsjs1').hide()
	$('.cfjs1').hide()
	$('.zpxx1').hide()
}

// 显示公司介绍函数
function gsjs() {
	$('.gsjs1').show()
	$('.shouye1').hide()
	$('.nav-back2').show()
}

// 点击显示厂房信息
function cfxx() {
	$('.cfjs1').show()
	$('.gsjs1').hide()
	$('.shouye1').hide()
	$('.nav-back2').show()
}

// 点击显示招聘函数
function zpxx() {
	$('.zpxx1').show()
	$('.shouye1').hide()
	$('.nav-back2').hide()
	$('.nav-back3').show()
	$('.gsjs1').hide()
}

// 30秒无操作转跳到首页
function index() {
	$('.shouye1').show()
	$('.shanghu').hide()
	$('.srfp').hide()
	$('.gwgs1').hide()
	$('.gzjy').hide()
	$('.gsjs1').hide()
	$('.cfjs1').hide()
	$('.zpxx1').hide()
	$('.tanceng').hide()
	$('.nav-back').hide()
}
function backIndex() {
	timer = setTimeout(index, 3000)
}

var url = 'http://188.131.235.7/'

// ajax封装
let jqPostAjaxPromise1 = function (param) {
	// 接口地址
	// let baseUrl = "http://188.131.235.7/";
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url + param.url,
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

// ajax封装1
let jqPostAjaxPromise = function (param) {
	// 接口地址
	// let baseUrl = "http://188.131.235.7/";
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url + param.url,
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

let jqPostAjaxPromise2 = function (param) {
	// 接口地址
	// let baseUrl = "http://188.131.235.7/";
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url + param.url,
			type: param.type,
			page: param.page,
			limite: param.limite,
			data: param.data || '',
			dataType: "json account.models",
			success: function (data) {
				resolve(data);
			},
			error: function (error) {
				reject(error)
			}
		});
	});
};

// 请求公众教育数据
function getnav() {
	jqPostAjaxPromise({
		url: "api/publiceducation/allSort",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var nav = ''
		var img = ['./images/nav.png', './images/nav1.png', './images/nav3.png', './images/nav4.png', './images/nav5.png', './images/nav6.png']
		var img2 = ['./images/img/1.png', './images/img/2.png', './images/img/3-1.png', './images/img/4-1.png', './images/img/5.png', './images/6-1.png']
		for (var i in data) {
			nav += `<li data-id="${data[i].pId}">
			<img src="${img[i]}" alt="">
			${data[i].pName}
			<img src="${img2[i]}" class="img2">
		</li>`
		}
		$('.bottom-nav ul').append(nav)
	}).catch(err => {
		console.log(err)
	})
}
getnav();

function getgzjyindex() {
	jqPostAjaxPromise({
		url: "api/publiceducation/indexContent?site=3",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var img = ''
		var imgurl = data.split(',')
		for (var i in imgurl) {
			img += `<div class="swiper-slide">
            <img src="${imgurl[i]}" alt="">
        </div>`
		}
		$('.swiper-container-gzjy .swiper-wrapper').append(img)
		var swiper4 = new Swiper('.swiper-container-gzjy', {
			effect: 'coverflow',
			loop: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			slidesPerView: 'auto',
			spaceBetween: -900,
			coverflowEffect: {
				rotate: 0,
				stretch: 600,
				depth: 910,
				// modifier: -2,
				slideShadows: false
			},
			autoplay: {
				delay: 3000,//1秒切换一次
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
		});
	}).catch(err => {
		console.log(err)
	})
}
getgzjyindex()

// 请求公众教育列表数据
$(document).on('click', '.bottom-nav ul li', function () {
	var id = $(this).attr('data-id')
	function getlist() {
		jqPostAjaxPromise1({
			url: "api/publiceducation/getPublicEducationContentByType?id=" + id,
			type: "get",
			data: {}
		}).then(res => {
			var data = res.msg
			var list = '';
			for (var i in data) {
				list += `<li data-id="${data[i].peId}">
				<div class="guding"><img src="${data[i].peContent}" alt=""></div>
				<p>${data[i].peTitle}</p>
			</li>`
			}
			$('.gzjy-list .list ul').append(list)
		}).catch(err => {
			console.log(err)
		})
		$('.gzjy-list .list ul').html('')
	}
	getlist();

})

// 请求公众教育列表详情数据
$(document).on('click', '.gzjy-list .list ul li', function () {
	var id = $(this).attr('data-id')
	function getxiangqing1() {
		jqPostAjaxPromise({
			url: "api/publiceducation/get?id=" + id,
			type: "get",
			data: {}
		}).then(res => {
			var data = res.msg
			var xiangqing = '';
			xiangqing += `<img src="${data.peContent}" alt="">`
			$('.gzjy-xq .xq').html(xiangqing)
		}).catch(err => {
			console.log(err)
		})
	}
	getxiangqing1();
	$('.gzjy-xq .xq').html('')
})

// 请求港湾故事数据
function getgwgs() {
	jqPostAjaxPromise1({
		url: "api/harborstory/list?site=3",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var content = '';
		var video = '';
		var title = '';
		for (var i in data) {
			content += `<div class="swiper-slide" data-id="${data[i].hId}">
			<video src="${data[i].hUrl}" class="video2" ></video>
			<div class="zezhao"></div>
		</div>`
			video += `<div class="swiper-slide">
					<video src="${data[i].hUrl}" controls class="video1" ></video>
				</div>`

		}
		title += `<h2>${data[0].hTitle}</h2>`
		$('.gwgs1 .video .swiper-container4 .swiper-wrapper').append(content)
		$('.swiper-container4 .swiper-slide .zezhao').eq(0).addClass('active5')
		$('.gwgs1 .video .swiper-container3 .swiper-wrapper').append(video)
		$('.gwgs1 .gwgs1-title').html(title)
	}).catch(err => {
		console.log(err)
	})

}
getgwgs()

$(document).on('click', '.swiper-container4 .zezhao', function (e) {
	var index = $(this).parent().index()
	// $('.video1').play()
	document.querySelectorAll('.video1').forEach(item => {
		item.pause()
	})
	document.querySelectorAll('.video1')[index].play()
})

$(document).on('click', '.nav ul li', function (e) {
	document.querySelectorAll('.video1').forEach(item => {
		item.pause()
	})
})

$(document).on('click', '.nav ul li:eq(4)', function (e) {
	// document.querySelectorAll('.video1').forEach(item => {
	// 	item.play()
	// })
	var video = $('.video1')[0]
	video.play()
	clearTimeout(timer)
	backyqlm()
})


$(document).on('click', '.swiper-container4 .swiper-slide', function () {
	var id = $(this).attr('data-id')
	function title() {
		jqPostAjaxPromise1({
			url: "api/harborstory/list?site=3&id=" + id,
			type: "get",
			data: {}
		}).then(res => {
			var data = res.msg
			var video = '';
			var title = '';
			for (var i in data) {
				if (id == data[i].hId) {
					title += `<h2>${data[i].hTitle}</h2>`
				}
			}
			$('.gwgs1 .gwgs1-title').html(title)
		}).catch(err => {
			console.log(err)
		})
	}
	$('.gwgs1 .gwgs1-title').html('')
	title()
	clearTimeout(timer)
	backyqlm()
})


// 请求善融扶贫数据
function getsrfp() {
	jqPostAjaxPromise1({
		url: "api/povertyalleviation/list?site=3",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var img = '';
		for (var i in data) {
			img += `
			<img src="./images/shouzhi.png" alt="" class="shouzhi">
			<img src="${data[i].pImage}" alt="">`
		}
		$('.srfp').html(img)
	}).catch(err => {
		console.log(err)
	})
}
getsrfp();


// 请求周边商户热门推荐数据
function gethot() {
	jqPostAjaxPromise1({
		url: "api/hot/list",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var img = '';
		for (var i in data) {
			img += `<div class="swiper-slide">
			<div class="rmtj"><img src="./images/hot.png" alt=""></div>
			<img src="${data[i].hrUrl}" alt="" class="zbsh-img">
			<div class="zbsh-code"><img src="${data[i].hrQrCode}"></div>
		</div>`
		}
		$('.shanghu2 .shanghu-right .swiper-wrapper').html(img)
	}).catch(err => {
		console.log(err)
	})
}
gethot();

// 请求周边商户里面的每日推荐轮播图
function getmrtj() {
	jqPostAjaxPromise1({
		url: "api/daily/list?site=3",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var slide = ''
		for (var i in data) {

			slide += `<div class="swiper-slide swiper-slide1">
			<div class="tuijian">
				<h1>今日推荐</h1>
				<div class="tuijian-title">${data[i].drTitle}</div>
				<p>${data[i].drDescription}</p>
			</div>
			<div class="tuijian-you">
				<div class="swiper-container-shanghu swiper-container-shanghu${i}"  date-id="${data[i].drId}">
					<div class="swiper-wrapper">

					</div>
				</div>
			</div>
		</div>`

		}
		$('.swiper-wrapper1').append(slide)
		for (let i in data) {
			var slide1 = ''
			var img = data[i].drUrl.split(',')
			var id = $('.swiper-container-shanghu').eq(i).attr('date-id')
			if (id == data[i].drId) {
				for (let i in img) {
					slide1 += `<div class="swiper-slide">
					<img src="${img[i]}" alt="">
				</div>`
				}
				$('.swiper-container-shanghu .swiper-wrapper').eq(i).html(slide1)
			}
		}

		for (var i in data) {
			var swiper3 = new Swiper('.swiper-container-shanghu' + i, {
				slidesPerView: 'auto',
				spaceBetween: 30,
				slidesOffsetAfter: 30,
				freeMode: true,
				observer: true,
				observeParents: true,

			});
		}

	}).catch(err => {
		console.log(err)
	})
}
getmrtj();


// 请求火炬公司图标
function gethuoju() {
	jqPostAjaxPromise1({
		url: "api/company/list",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var logo = ''
		for (var i in data) {
			logo += `<li data-id="${data[i].cId}"><img src="${data[i].cLogo}" alt=""></li>`
		}
		$('.huoju .huoju-ul').append(logo)
	}).catch(err => {
		console.log(err)
	})
}
gethuoju();

// 点击火炬公司请求公司介绍
$(document).on('click', '.syhide .content-left .left-bottom .huoju .huoju-ul li', function () {
	var id = $(this).attr('data-id')
	function getgsjs() {
		jqPostAjaxPromise1({
			url: "api/company/get?id=" + id,
			type: "get",
			data: {}
		}).then(res => {
			var data = res.msg
			var gsjs = ''
			var gshj = ''
			var gszp = ''
			var cfcz = ''
			for (var i in data) {
				if (id == data[i].cId) {
					gsjs += ` <img src="${data[i].cLogo}" alt="" class="gsjs-logo">
					<div class="gsjs-content-gsjs">
						<h2 class="gsjs-title">公司介绍</h2>
						<h3>${data[i].cName}</h3>
						<p>${data[i].cIntroduction}</p>
						<div class="gsxq">
							<ul>
								<li>
									描述 <span>${data[i].cDescription}</span>
								</li>
								<li>
									规模 <span>${data[i].cScale}</span>
								</li>
								<li>
									法人 <span>${data[i].cLegalPerson}</span>
								</li>
							</ul>
							<ul>
								<li>
									地址 <span>${data[i].cAddress}</span>
								</li>
								<li>
									电话 <span>${data[i].cTelephone}</span>
								</li>
								<li>
									网址 <span>${data[i].cWebsite}</span>
								</li>
							</ul>
						</div>
					</div>
					`
					// 公司招聘
					for (var i in data.recruitment) {
						if (data.recruitment == '暂无招聘信息') {
							$('.gsjs-content-right .zp-ul').html(`<div class="box">
							<div>
								<img src="./images/none.png" alt="">
								<p>暂无招聘信息</p>
							</div>
						</div>`)
						} else {
							gszp += `<li date-id="${data.recruitment[i].rId}">
							<img src="${data.company.cLogo}" alt="" class="img">
							<ul>
								<li>职位：<span>${data.recruitment[i].rPosition}</span></li>
								<li>薪资：<span>${data.recruitment[i].rSalary}</span></li>
								<li>学历：<span>${data.recruitment[i].rEducation}</span></li>
								<li>工作经验：<span>${data.recruitment[i].rWorkExperience}</span></li>
								<li>工作地点：<span>${data.recruitment[i].rAddress}</span></li>
							</ul>
							<div class="more">
								详情 <span class="iconfont icon-dayuhao"></span>
							</div>
						</li>`
						}

					}

					// 厂房出租
					for (var i in data.factoryBuilding) {
						if (data.factoryBuilding == '暂无招聘信息') {
							$('.cf-ul').html(`<div class="box">
							<div>
								<img src="./images/none.png" alt="">
								<p>暂无招聘信息</p>
							</div>
						</div>`)
						} else {
							var img = data.factoryBuilding[i].fImage
							var imgurl = (img || "").split(",")
							cfcz += `<li date-id="${data.factoryBuilding[i].fId}">
							<img src="${imgurl[0]}" alt="">
							<div class="cfjs">
								<p>位置：<span>${data.factoryBuilding[i].fAddress}</span></p>
								<p>面积：<span>${data.factoryBuilding[i].fArea}平方米</span></p>
								<p>租期：<span>${data.factoryBuilding[i].fLeasePeriod}</span></p>
								<p>${data.factoryBuilding[i].fRent}元/月</p>
							</div>
							<div class="xiangqing">查看详情</div>
						</li>`
						}
					}
				}
				$('.gsjs-content-left .gsjs-content-left-add').html(gsjs)
				$('.gsjs-content-right .zp-ul').append(gszp)
				$('.cf-ul').append(cfcz)
			}
			for (var i in data) {
				if (id == data[i].cId) {
					var str = data[i].cEnvironment
					var imgUrl = str.split(',')
					for (var i in imgUrl) {
						gshj += `<div class="swiper-slide"><img src="${imgUrl[i]}" alt=""></div>`
					}
				}
				$('.gshj-swiper .swiper-container-gsjs .swiper-wrapper').html(gshj)
			}
		}).catch(err => {
			console.log(err)
		})
	}
	$('.gsjs-content-left .gsjs-content-left-add').html('')
	$('.gsjs-content-right .zp-ul').html('')
	$('.cf-ul').html('')
	getgsjs();
	gsjs()
	// backIndex()
	clearTimeout(timer)
	backyqlm()
})


// 请求主页职位推荐
function getzhiweituijian() {
	jqPostAjaxPromise1({
		url: "api/recruitment/getAllRecommend",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var zhiwei = ''
		var div = ''
		console.log(data)
		for (var i in data) {
			zhiwei += `<div class="swiper-slide zwtj-liuxu" data-id="${data[i].rId}">
			<ul>
				<li>
					公司：<span>${data[i].companyName}</span>
				</li>
				<li>
					职位：<span>${data[i].rPosition}</span>
				</li>
				<li>
					薪资：<span>${data[i].rSalary}</span>
				</li>
				<li>
					学历：<span>${data[i].rEducation}</span>
				</li>
			</ul>
			<div class="swiper">
				<div class="swiper-containe" id="${i}" date-id="${data[i].rId}">
					<div class="swiper-wrapper" id="liuxu">
						
					</div>
				</div>
			</div>
		</div> `
		}
		$('.swiper-container-zhiweilbt .swiper-wrapper').append(zhiwei)
		for (let i in data) {
			var slide1 = ''
			var img = data[i].environment.split(',')
			var id = $('.swiper .swiper-containe').eq(i).attr('date-id')
			if (id == data[i].rId) {
				for (let i in img) {
					slide1 += `<div class="swiper-slide">
					<img src="${img[i]}" alt="">
				</div>`
				}
				$('.swiper .swiper-containe .swiper-wrapper').eq(i).html(slide1)

			}
		}
		for (var i in data) {
			var swiper = new Swiper('#' + i, {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesOffsetAfter: 30,
				freeMode: true,
				observer: true,
				observeParents: true,
			});
		}
	}).catch(err => {
		console.log(err)
	})
}
getzhiweituijian();

// 请求园区招聘里面的内容
// 请求公司
var type = 0;
function getgs(type, condition) {
	$('.yuanqu-ul1').html('')
	// type = 0;
	jqPostAjaxPromise1({
		url: "api/company/search?type=" + type + "&condition=" + condition,
		type: "get",
		data: {}
	}).then(res => {
		var data1 = res.msg.company
		var data = res.msg.recruitment
		var li1 = ''
		data = data.concat(data1)
		data.sort(function (a, b) {
			return 0.5 - Math.random()
		})
		for (var i in data) {
			if (data[i].rId !== undefined && data[i].rId !== null && data[i].rId !== "") {
				li1 += ` <li date-url="1" date-id="${data[i].rId}">
				<h2>${data[i].rPosition}</h2>
					<div class="title">${data[i].cDistrict} 丨 ${data[i].rEducation} 丨 ${data[i].rWorkExperience}</div>
						<div class="yj">
							<img src="${data[i].cLogo}" alt="" class="gslogo">
						<div class="xiangqing">
							<p class="name">${data[i].companyName}</p>
							<p class="guimo">${data[i].cScale}丨${data[i].cIndustry}</p>
						</div>
					</div>
					<div class="price">${data[i].rSalary}</div>
				</li>`
			} else {
				li1 += ` <li date-url="2" date-id="${data[i].cId}">
					<div class="gsLogo2"><img src="${data[i].cLogo}" alt="" class="gslogo1"></div>
					<div class="gsjs">
						<h2 class="gsname">${data[i].cName}</h2>
						<div class="biaoqian" date-id="${data[i].cId}">
						</div>
						<p class="js">“${data[i].cDescription}”</p>
					</div>
				</li>`
			}
		}
		$('.yuanqu-ul1').append(li1)

		// 找到标签元素
		var id = $('.yuanqu-ul1 li .biaoqian')
		// 循环标签
		id.each(function () {
			// 循环公司
			for (let j in data1) {
				var span1 = ''
				var span = (data1[j].cWelfare || "").split('|@|')
				// 如果标签的自定义属性等于公司下面的cId的时候渲染页面
				if ($(this).attr("date-id") == data1[j].cId) {
					for (let w in span) {
						span1 += `<span>${span[w]}</span>`
					}
					// 找到含有自定义属性的元素，他的值等于公司下面的cId的时候渲染页面
					$('.yuanqu-ul1 li .gsjs').find(".biaoqian[date-id=" + data1[j].cId + "]").html(span1)
				}

			}
		})



	}).catch(err => {
		console.log(err)
	})

}
getgs(0, "");

// 点击园区招聘全部
$('.yuanqu-nav ul li').eq(0).click(function () {
	$('.yuanqu-ul1').html('')
	$('.gsjs .biaoqian').html('')
	type = 0;
	getgs(0, "");
})

// 点击园区招聘公司
function getgs1(type, condition) {
	$('.yuanqu-ul1').html('')
	jqPostAjaxPromise1({
		url: "api/company/search?type=" + type + "&condition=" + condition,
		type: "get",
		data: {}
	}).then(res => {
		var data0 = res.msg
		var data = res.msg.company
		var data1 = res.msg.recruitment
		var li = ''
		var li1 = ''
		for (var i in data) {
			var str = data[i].cWelfare
			var span = str.split('|@|')
			li += ` <li date-url="2" date-id="${data[i].cId}">
			<div class="gsLogo2"><img src="${data[i].cLogo}" alt="" class="gslogo1"></div>
		<div class="gsjs">
			<h2 class="gsname">${data[i].cName}</h2>
			<div class="biaoqian" date-id="${data[i].cId}">
				
			</div>
			<p class="js">“${data[i].cDescription}”</p>
		</div>
	</li>`
		}
		$('.yuanqu-ul1').append(li)

		for (let i in data) {
			var span1 = ''
			var span = (data[i].cWelfare || "").split('|@|')
			var url = $('.yuanqu-ul1 li').eq(i).attr('date-url')
			var id = $('.yuanqu-ul1 li .biaoqian').eq(i).attr('date-id')
			if (url == 2 && id == data[i].cId) {
				for (let i in span) {
					span1 += `<span>${span[i]}</span>`
				}
				$('.yuanqu-ul1 li .gsjs .biaoqian').eq(i).html(span1)

			}
		}

	}).catch(err => {
		console.log(err)
	})
}

$('.yuanqu-nav ul li').eq(1).click(function () {
	type = 1;
	getgs1(1, "");
})

// 点击园区招聘职位
function searchzw(type, condition) {
	$('.yuanqu-ul1').html('')
	jqPostAjaxPromise1({
		url: "api/company/search?type=" + type + "&condition=" + condition,
		type: "get",
		data: {}
	}).then(res => {
		var data0 = res.msg
		var data = res.msg.company
		var data1 = res.msg.recruitment
		var li = ''
		var li1 = ''
		for (var i in data1) {
			li1 += ` <li date-url="1" date-id="${data1[i].rId}">
		<h2>${data1[i].rPosition}</h2>
			<div class="title">${data1[i].cDistrict} 丨 ${data1[i].rEducation} 丨${data1[i].rWorkExperience}</div>
				<div class="yj">
					<img src="${data1[i].cLogo}" alt="" class="gslogo">
				<div class="xiangqing">
					<p class="name">${data1[i].companyName}</p>
					<p class="guimo">${data1[i].cScale}丨${data1[i].cIndustry}</p>
				</div>
			</div>
			<div class="price">${data1[i].rSalary}</div>
		</li>`
		}
		$('.yuanqu-ul1').append(li1)
	}).catch(err => {
		console.log(err)
	})
}

$('.yuanqu-nav ul li').eq(2).click(function () {
	type = 2
	searchzw(2, "");
})

// 主页查询
$(document).on('click', '.search .search1', function () {
	var condition = $('.search input').val()
	if (0 == type) {
		getgs(type, condition);
	} else if (1 == type) {
		getgs1(type, condition);
	} else if (2 == type) {
		searchzw(type, condition);
	}
	clearTimeout(timer)
	backyqlm()
})

// 点击园区招聘里面的li
$(document).on('click', '.yuanqu-content .yuanqu-ul1 li', function () {
	var dateurl = $(this).attr('date-url')
	var id = $(this).attr('date-id')
	if (dateurl == 2) {
		function getgsjs() {
			jqPostAjaxPromise1({
				url: "api/company/get?id=" + id,
				type: "get",
				data: {}
			}).then(res => {
				var data = res.msg
				var gsjs = ''
				var gshj = ''
				var gszp = ''
				var cfcz = ''
				for (var i in data) {
					if (id == data[i].cId) {
						gsjs += ` <img src="${data[i].cLogo}" alt="" class="gsjs-logo">
						<div class="gsjs-content-gsjs">
						<h2 class="gsjs-title">公司介绍</h2>
						<h3>${data[i].cName}</h3>
						<p>${data[i].cIntroduction}</p>
						<div class="gsxq">
							<ul>
								<li>
									描述 <span>${data[i].cDescription}</span>
								</li>
								<li>
									规模 <span>${data[i].cScale}</span>
								</li>
								<li>
									法人 <span>${data[i].cLegalPerson}</span>
								</li>
							</ul>
							<ul>
								<li>
									地址 <span>${data[i].cAddress}</span>
								</li>
								<li>
									电话 <span>${data[i].cTelephone}</span>
								</li>
								<li>
									网址 <span>${data[i].cWebsite}</span>
								</li>
							</ul>
						</div>
					</div>
					`
						if (data.recruitment == '暂无招聘信息') {
							$('.gsjs-content-right .zp-ul').append(`<div class="box">
							<div>
								<img src="./images/none.png" alt="">
								<p>暂无招聘信息</p>
							</div>
						</div>`)
						} else {
							// 公司招聘
							for (var i in data.recruitment) {
								gszp += `<li date-id="${data.recruitment[i].rId}">
								<img src="${data.company.cLogo}" alt="" class="img">
								<ul>
									<li>职位：<span>${data.recruitment[i].rPosition}</span></li>
									<li>薪资：<span>${data.recruitment[i].rSalary}</span></li>
									<li>学历：<span>${data.recruitment[i].rEducation}</span></li>
									<li>工作经验：<span>${data.recruitment[i].rWorkExperience}</span></li>
									<li>工作地点：<span>${data.recruitment[i].rAddress}</span></li>
								</ul>
								<div class="more">
									详情 <span class="iconfont icon-dayuhao"></span>
								</div>
								</li>`
							}

						}

						// 厂房出租
						for (var i in data.factoryBuilding) {
							if (data.factoryBuilding == '暂无招聘信息') {
								$('.cf-ul').html(`<div class="box">
								<div>
									<img src="./images/none.png" alt="">
									<p>暂无招聘信息</p>
								</div>
							</div>`)
							} else {
								var img = data.factoryBuilding[i].fImage
								var imgurl = (img || "").split(",")
								cfcz += `<li date-id="${data.factoryBuilding[i].fId}">
							<img src="${imgurl[0]}" alt="">
							<div class="cfjs">
								<p>位置：<span>${data.factoryBuilding[i].fAddress}</span></p>
								<p>面积：<span>${data.factoryBuilding[i].fArea}平方米</span></p>
								<p>租期：<span>${data.factoryBuilding[i].fLeasePeriod}</span></p>
								<p>${data.factoryBuilding[i].fRent}元/月</p>
							</div>
							<div class="xiangqing">查看详情</div>
						</li>`
							}
						}
					}
					$('.gsjs-content-left .gsjs-content-left-add').html(gsjs)
					$('.gsjs-content-right .zp-ul').append(gszp)
					$('.cf-ul').append(cfcz)
				}
				for (var i in data) {
					if (id == data[i].cId) {
						var str = data[i].cEnvironment
						var imgUrl = str.split(',')
						for (var i in imgUrl) {
							gshj += `<div class="swiper-slide"><img src="${imgUrl[i]}" alt=""></div>`
						}
					}
					$('.gshj-swiper .swiper-container-gsjs .swiper-wrapper').html(gshj)
				}
			}).catch(err => {
				console.log(err)
			})
		}
		$('.gsjs-content-left .gsjs-content-left-add').html('')
		$('.cf-ul').html('')
		$('.gsjs-content-right .zp-ul').html('')
		getgsjs();
		gsjs()
	}
	clearTimeout(timer)
	backyqlm()
})

// 点击园区招聘里面的职位信息
$(document).on('click', '.yuanqu-content .yuanqu-ul1 li', function () {
	var dateurl = $(this).attr('date-url')
	var id = $(this).attr('date-id')
	if (dateurl == 1) {
		function getgsjs() {
			jqPostAjaxPromise1({
				url: "api/recruitment/get?id=" + id,
				type: "get",
				data: {}
			}).then(res => {
				var data = res.msg
				var zhiwei = ''
				var p = ''
				var p1 = ''
				var zwGsjs = ''
				zhiwei += `<h2 class="gsjs-title">职位招聘</h2>
				<ul>
					<li>职位<span>${data.recruitment.rPosition}</span></li>
					<li>薪资<span>${data.recruitment.rSalary}</span></li>
					<li>学历<span>${data.recruitment.rEducation}</span></li>
					<li>经验<span>${data.recruitment.rWorkExperience}</span></li>
					<p>工作地点<span>${data.recruitment.rAddress}</span></p>
				</ul>
				<h2 class="gsjs-title zwjs">职位介绍</h2>
				<h4>岗位职责：</h4>
				<div class="gwzhize gwzz">
					
				</div>
				<h4 class="gwyaoqiu">岗位要求：</h4>
				<div class="gwzhize gwyq">
					
				</div>`
				var str = data.recruitment.rResponsibilities
				var zhize = str.split('|@|')
				for (var i in zhize) {
					p += `<p>${zhize[i]}</p>`
				}
				var str1 = data.recruitment.rRequirements
				var yaoqiu = str1.split('|@|')
				for (var i in yaoqiu) {
					p1 += `<p>${yaoqiu[i]}</p>`
				}

				// 职位招聘里面的公司介绍
				zwGsjs += `<div class="zwzp-logo1"><img src="${data.company.cLogo}" alt="" class="zwzp-logo"></div>
				<div class="zwzp-code">
					<img src="${data.recruitment.rQrcord}" alt="">
					<p>扫码申请</p>
				</div>
				<h2 class="gsjs-title">公司介绍</h2>
				<p>${data.company.cName}</p>
				<div class="zwzp-content-right-js">
				${data.company.cIntroduction}
				</div>
				<div class="zwzp-content-right-gm">
					<p>规模<span>${data.company.cScale}</span></p>
					<p>描述<span>${data.company.cDescription}</span></p>
					<p>地址<span>${data.company.cAddress}</span></p>
					<p>电话<span>${data.company.cTelephone}</span></p>
					<p>在招职位${data.company.atThePosition}个</span></p>
				</div>`
				$('.zwzp-content-right').append(zwGsjs)
				$('.zwzp-content-left').html(zhiwei)
				$('.gwyq').append(p)
				$('.gwzz').append(p1)
			})
		}
		zpxx1()
		getgsjs()
		$('.gwyq').html('')
		$('.gwzz').html('')
		$('.zwzp-content-right').html('')
	}
	clearTimeout(timer)
	backyqlm()
})

function zpxx1() {
	$('.zpxx1').show()
	$('.shouye1').hide()
	$('.nav-back4').show()
}

$(document).on('click', '.nav-back4', function () {
	$(this).hide()
	$('.zpxx1').hide()
	$('.shouye1').show()
	clearTimeout(timer)
	backyqlm()
})

// 请求主页厂房出租
function getindexcfcz() {
	jqPostAjaxPromise1({
		url: "api/factorybuilding/list",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var indexcfcz = ''
		for (var i in data) {
			var img = data[i].fImage
			var imgurl = (img || "").split(',')
			indexcfcz += `<li date-id="${data[i].fId}">
			<img src="${imgurl[0]}" alt="">
			<div class="cfxq">
				<p>位置：<span>${data[i].fAddress}</span></p>
				<p>面积：<span>${data[i].fArea}平方米</span></p>
				<p>租金：<span>${data[i].fRent}/月</span></p>
				<p>租期：<span>${data[i].fLeasePeriod}</span></p>
			</div>
			<div class="more">
				详情 <span class="iconfont icon-dayuhao"></span>
			</div>
		</li>`
		}
		$('.content-right .cf ul').append(indexcfcz)
	}).catch(err => {
		console.log(err)
	})
}
getindexcfcz();

// 点赞
function getdianzan() {
	jqPostAjaxPromise1({
		url: "api/goodwillbusiness/updatePackLike?site=3&type=1",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var num = ''
		num += `${data}`
		var num1 = data
		$('.num').html(num1)
		if (num1 > 999) {
			$('.num').html('999+')
		}
	}).catch(err => {
		console.log(err)
	})
	$('.num').html('')
	$('.num').css({ color: 'rgba(255, 132, 69, 1)' })
	setTimeout(style, 30000)
	$('.btn').removeClass('active4')
	$('.btn').addClass('active3')
}


// $(document).on('click', '.grid .btn1', function () {
// 	$('.num').html('')
// 	getdianzan();
// 	$('.num').css({ color: 'rgba(255, 132, 69, 1)' })
// })


// 节流函数
function throttle(fn, delay) {
	var lastTime = 0; // 第一个肯定执行
	return function () {
		var nowTime = new Date().getTime();// 时间戳：到现在的秒数
		if (nowTime - lastTime > delay) {
			// 函数调用 fn
			fn.apply(this, arguments);
			lastTime = nowTime;
		}
	}
}

$(document).on('click', '.grid .btn1', throttle(getdianzan, 30000))

function style() {
	$('.num').css({ color: 'rgba(185, 188, 200, 1)' })
	$('.btn').removeClass('active3')
	$('.btn').addClass('active4')
}

// 点赞
function getdianzan1() {
	jqPostAjaxPromise1({
		url: "api/goodwillbusiness/updatePackLike?site=3&type=0",
		type: "get",
		data: {}

	}).then(res => {
		var data = res.msg
		var num = ''
		num += `${data}`
		var num1 = num
		$('.num').append(num1)
		if (num1 > 999) {
			$('.num').html('999+')
		}
	}).catch(err => {
		console.log(err)
	})
}

$('.num').html('')
getdianzan1();


// 点击厂房出租
$(document).on('click', '.cf ul li', function () {
	var id = $(this).attr('date-id')
	function getcfxq() {
		jqPostAjaxPromise1({
			url: "api/factorybuilding/get?id=" + id,
			type: "get",
			data: {}
		}).then(res => {
			var data = res.msg
			var cfxq = ''
			var img1 = ''
			var gsjs = ''
			for (var i in data) {
				if (id == data[i].fId) {
					cfxq += `<h2 class="gsjs-title">厂房介绍</h2>
					<p>${data.factoryBuilding.fIntroduction}
					</p>
					<h2 class="gsjs-title czxx">出租信息</h2>
					<ul>
						<li>
							地址<span>${data.factoryBuilding.fAddress}</span>
						</li>
						<li>
							租金<span>${data.factoryBuilding.fRent}/月</span>
						</li>
						<li>
							面积<span>${data.factoryBuilding.fArea}平方米</span>
						</li>
						<li>
							租期<span>${data.factoryBuilding.fLeasePeriod}</span>
						</li>
					</ul>
					<ol>
						<li>联系人<span>${data.factoryBuilding.fContact}</span></li>
						<li>联系电话<span>${data.factoryBuilding.fContactPhone}</span></li>
					</ol>`

					// 公司介绍
					gsjs += `<div class="cfjs-content-right">
					<h2 class="gsjs-title">公司介绍</h2>
					<h3>${data.company.cName}</h3>
					<div>
					${data.company.cIntroduction}
					</div>
					<p>规模<span>${data.company.cScale}</span></p>
					<p>描述<span>${data.company.cDescription}</span></p>
					<p>地址<span>${data.company.cAddress}</span></p>
					<p>电话<span>${data.company.cTelephone}</span></p>
					<p>在招职位<span>${data.company.atThePosition}个</span></p>
					</div>
					<div class="gsjs-code">
					<img src="${data.factoryBuilding.fQrcord}" alt="">
					<p>扫码申请</p>
					</div>
					<img src="${data.company.cLogo}" alt="" class="gs-logo">
					</div>`

					// 图片展示
					var img = data.factoryBuilding.fImage
					var imgurl = (img || '').split(',')
					for (var i in imgurl) {
						img1 += `<div class="swiper-slide"><img src="${imgurl[i]}" alt=""></div>`
					}
					$('.swiper-container-cfjs .swiper-wrapper').html(img1)
				}
			}
			$('.cfjs-content-right1').append(gsjs)
			$('.cfjs-content-left .cfxq').prepend(cfxq)
		}).catch(err => {
			console.log(err)
		})
	}
	getcfxq();
	$('.cfjs-content-left .cfxq').html('')
	cfxx()
	clearTimeout(timer)
	backyqlm()
})


// 点击园区招聘二级页厂房出租
$(document).on('click', '.cf-ul li', function () {
	var id = $(this).attr('date-id')
	function getcfxq() {
		jqPostAjaxPromise1({
			url: "api/factorybuilding/get?id=" + id,
			type: "get",
			data: {}
		}).then(res => {
			var data = res.msg
			var cfxq = ''
			var img1 = ''
			var gsjs = ''
			for (var i in data) {
				if (id == data[i].fId) {
					cfxq += `<h2 class="gsjs-title">厂房介绍</h2>
					<p>${data.factoryBuilding.fIntroduction}
					</p>
					<h2 class="gsjs-title czxx">出租信息</h2>
					<ul>
						<li>
							地址<span>${data.factoryBuilding.fAddress}</span>
						</li>
						<li>
							租金<span>${data.factoryBuilding.fRent}/月</span>
						</li>
						<li>
							面积<span>${data.factoryBuilding.fArea}平方米</span>
						</li>
						<li>
							租期<span>${data.factoryBuilding.fLeasePeriod}</span>
						</li>
					</ul>
					<ol>
						<li>联系人<span>${data.factoryBuilding.fContact}</span></li>
						<li>联系电话<span>${data.factoryBuilding.fContactPhone}</span></li>
					</ol>`

					// 公司介绍
					gsjs += `<div class="cfjs-content-right">
					<h2 class="gsjs-title">公司介绍</h2>
					<h3>${data.company.cName}</h3>
					<div>
					${data.company.cIntroduction}
					</div>
					<p>规模<span>${data.company.cScale}</span></p>
					<p>描述<span>${data.company.cDescription}</span></p>
					<p>地址<span>${data.company.cAddress}</span></p>
					<p>电话<span>${data.company.cTelephone}</span></p>
					<p>在招职位<span>${data.company.atThePosition}个</span></p>
					</div>
					<div class="gsjs-code">
					<img src="${data.factoryBuilding.fQrcord}" alt="">
					<p>扫码申请</p>
					</div>
					<img src="${data.company.cLogo}" alt="" class="gs-logo">
					</div>`

					// 图片展示
					var img = data.factoryBuilding.fImage
					var imgurl = (img || '').split(',')
					for (var i in imgurl) {
						img1 += `<div class="swiper-slide"><img src="${imgurl[i]}" alt=""></div>`
					}
					$('.swiper-container-cfjs .swiper-wrapper').html(img1)
				}
			}
			$('.cfjs-content-right1').append(gsjs)
			$('.cfjs-content-left .cfxq').prepend(cfxq)
		}).catch(err => {
			console.log(err)
		})
	}
	getcfxq();
	$('.cfjs-content-left .cfxq').html('')
	// cfxx()
	$('.cfjs1').show()
	$('.gsjs1').hide()
	$('.shouye1').hide()
	$('.nav-back3').show()
	clearTimeout(timer)
	backyqlm()
})


// 点击公司招聘

function getzw(id) {
	// var id;
	jqPostAjaxPromise1({
		url: "api/recruitment/get?id=" + id,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		var zhiwei1 = ''
		var p = ''
		var p1 = ''
		var zwGsjs = ''
		zhiwei1 += `<h2 class="gsjs-title">职位招聘</h2>
		<ul>
			<li>职位<span>${data.recruitment.rPosition}</span></li>
			<li>薪资<span>${data.recruitment.rSalary}</span></li>
			<li>学历<span>${data.recruitment.rEducation}</span></li>
			<li>经验<span>${data.recruitment.rWorkExperience}</span></li>
			<p>工作地点<span>${data.recruitment.rAddress}</span></p>
		</ul>
		<h2 class="gsjs-title zwjs">职位介绍</h2>
		<h4>岗位职责：</h4>
		<div class="gwzhize gwzz">
			
		</div>
		<h4 class="gwyaoqiu">岗位要求：</h4>
		<div class="gwzhize gwyq">
			
		</div>`
		var str = data.recruitment.rResponsibilities
		var zhize = str.split('|@|')
		for (var i in zhize) {
			p += `<p>${zhize[i]}</p>`
		}
		var str1 = data.recruitment.rRequirements
		var yaoqiu = str1.split('|@|')
		for (var i in yaoqiu) {
			p1 += `<p>${yaoqiu[i]}</p>`
		}

		// 职位招聘里面的公司介绍
		zwGsjs += `<div class="lgx"><img src="${data.company.cLogo}" alt="" class="zwzp-logo"></div>
		<div class="zwzp-code">
			<img src="${data.recruitment.rQrcord}" alt="">
			<p>扫码申请</p>
		</div>
		<h2 class="gsjs-title">公司介绍</h2>
		<p>${data.company.cName}</p>
		<div class="zwzp-content-right-js">
		${data.company.cIntroduction}
		</div>
		<div class="zwzp-content-right-gm">
			<p>规模<span>${data.company.cScale}</span></p>
			<p>描述<span>${data.company.cDescription}</span></p>
			<p>地址<span>${data.company.cAddress}</span></p>
			<p>电话<span>${data.company.cTelephone}</span></p>
			<p>在招职位${data.company.atThePosition}个</span></p>
		</div>`
		$('.zwzp-content-right').append(zwGsjs)
		$('.zwzp-content-left').html(zhiwei1)
		$('.gwyq').append(p)
		$('.gwzz').append(p1)
	})
}
// $('.zpxx1').show()
// $('.gsjs1').hide()
// $('.gwyq').html('')
// $('.gwzz').html('')
// $('.zwzp-content-right').html('')
$(document).on('click', '.gsjs-content-right .zp-ul li', function () {
	var id = $(this).attr('date-id')
	$('.zpxx1').show()
	$('.gsjs1').hide()
	getzw(id)
	$('.gwyq').html('')
	$('.gwzz').html('')
	$('.zwzp-content-right').html('')
	clearTimeout(timer)
	backyqlm()
	// function getzw() {
	// 	jqPostAjaxPromise1({
	// 		url: "api/recruitment/get?id=" + id,
	// 		type: "get",
	// 		data: {}
	// 	}).then(res => {
	// 		var data = res.msg
	// 		var zhiwei1 = ''
	// 		var p = ''
	// 		var p1 = ''
	// 		var zwGsjs = ''
	// 		zhiwei1 += `<h2 class="gsjs-title">职位招聘</h2>
	// 		<ul>
	// 			<li>职位<span>${data.recruitment.rPosition}</span></li>
	// 			<li>薪资<span>${data.recruitment.rSalary}</span></li>
	// 			<li>学历<span>${data.recruitment.rEducation}</span></li>
	// 			<li>经验<span>${data.recruitment.rWorkExperience}</span></li>
	// 			<p>工作地点<span>${data.recruitment.rAddress}</span></p>
	// 		</ul>
	// 		<h2 class="gsjs-title zwjs">职位介绍</h2>
	// 		<h4>岗位职责：</h4>
	// 		<div class="gwzhize gwzz">

	// 		</div>
	// 		<h4 class="gwyaoqiu">岗位要求：</h4>
	// 		<div class="gwzhize gwyq">

	// 		</div>`
	// 		var str = data.recruitment.rResponsibilities
	// 		var zhize = str.split('|@|')
	// 		for (var i in zhize) {
	// 			p += `<p>${zhize[i]}</p>`
	// 		}
	// 		var str1 = data.recruitment.rRequirements
	// 		var yaoqiu = str1.split('|@|')
	// 		for (var i in yaoqiu) {
	// 			p1 += `<p>${yaoqiu[i]}</p>`
	// 		}

	// 		// 职位招聘里面的公司介绍
	// 		zwGsjs += `<img src="${data.company.cLogo}" alt="" class="zwzp-logo">
	// 		<div class="zwzp-code">
	// 			<img src="${data.recruitment.rQrcord}" alt="">
	// 			<p>扫码申请</p>
	// 		</div>
	// 		<h2 class="gsjs-title">公司介绍</h2>
	// 		<p>${data.company.cName}</p>
	// 		<div class="zwzp-content-right-js">
	// 		${data.company.cIntroduction}
	// 		</div>
	// 		<div class="zwzp-content-right-gm">
	// 			<p>规模<span>${data.company.cScale}</span></p>
	// 			<p>描述<span>${data.company.cDescription}</span></p>
	// 			<p>地址<span>${data.company.cAddress}</span></p>
	// 			<p>电话<span>${data.company.cTelephone}</span></p>
	// 			<p>在招职位${data.company.atThePosition}个</span></p>
	// 		</div>`
	// 		$('.zwzp-content-right').append(zwGsjs)
	// 		$('.zwzp-content-left').html(zhiwei1)
	// 		$('.gwyq').append(p)
	// 		$('.gwzz').append(p1)
	// 	})
	// }
	// $('.zpxx1').show()
	// $('.gsjs1').hide()
	// getzw()
	// $('.gwyq').html('')
	// $('.gwzz').html('')
	// $('.zwzp-content-right').html('')
})


// 请求周边商户主页数据
function getsahnghuzy() {
	jqPostAjaxPromise1({
		url: "api/merchant/list?site=3",
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg.rows
		var li = ''
		for (var i in data) {
			var data2 = data[i].mchLabelVos
			if (data[i].mchType == 2) {
				li += `<li date-id="${data[i].mchId}" date-type="${data[i].mchType}">
						<img src="${data[i].mchImg}" alt="" class="xia">
						<div class="mask">
							<p>${data[i].mchName}</p>
							<div date-id="${data[i].mchId}" class="mask1">
								<span>￥${data[i].mchPerCapitaConsume}/人</span>
								<span>${data[i].mchAddress}</span>
							</div>
						</div>
					</li>`
			} else {
				li += `<li date-id="${data[i].mchId}" date-type="${data[i].mchType}">
						<img src="${data[i].mchImg}" alt="" class="dy">
						<p>${data[i].mchName}</p>
						<div class="xq" date-id="${data[i].mchId}">
							<span>￥${data[i].mchPerCapitaConsume}/人</span>
							<span>${data[i].mchAddress}</span>
						</div>
					</li>`
			}
		}
		$('.shanghu-left-content ul').html(li)

	}).catch(err => {
		console.log(err)
	})
}
getsahnghuzy();


// 点击商户列表弹层

var mchType = '';
$(document).on('click', '.shanghu-left-content ul li', function () {
	var id = $(this).attr('date-id')
	var type = $(this).attr('date-type')
	function getsahnghuzy() {
		jqPostAjaxPromise1({
			url: "api/merchant/list?site=3",
			type: "get",
			data: {}
		}).then(res => {
			var data = res.msg.rows
			var title = '';
			var lbt = '';
			var quan = '';
			var jiudian = '';
			var jdlbt = '';
			var jdquan = ''

			for (var i in data) {
				var data1 = data[i].merchantCoupons
				var data2 = data[i].merchantGoods
				var data3 = data[i].mchLabelVos
				if (type == 3 && id == data[i].mchId) {
					$('.tanceng').show()
					$('.tanceng .dy1').show()
					$('.tanceng .jiudian1').hide()
					if (data.length !== 0) {
						title += `<img src="${data[i].mchImg}" alt="">
					<div class="dy-xq">
						<p class="dy-city">${data[i].mchName}</p>
						<p class="dy-price">
							<span>￥${data[i].mchPerCapitaConsume}</span>/人
							<span></span>
							<span>休闲</span>
						</p>
						<div class="dy-dizhi">
						<i class="iconfont"><img src="./images/gps1.png"></i></i><span>${data[i].mchAddress}</span><br>
						<i class="iconfont"><img src="./images/watch.png"></i><span>${data[i].mchWeekdayBegin}-${data[i].mchWeekdayEnd}</span><br>
						<i class="iconfont"><img src="./images/iphone.png"></i><span>${data[i].mchTelephone}</span>
						</div>
					</div>`
					}
					for(var i in data1){
						console.log(data1)
						if (data1.length !== 0) {
							quan += `<div class="swiper-slide"><div class="dy-quan1"></div><div class="dy-content-quan">
								<div class="dy-quan-price">
									<span>￥</span>${data1[i].couponAmount}
								</div>
								<div class="dy-quan-js">
									<p>·单笔五折优惠${data1[i].couponUsageAmount}</p>
									<p>·有效期：即日起至${data1[i].couponTimeEnd}</p>
								</div>
							</div>
							<div class="dy-code">
								<img src="${data1[i].couponQrCode}" alt="">
								<p>扫码领取优惠</p>
							</div>
							</div>`
						}
					}
					for (var i in data2) {
						lbt += `<div class="swiper-slide">
						<img src="${data2[i].mgPicture}" alt="">
						<p>${data2[i].mgName}</p>
					</div>`
					}
				} else if (id == data[i].mchId) {
					var data1 = data[i].merchantCoupons
					$('.tanceng').show()
					$('.tanceng .jiudian1').show()
					$('.tanceng .dy1').hide()
					if (data.length !== 0) {
						jiudian += `<div class="jianbian"></div>
                    <img src="${data[i].mchImg}" alt="">
                    <p class="jiudian-name">${data[i].mchName}</p>
                    <div class="jiudian-xq">
                        <i class="iconfont"><img src="./images/gps1.png"></i><span>${data[i].mchAddress}</span><br>
                        <i class="iconfont"><img src="./images/watch.png"></i><span>${data[i].mchWeekdayBegin}-${data[i].mchWeekdayEnd}<br>
                        <i class="iconfont"><img src="./images/iphone.png"></i><span>${data[i].mchTelephone}</span>
					</div>`
					}
					// jiudian += `<div class="jianbian"></div>
					// <img src="${data[i].mchImg}" alt="">
					// <p class="jiudian-name">${data[i].mchName}</p>
					// <div class="jiudian-xq">
					//     <i class="iconfont icon-zuobiao1"></i><span>${data[i].mchAddress}</span><br>
					//     <i class="iconfont icon-shijian"></i><span>${data[i].mchWeekdayBegin}-${data[i].mchWeekdayEnd}<br>
					//     <i class="iconfont icon-dianhua"></i><span>${data[i].mchTelephone}</span>
					// </div>`
					for(var i in data1){
						if (data1.length !== 0) {
							jdquan += `<div class="swiper-slide"><img src="./images/jd-bg1.png" alt=""><div class="jiudian-quan">
						<div class="quan-price">
							<span>￥</span> ${data1[i].couponAmount}
						</div>
						<div class="jiudian-content">
							<p>·单笔五折优惠${data1[i].couponUsageAmount}</p>
							<p>·有效期：即日起至${data1[i].couponTimeEnd}</p>
						</div>
						<div class="code">
							<img src="${data1[i].couponQrCode}" alt="">
							<p>扫码领取优惠</p>
						</div>
					</div>
					</div>`
						}
					}
				// 	if (data1.length !== 0) {
				// 		jdquan += `<div class="swiper-slide"><img src="./images/jd-bg1.png" alt=""><div class="jiudian-quan">
				// 	<div class="quan-price">
				// 		<span>￥</span> ${data1[i].couponAmount}
				// 	</div>
				// 	<div class="jiudian-content">
				// 		<p>·单笔五折优惠${data1[i].couponUsageAmount}</p>
				// 		<p>·有效期：即日起至${data1[i].couponTimeEnd}</p>
				// 	</div>
				// 	<div class="code">
				// 		<img src="${data1[i].couponQrCode}" alt="">
				// 		<p>扫码领取优惠</p>
				// 	</div>
				// </div>
				// </div>`
				// 	}
					// 	jdquan += `<img src="./images/jd-bg1.png" alt=""><div class="jiudian-quan">
					// 	<div class="quan-price">
					// 		<span>￥</span> ${data1[0].couponAmount}
					// 	</div>
					// 	<div class="jiudian-content">
					// 		<p>·单笔五折优惠${data1[0].couponUsageAmount}</p>
					// 		<p>·有效期：即日起至${data1[0].couponTimeEnd}</p>
					// 	</div>
					// 	<div class="code">
					// 		<img src="${data1[0].couponQrCode}" alt="">
					// 		<p>扫码领取优惠</p>
					// 	</div>
					// </div>`
					for (var i in data2) {
						jdlbt += `<div class="swiper-slide">
						<img src="${data2[i].mgPicture}" alt="">
						</div>`
					}
				}
			}
			$('.dy-title').append(title)
			$('.swiper-container2 .swiper-wrapper').append(lbt)
			$('.dy-quan .swiper-container-jiudian .swiper-wrapper').append(quan)
			$('.jiudian .tou').html(jiudian)
			$('.jiudian .swiper-container1 .swiper-wrapper').html(jdlbt)
			$('.jiudian-foot .swiper-container-jiudian .swiper-wrapper').html(jdquan)
    		var swiper = new Swiper('.swiper-container-jiudian',{
				spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination1',
                clickable: true,
            },
            observer: true,
            observeParents: true,
			});
		}).catch(err => {
			console.log(err)
		})
	}
	getsahnghuzy();
	clearTimeout(timer)
	backyqlm()
})


// 周边商户导航栏的点击事件
function getshanghu(type, name) {
	jqPostAjaxPromise({
		url: "api/merchant/list?site=3&mchType=" + type + "&mchName=" + name,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg.rows
		var li = ''
		for (var i in data) {
			if (data[i].mchType == 2) {
				li += `<li date-id="${data[i].mchId}" date-type="${data[i].mchType}">
						<img src="${data[i].mchImg}" alt="" class="xia">
						<div class="mask">
							<p>${data[i].mchName}</p>
							<div>
								<span>￥${data[i].mchPerCapitaConsume}/人</span>
								<span>${data[i].mchAddress}</span>
							</div>
						</div>
					</li>`
			} else {
				li += `<li date-id="${data[i].mchId}" date-type="${data[i].mchType}">
						<img src="${data[i].mchImg}" alt="" class="dy">
						<p>${data[i].mchName}</p>
						<div class="xq">
							<span>￥${data[i].mchPerCapitaConsume}/人</span>
							<span>${data[i].mchAddress}</span>
						</div>
					</li>`
			}
		}
		$('.shanghu-left-content ul').append(li)
	}).catch(err => {
		console.log(err)
	})
}
getshanghu('', '');


$(document).on('click', '.shanghu-nav ul li', function () {
	$('.shanghu-left-content ul').html('')
	var type = $(this).attr('date-type')
	mchType = type;
	getshanghu(type, '');
	clearTimeout(timer)
	backyqlm()
})

// 周边商户搜索
$(document).on('click', '.sousuo .search2', function () {
	$('.shanghu-left-content ul').html('')
	var val = $(this).parent().find('input').val()
	getshanghu(mchType, val);
	clearTimeout(timer)
	backyqlm()
})


var divTop = $('.shanghu-nav').eq(1).offset().top
$('.shanghu-left').scroll(function () {
	var scroll = $(this).scrollTop()
	if (scroll >= 285) {
		$('.shanghu-nav').eq(1).css({ position: 'fixed', top: '35px', left: '30px', zIndex: 10 })
		$('.shanghu-left-content').css({ marginTop: '134px' })
	} else {
		$('.shanghu-nav').eq(1).css({ position: 'static', zIndex: 0 })
		$('.shanghu-left-content').css({ marginTop: '20px' })
	}
	

})




$(document).on('click', '.swiper-container4 .swiper-slide', function () {
	var index = $(this).index()
	$('.swiper-container4 .swiper-slide .zezhao.active5').removeClass('active5')
	$('.swiper-container4 .swiper-slide .zezhao').eq(index).addClass('active5')
	clearTimeout(timer)
	backyqlm()
})


$(document).on('click', '.swiper-container-zhiweilbt .swiper-slide', function () {
	var id = $(this).attr('data-id')
	$('.zpxx1').show()
	$('.gsjs1').hide()
	getzw(id)
	$('.gwyq').html('')
	$('.gwzz').html('')
	$('.zwzp-content-right').html('')
	$('.shouye1').hide()
	$('.nav-back2').show()
	clearTimeout(timer)
	backyqlm()
})


// 3分钟无点击回到园区联盟

var timer
function backyqlm(){
	timer = setTimeout(function(){
		$('.shouye1').fadeIn(100)
		$('.shanghu2').fadeOut()
		$('.srfp').fadeOut()
		$('.gwgs1').fadeOut()
		$('.gzjy').fadeOut()
		document.querySelectorAll('.video1').forEach(item => {
			item.pause()
		})
		$('.nav-back').fadeOut()
	},180000)
}