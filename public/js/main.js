;(function () {

	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');

	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');

	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){

		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	var tabs = function() {

		// Auto adjust height
		$('.gtco-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.gtco-tab-content-wrap'),
					tabHeight = $('.gtco-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.gtco-tab-content-wrap'),
						tabHeight = $('.gtco-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);

		};

		autoHeight();


		// Click tab menu
		$('.gtco-tab-nav a').on('click', function(event){

			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.gtco-tab-nav li').removeClass('active');

			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.gtco-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#gtco-counter').length > 0 ) {
			$('#gtco-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};


	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		tabs();
		goToTop();
		loaderPage();
		counterWayPoint();
	});


}());

var member = new Vue({
    el:'#member',
    data:{
        members:[
	    {
                name:'谢帅',
                src:'http://of8t6pu0g.bkt.clouddn.com/team2.jpg',
                text:'14级，中南大学图灵班首任班长，python与机器学习，实验室早期负责人与建设者（献花）',
                url:''
            },
            {
                name:'JustZht',
                src:'http://of8t6pu0g.bkt.clouddn.com/team3.jpg',
                text:'又叫萌天，14级，ios与unity开发，目前在百度做ios/unity开发，个人主页：justzht.com',
                url:'http://www.justzht.com/'

            },
	    {
                name:'鲁鸣鸣 教授',
                src:'http://of8t6pu0g.bkt.clouddn.com/team1.jpg',
                text:'中南大学副教授，Citrix公司前高级工程师，研究计算机网络与信息安全',
                url:''
            },
	    {
                name:'张伏旭',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-zhangfuxu.jpg',
                text:'13级，苹果移动应用创新赛一等奖并与苹果CEU库克会面，目前研究人工智能',
                url:''

            },
	    {
                name:'Zpnaruto',
                src:'http://of8t6pu0g.bkt.clouddn.com/team6.jpg',
                text:'14级，又叫gay平，在腾讯做前端实习。个人主页：www.zpnaruto.cn/',
                url:''
	    },
            {
                name:'Bugzhang',
                src:'http://of8t6pu0g.bkt.clouddn.com/team4.jpg',
                text:'崇哥，14级，在深信服做前端，个人主页：bugzhang.com',
                url:'http://www.bugzhang.com/'

            },
            {
                name:'JasonVon',
                src:'http://of8t6pu0g.bkt.clouddn.com/team5.jpg',
                text:'14级，升华网前总监（后来大家都叫他“总监”），百度测试，同时熟悉php等后端技术。',
                url:''
            },
	    {
                name:'jxpxxzj',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-xiaozijin.jpg',
                text:'jx菊苣！真の全栈！擅长 C# 与 JavaScript，个人主页:www.jxpxxzj.cn',
                url:'http://jxpxxzj.oschina.io/'
            },
            {
                name:'Equim',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-wangkangchen.jpg',
                text:'Node.js 与 golang 后端，运维，偶尔写 C#，主页：https://ekyu.moe/',
                url:'https://ekyu.moe/'
            },
	    {
                name:'Nastul',
                src:'http://of8t6pu0g.bkt.clouddn.com/team8.jpg',
                text:'Android&php&机器学习，云麓谷前移动组开发负责人，校乐队电音吉他手',
                url:''

            },
            {
                name:'XFeiF',
                src:'http://of8t6pu0g.bkt.clouddn.com/team7.jpg',
                text:'算法，Android，个人主页：http://x-fei.me/。',
                url:''

            },
            {
                name:'OceanJaya',
                src:'http://of8t6pu0g.bkt.clouddn.com/team9.jpg',
                text:'Data Miner，Pythoner，个人主页：http://oceanjaya.com/',
                url:''
            },
            {
                name:'长门有希',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-suzhihua.jpg',
                text:'Web，Linux，Win32，专注改配置和造轮子，主页：yuki-nagato.com',
                url:'https://www.yuki-nagato.com/'
            },
            {
                name:'宗健平',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-zongjianpin.jpg',
                text:'分布式，data miner，pythoner',
                url:''
            },
            {
                name:'Linvon',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-wanglinfen.jpg',
                text:'ACMer，c++，php后端开发，开发之余喜欢足球',
                url:''
            },
            {
                name:'ByeBir',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-lizhuo.jpg',
                text:'前端开发与.net后端开发，对机器学习充满兴趣，爱好射箭',
                url:''
            },
            {
                name:'Phoenix',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-Phoenix.jpg',
                text:'iOS开发与算法爱好者',
                url:''
            },
            {
                name:'麦宇翔',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-maiyuxiang.jpg',
                text:'移动组，iOS开发，爱好探险',
                url:''
            },
            {
                name:'崔心雨',
                src:'http://of8t6pu0g.bkt.clouddn.com/team.cuixinyu',
                text:'心自爱云间，与君共前端。醉起抚白衫，率舞更翩跹',
                url:''
            },
            {
                name:'Charlieyang',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-yangtianchen.jpg',
                text:'研发组，移动开发',
                url:''
            },
            {
                name:'Aknife',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-zengdejiao.jpg',
                text:'php，objective-c爱好者',
                url:''
            },
            {
                name:'Visual Artist',
                src:'http://of8t6pu0g.bkt.clouddn.com/team-huoyongzhen.jpg',
                text:'万能的霍小猫',
                url:''
            },
            {
                name:'加入我们',
                src:'http://of8t6pu0g.bkt.clouddn.com/team11.jpg',
                text:'我们在寻找下一个志在未来的你!',
                url:'http://hr.csuapple.com/'
            }
        ]
    }
});
console.log('  ____ ____  _   _   _    ____  ____  _     _____ ');
console.log(' / ___/ ___|| | | | / \\  |  _ \\|  _ \\| |   | ____|');
console.log('| |   \\___ \\| | | |/ _ \\ | |_) | |_) | |   |  _|');
console.log('| |___ ___) | |_| / ___ \\|  __/|  __/| |___| |___');
console.log(' \\____|____/ \\___/_/   \\_\\_|   |_|   |_____|_____|');
console.log('一张网页，要通过怎样的过程，才能抵达用户面前？');
console.log('欢迎加入苹果实验室，创造不可能');
console.log('优秀的人应该在一起享受geek');
console.log('请在申请的自我介绍中添加：console推荐');
