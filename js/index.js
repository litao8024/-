var runPage, interval, autoPlay;
autoPlay = function(to) {
	clearTimeout(interval);
	console.log(to)
	if(to == 2) {
		console.log(1)
		$('.contain1').find('.img1').delay(500).animate({
			left: '0'
		}, 1500);
		$('.contain1').find('.img3').delay(500).animate({
			right: '50%'
		}, 3000,);
		$('.contain1').find('.first-left').delay(500).animate({
			top: '0%'
		}, 3500,);
		$('.contain1').find('.one').css({
			opacity: 1,
			transtion: 'all 2s .5s'
		});
		$('.contain1').find('.tow').delay(500).animate({
			left: '0%'
		}, 4000,);
		$('.contain1').find('.first-bottom').delay(500).animate({
			bottom: '0%'
		}, 4500,);
		interval = setTimeout(function() {
			console.log(1)
			runPage.go(to);
			$('.contain1').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1500,);
			$('.contain1').find('.img3').delay(500).animate({
				right: '-120%'
			}, 1500,);
			$('.contain1').find('.first-left').delay(500).animate({
				top: '-500%'
			}, 1500,);
			$('.contain1').find('.one').css({
				opacity: 0,
				transtion: 'all 1s .5s'
			});
			$('.contain1').find('.tow').delay(500).animate({
				left: '1500%'
			}, 1500,);
			$('.contain1').find('.first-bottom').delay(500).animate({
				bottom: '-500%'
			}, 1500,);
		}, 10000);
	}else if(to == 3) {
		$('.contain2').find('.img1').delay(500).animate({
			left: '0'
		}, 1000,);
		// 第一种动画
//		$('.contain2').find('.beijian').fadeIn(1500);
//		$('.contain2').find('.page2-div').animate({
//			right:'10%'
//		},1500,)
////		页面内切换
//		interval = setTimeout(function(){
//			document.getElementsByClassName('page2-div')[0].style.display='none';
//			$('.contain2').find('.page23').animate({
//				height:'33%',
//				left:"50%",
//				top:"0",
//			},1500,)
//			document.getElementsByClassName('page23')[0].style.transform = 'scale(1)';
//			$('.contain2').find('.page21').animate({
//				height:'33%',
//				left:"50%",
//				top:"0",
//			},1500,)
//			document.getElementsByClassName('page21')[0].style.transform = 'scale(1)';
//			$('.contain2').find('.page22').animate({
//				height:'33%',
//				left:"50%",
//				top:"0",
//			},1500,)
//			document.getElementsByClassName('page22')[0].style.transform = 'scale(1)';
//			$('.contain2').find('.page20').fadeIn(1500);
//			$('.contain2').find('.hiddle').fadeIn(1500);
//		}, 5000);
//		//切换页面
//		interval = setTimeout(function(){
//			runPage.go(to);
//			document.getElementsByClassName('page23')[0].style.transform = 'scale(0.8)';
//			document.getElementsByClassName('page21')[0].style.transform = 'scale(0.8)';
//			document.getElementsByClassName('page22')[0].style.transform = 'scale(0.8)';
//			$('.contain2').find('.img1').delay(500).animate({
//				left: '-120%'
//			}, 1500,);
//			$('.contain2').find('.page23').delay(500).animate({
//				left: '25%',
//				height:'30%',
//				top:'50px'
//			}, 1500,);
//			$('.contain2').find('.page21').delay(500).animate({
//				left: '35%',
//				height:'30%'
//			}, 1500,);
//			$('.contain2').find('.psge22').delay(500).animate({
//				left: '36%',
//				height:'30%'
//			}, 1500,);
//			$('.contain2').find('.page2-div').delay(500).animate({
//				right: '-120%',
//			}, 1500,);
////			document.getElementById('page2TxtShow').innerHTML = ' ';
//			document.getElementsByClassName('beijian')[0].style.display='none';
//			document.getElementsByClassName('page20')[0].style.display='none';
//			document.getElementsByClassName('hiddle')[0].style.display='none';
//		}, 10000);
		//第二种
		$('.Page2ImgLeft').find('img').delay(500).animate({
			marginTop: '20%'
		}, 1500);
		$('.Page2Img-bottom').find('img').delay(500).animate({
			marginTop: '30'
		}, 1500);
		$('.Page2Img-top').delay(500).fadeIn();
		interval = setTimeout(function() {
			runPage.go(to);
			$('.contain2').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1500);
			$('.Page2ImgLeft').find('img').delay(500).animate({
				marginTop: '-200%'
			}, 1500);
			$('.Page2Img-bottom').find('img').delay(500).animate({
				marginTop: '100%'
			}, 1500);
		}, 10000);
	}else if(to == 4) {
		console.log(3);
		//第三页内容
//		document.getElementsByClassName('page2-div')[0].style.display='block';
		document.getElementsByClassName('Page2Img-top')[0].style.display = 'none';
		//文字的书写
		var page2Txt = document.getElementById('page2Txt');
		var page2TxtShow = document.getElementById('page2TxtShow');
		var i = 0;
		timer = setInterval(function() {
			page2TxtShow.innerHTML = page2Txt.innerHTML.substring(0, i);
			i++;
			if(page2TxtShow.innerHTML == page2Txt.innerHTML) {
				clearInterval(timer);
			};
		}, 300);
		//进入动画
		$('.contain3').find('p').delay(500).animate({
			left: '0'
		}, 1000,);
		interval = setTimeout(function() {
			runPage.go(to);
			$('.contain3').find('p').delay(500).animate({
				left: '-120%'
			}, 1500,);
		}, 10000);
	}else if(to == 5) {
		console.log(4)
		$('.contain4').find('.img1').delay(500).animate({
			left: '0%'
		}, 1500,);
		//图片移动动画
		var i =-1;
		var m = 0;
		var Page4time = setInterval(function() {
			console.log(i)
			console.log(m)
			//进度条
			document.getElementsByClassName('ProgressBar')[0].style.width = '0%';
			for(k=0;k<4;k++){
				document.getElementsByClassName('yuan')[k].style.background = '#7c8897';
				document.getElementsByClassName('p')[k].style.display = 'none';
				document.getElementsByClassName('page4-content')[k].style.display = 'none';
			}
			console.log(m)
			document.getElementsByClassName('yuan')[m].style.background = 'white';
			if (m<4) {
				$('.middle-right').find('.p' + m).fadeIn(2900);
				$('.middle-right').find('.page4-content' +m).fadeIn(2900);
				m = m+1>=4?0:m+1;
			}
			i = i+1;
			//左侧
			console.log(document.getElementsByClassName('left' + i)[0])
			document.getElementsByClassName('left' + i)[0].setAttribute('style','position: absolute;');
			$('.contain4').find('.left' + i).delay(500).animate({
				left: '100%'
			}, 2000,);
			//右侧
			console.log(i)
			document.getElementsByClassName('right' + i)[0].setAttribute('style','position: absolute;');
			$('.contain4').find('.right' + i).delay(500).animate({
				left: '0%'
			}, 2000,);
			if (i + 1 == 8) {
				i= -1;
			}
			$('.page4-middle').find('.ProgressBar').delay(500).animate({
				width: '30%'
			}, 1500,);
		}, 3500);
		//离开
		interval = setTimeout(function() {
			clearInterval(Page4time);
			runPage.go(to);
			$('.contain4').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1500,);
			for (var i=0;i<8;i++) {
				document.getElementsByClassName('img')[i].style.left = '-100%';
				document.getElementsByClassName('imgLeft')[i].setAttribute('style','left: 0%;position: ;');
			}
		}, 10000);
	} else if(to == 6){
		$('.contain5').find('.img1').delay(500).animate({
			left: '0',
		}, 1000,);
//		$('.contain5').find('.page5-top').animate({
//			left:'-120%'
//		},5000,)
//		var page5Time = setInterval(function(){
//			document.getElementsByClassName('page5-top')[0].setAttribute('style','position: relative;top: 110px;width: 300%;margin-left: 150px;left: 0%;');
//			$('.contain5').find('.page5-top').animate({
//				left:'-120%'
//			},4800,)
//		},4900)
		interval = setTimeout(function() {
//			clearInterval(page5Time);
			runPage.go(to);
			$('.contain5').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1000,);
			$('.contain5').find('.page5-top').animate({
				left:'0%'
			},1000,)
		}, 10000);
	}else if(to == 7){
		$('.contain6').find('.img1').delay(500).animate({
			left: '0',
		}, 1000,);
		var q = 0
		var Page6Lunbo = setInterval(function(){
			change(true);
			var SpanLength = document.getElementsByClassName('span');
			for (var i=0;i<SpanLength.length;i++) {
				SpanLength[i].style.display = 'none';
			}
			$('.page6bottom').find('.span' + q).fadeIn(1000);
			q=q+1>4?0:q+1;
		},2000)
		interval = setTimeout(function() {
			clearInterval(Page6Lunbo);
			runPage.go(to);
			$('.contain6').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1000,);
		}, 10000);
	}else if(to == 8){
		$('.contain7').find('.img1').delay(500).animate({
			left: '0',
		}, 1000,);
		interval = setTimeout(function() {
			runPage.go(to);
			$('.contain7').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1000,);
		}, 10000000);
	}

}
runPage = new FullPage({
	id: 'pageContain',
	slideTime: 800,
	effect: {
		transform: {
			translate: 'Y',
			scale: [0, 1],
			rotate: [0, 0]
		},
		opacity: [0, 1]
	},
	//	mode: 'wheel,touch,nav:navBar',
	//	easing: 'ease',
	mode: 'wheel,touch,nav:navBar',
	easing: 'ease-out',
	callback: function(index, thisPage) {
		index = index + 1 > 8 ? 1 : index + 1;
		autoPlay(index);
		console.log('滚动到了第 ' + (index) + ' 屏');
	}
});
interval = setTimeout(function() {
	runPage.go(runPage.thisPage() + 1);
}, 5000);
//第一页 星空特效
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	w = canvas.width = window.innerWidth,
	h = canvas.height = window.innerHeight,

	hue = 217,
	stars = [],
	count = 0,
	maxStars = 1300; //星星数量

var canvas2 = document.createElement('canvas'),
	ctx2 = canvas2.getContext('2d');
	canvas2.width = 100;
	canvas2.height = 100;
var half = canvas2.width / 2,
	gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
	gradient2.addColorStop(0.025, '#CCC');
	gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
	gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
	gradient2.addColorStop(1, 'transparent');

	ctx2.fillStyle = gradient2;
	ctx2.beginPath();
	ctx2.arc(half, half, half, 0, Math.PI * 2);
	ctx2.fill();
function random(min, max) {
	if(arguments.length < 2) {
		max = min;
		min = 0;
	}
	if(min > max) {
		var hold = max;
		max = min;
		min = hold;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function maxOrbit(x, y) {
	var max = Math.max(x, y),
		diameter = Math.round(Math.sqrt(max * max + max * max));
	return diameter / 2;
	//星星移动范围，值越大范围越小，
}
var Star = function() {

	this.orbitRadius = random(maxOrbit(w, h));
	this.radius = random(60, this.orbitRadius) / 8;
	//星星大小
	this.orbitX = w / 2;
	this.orbitY = h / 2;
	this.timePassed = random(0, maxStars);
	this.speed = random(this.orbitRadius) / 50000;
	//星星移动速度
	this.alpha = random(2, 10) / 10;
	count++;
	stars[count] = this;
}
Star.prototype.draw = function() {
	var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
		y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
		twinkle = random(10);

	if(twinkle === 1 && this.alpha > 0) {
		this.alpha -= 0.05;
	} else if(twinkle === 2 && this.alpha < 1) {
		this.alpha += 0.05;
	}

	ctx.globalAlpha = this.alpha;
	ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
	this.timePassed += this.speed;
}
for(var i = 0; i < maxStars; i++) {
	new Star();
}
function animation() {
	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 0.5; //尾巴
	ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
	ctx.fillRect(0, 0, w, h)
	ctx.globalCompositeOperation = 'lighter';
	for(var i = 1, l = stars.length; i < l; i++) {
		stars[i].draw();
	};
	window.requestAnimationFrame(animation);
}
animation();
//第五页的轮播
var wrap = document.getElementById("wrap");  // 大盒子
var slider = document.getElementById("slide");
var lis = slider.getElementsByTagName("li");  // 所有要操作的盒子
//  存储了每个图片的信息
var json = [
    {   //  1
        width:100,
        top:20,
        left:50,
        opacity:20,
        z:2
    },
    {  // 2
        width:200,
        top:70,
        left:0,
        opacity:80,
        z:3
    },
    {   // 3
        width:400,
        top:100,
        left:200,
        opacity:100,
        z:4
    },
    {  // 4
        width:200,
        top:70,
        left:600,
        opacity:80,
        z:3
    },
    {   //5
        width:100,
        top:20,
        left:750,
        opacity:20,
        z:2
    }
];
// 函数节流
//var Page6Lunbo = setInterval(function(){
//	change(true);
//},2000)
function change(flag) {
    //  来判断
    if(flag){
        // 把 最后一个json 删除   并且把最后一个添加到json 第一个位置
         json.unshift(json.pop());
    }else{
        //   移除第一个   放到json 最后一个
        json.push(json.shift());
    }
    for(var i=0;i<json.length; i++){
        animate(lis[i],{
            width: json[i].width,
            top: json[i].top,
            left: json[i].left,
            opacity:json[i].opacity,
            zIndex:json[i].z
        },function(){ jieliu = true;})  // 回调函数是等动画执行完毕  才行
    }
}