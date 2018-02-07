var runPage, interval, autoPlay;
autoPlay = function(to) {
	clearTimeout(interval);
	console.log(to)
	if(to == 1) {
		if(localStorage.getItem('page1') == '1'){
			document.getElementsByClassName('first')[0].style.display = 'none';
			document.getElementById('canvas').style.display = 'none';
			$('.contain1').find('.img1').delay(6000).animate({
				left: '0'
			},1500);
			$('.contain1').find('.img3').delay(6000).animate({
				right: '50%'
			}, 3000);
			$('.contain1').find('.first-left').delay(6000).animate({
				top: '0%'
			}, 3500);
			$('.contain1').find('.one').css({
				opacity: 1,
				transtion: 'all 2s 6.5s'
			});
			$('.contain1').find('.tow').delay(6000).animate({
				left: '0%'
			}, 4000);
			$('.contain1').find('.first-bottom').delay(6000).animate({
				bottom: '0%'
			}, 4500);
			page1time = setTimeout(function() {
				$('.first').fadeIn(4000);
				$('.txt').fadeOut(1000);
				$('#canvas').fadeIn(4000)
				$('#page1Loding').fadeOut(1000);
				localStorage.setItem('page1','2')
				clearInterval(page1time);
			},4000);
		}else{
			$('.contain1').find('.img1').delay(500).animate({
				left: '0'
			},1500);
			$('.contain1').find('.img3').delay(1000).animate({
				right: '50%'
			}, 3000);
			$('.contain1').find('.first-left').delay(1000).animate({
				top: '0%'
			}, 3500);
			$('.contain1').find('.one').css({
				opacity: 1,
				transtion: 'all 2s .5s'
			});
			$('.contain1').find('.tow').delay(1000).animate({
				left: '0%'
			}, 4000);
			$('.contain1').find('.first-bottom').delay(1000).animate({
				bottom: '0%'
			}, 4500);
		}
		interval = setTimeout(function() {
			runPage.go(to);
			$('.contain1').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1500);
			$('.contain1').find('.img3').delay(500).animate({
				right: '-120%'
			}, 1500);
			$('.contain1').find('.first-left').delay(500).animate({
				top: '-500%'
			}, 1500);
			$('.contain1').find('.one').css({
				opacity: 0,
				transtion: 'all 1s .5s'
			});
			$('.contain1').find('.tow').delay(500).animate({
				left: '1500%'
			}, 1500);
			$('.contain1').find('.first-bottom').delay(500).animate({
				bottom: '-500%'
			}, 1500);
		},10000);
	}else if(to == 2){
		$('.contain9').find('.img1').delay(500).animate({
			left: '0',
		}, 1000);
		$('.contain9').find('.page9Middle1').delay(500).addClass('animated bounceInLeft');
		$('.contain9').find('.page9-1').delay(1000).animate({
			width: '100px',
		},1000);
		$('.contain9').find('.page9-2').delay(3000).animate({
			width: '100px',
		},1000);
		$('.contain9').find('.page9-3').delay(5000).animate({
			width: '100px',
		},1000);
		$('.contain9').find('.page9-4').delay(7000).animate({
			width: '100px',
		},1000);
		$('.contain9').find('.page9Engineer').delay(2000).fadeIn(10).addClass('animated bounceInLeft');
		$('.contain9').find('.page9Spare').delay(4000).fadeIn(10).addClass('animated bounceInLeft');
		$('.contain9').find('.page9Service').delay(6000).fadeIn(10).addClass('animated bounceInLeft');
		$('.contain9').find('.page9Manufacturer').delay(8000).fadeIn(10).addClass('animated bounceInLeft');
		$('.contain9').find('.page9-5').delay(9000).animate({
			width:'200px',
		}, 1000);
		$('.contain9').find('.page9Right').delay(10000).fadeIn(10).addClass('animated bounceInDown');
		$('.contain9').find('.page9bottom').delay(11000).animate({
			left: '0%',
		}, 1000);
		var page2V = 0;
		var page2Time = setInterval(function(){
			page2V = page2V + 5;
			page2Value = page2V.toString() + 'deg';
			document.getElementsByClassName('page9Middle')[0].style.transform = "rotate(" + page2Value + ")";
			if(page2V == 360){
				page2V = 0;
			}
		},50)
		interval = setTimeout(function() {
			clearTimeout(page2Time);
			page2V = 0;
			runPage.go(to);
			document.getElementsByClassName('page9Middle')[0].style.transform = "rotate(0deg)";
			$('.contain9').find('.img1').delay(500).animate({
				left: '-120%'
			},500);
			$('.contain9').find('.page9Middle1').removeClass('animated bounceInLeft');
			$('.contain9').find('.page9-1').delay(500).animate({
				width: '0',
			},500);
			$('.contain9').find('.page9-2').delay(500).animate({
				width: '0',
			},500);
			$('.contain9').find('.page9-3').delay(500).animate({
				width: '0',
			},500);
			$('.contain9').find('.page9-4').delay(500).animate({
				width: '0',
			},500);
			$('.contain9').find('.page9-5').delay(6000).animate({
				width:'0',
			},500);
			$('.contain9').find('.page9Engineer').delay(500).fadeOut(10).removeClass('animated bounceInLeft');
			$('.contain9').find('.page9Spare').delay(500).fadeOut(10).removeClass('animated bounceInLeft');
			$('.contain9').find('.page9Service').delay(500).fadeOut(10).removeClass('animated bounceInLeft');
			$('.contain9').find('.page9Manufacturer').delay(500).fadeOut(10).removeClass('animated bounceInLeft');
			$('.contain9').find('.page9Right').delay(500).fadeOut(10).removeClass('animated bounceInDown');
			$('.contain9').find('.page9bottom').delay(500).animate({
				left: '-200%',
			}, 1000);
		},15000);
	}else if(to == 3) {
		$('.contain2').find('.img1').delay(500).animate({
			left: '0'
		}, 1000);
		$('.Page2ImgRight').find('.Page2Img-top').delay(1000).fadeIn(500).addClass('animated bounceInLeft');
		$('.Page2ImgLeft').find('img').delay(2000).animate({
			bottom: '0%'
		}, 1500);
		$('.Page2Img-bottom').delay(2000).fadeIn(2000);
		interval = setTimeout(function() {
			runPage.go(to);
			$('.contain2').find('.img1').delay(500).animate({
				left: '-120%'
			}, 500);
			$('.Page2ImgLeft').find('img').delay(500).animate({
				bottom: '-200%'
			}, 500);
			$('.Page2ImgRight').find('.Page2Img-top').delay(1000).fadeOut(500).removeClass('animated bounceInLeft');
			$('.Page2Img-bottom').delay(500).fadeOut(500)
		},8000);
	}else if(to == 4) {
		//第三页内容
		$('.contain3').find('.img1').delay(500).animate({
			left: '0'
		}, 1500);
		//进入动画
		$('.contain3').find('p').delay(500).animate({
			left: '0'
		}, 1000);
		$('.contain3').find('#page2TxtShow').delay(3000).fadeIn(500).addClass('animated rubberBand');
		interval = setTimeout(function() {
			runPage.go(to);
			$('.contain3').find('.img1').delay(500).animate({
				left: '-120%'
			}, 500);
			$('.contain3').find('p').delay(500).animate({
				left: '-200%'
			}, 500);
			$('.contain3').find('#page2TxtShow').delay(500).fadeOut(500).removeClass('animated rubberBand');
		},8000);
	}else if(to == 5) {
		$('.contain4').find('.img1').delay(500).animate({
			left: '0%'
		}, 1500);
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
			}, 2000);
			//右侧
			console.log(i)
			document.getElementsByClassName('right' + i)[0].setAttribute('style','position: absolute;display: block;');
			$('.contain4').find('.right' + i).delay(500).animate({
				left: '0%'
			}, 2000);
			if (i + 1 == 8) {
				i= -1;
			}
			$('.page4-middle').find('.ProgressBar').delay(500).animate({
				width: '30%'
			},2000);
		},3000);
		//离开
		interval = setTimeout(function() {
			clearInterval(Page4time);
			for (var i=0;i<7;i++) {
				document.getElementsByClassName('img')[i].setAttribute('style','position: absolute;left: -100%;display: none;');
				document.getElementsByClassName('imgLeft')[i].setAttribute('style','left: 0%;position: ;');
			}
			runPage.go(to);
			$('.contain4').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1500);
			for(k=0;k<4;k++){
				document.getElementsByClassName('yuan')[k].style.background = '#7c8897';
				document.getElementsByClassName('p')[k].style.display = 'none';
				document.getElementsByClassName('page4-content')[k].style.display = 'none';
			}
			document.getElementsByClassName('right0')[0].setAttribute('style','position: absolute; display: block; left: 0%;');
		},20000);
	} else if(to == 6){
		$('.page5').find('.img1').delay(500).animate({
			left: '0',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img0').delay(500).animate({
			left: '11%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img1').delay(500).animate({
			left: '23%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img2').delay(500).animate({
			left: '34%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img3').delay(500).animate({
			right: '48%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img4').delay(500).animate({
			right: '36%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img5').delay(500).animate({
			right: '27%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img6').delay(500).animate({
			right: '14%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img7').delay(1500).animate({
			left: '7%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img8').delay(1500).animate({
			left: '18%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img9').delay(1500).animate({
			left: '30%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img10').delay(1500).animate({
			left: '41%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img11').delay(1500).animate({
			left: '52%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img12').delay(1500).animate({
			left: '64%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img13').delay(1500).animate({
			left: '74%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img14').delay(1500).animate({
			left: '85%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img15').delay(2500).animate({
			right: '82%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img16').delay(3500).animate({
			right: '21%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img17').delay(2500).animate({
			right: '71%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img18').delay(2500).animate({
			right: '59%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img19').delay(2500).animate({
			right: '46%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img20').delay(2500).animate({
			right: '37%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img21').delay(2500).animate({
			right: '24%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img22').delay(2500).animate({
			right: '13%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img23').delay(3500).animate({
			left: '18%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img24').delay(3500).animate({
			left: '29%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img25').delay(3500).animate({
			left: '42%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img26').delay(3500).animate({
			right: '42%',
		}, 1000);
		$('.contain5MilddleImg').find('.Page5Img27').delay(3500).animate({
			right: '31%',
		}, 1000);
		interval = setTimeout(function() {
			runPage.go(to);
			$('.page5').find('.img1').delay(2000).animate({
				left: '-120%'
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img0').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img1').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img2').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img3').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img4').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img5').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img6').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img7').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img8').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img9').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img10').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img11').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img12').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img13').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img14').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img15').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img16').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img17').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img18').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img19').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img20').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img21').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img22').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img23').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img24').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img25').delay(500).animate({
				left: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img26').delay(500).animate({
				right: '-200%',
			}, 1000);
			$('.contain5MilddleImg').find('.Page5Img27').delay(500).animate({
				right: '-200%',
			}, 1000);
		},8000);
	}else if(to == 7){
		$('.page6Content').find('.page6Title').delay(1000).fadeIn(500).addClass('animated bounceInLeft');
		$('.page6Content').find('.page6LeftContent').delay(2000).fadeIn(500).addClass('animated bounceInDown');
		$('.page6Content').find('.page6Left1').delay(3000).fadeIn(500).addClass('animated bounceInLeft');
		$('.page6Content').find('.page6MiddleContent').delay(4000).fadeIn(500).addClass('animated bounceInDown');
		$('.page6Content').find('.page6Middle1').delay(5000).fadeIn(500).addClass('animated bounceInLeft');
		$('.page6Right').delay(6000).fadeIn(500).addClass('animated bounceInDown');
		interval = setTimeout(function() {
			runPage.go(to);
			$('.page6Content').find('.page6Title').fadeOut(500).removeClass('animated bounceInLeft');
			$('.page6Content').find('.page6LeftContent').fadeOut(500).removeClass('animated bounceInDown');
			$('.page6Content').find('.page6Left1').fadeOut(500).removeClass('animated bounceInLeft');
			$('.page6Content').find('.page6MiddleContent').fadeOut(500).removeClass('animated bounceInDown');
			$('.page6Content').find('.page6Middle1').fadeOut(500).removeClass('animated bounceInLeft');
			$('.page6Right').fadeOut(500).removeClass('animated bounceInDown');
		},10000);
	}else if(to == 8){
		$('.contain7').find('.img1').delay(500).animate({
			left: '0',
		}, 1000);
		$('.contain7').find('.page7Title').delay(1000).animate({
			left: '0',
		}, 1000);
		$('.contain7').find('.page7TopLeft').delay(2000).animate({
			left: '20%',
		}, 500);
		$('.contain7').find('.page7TopRight').delay(3000).animate({
			left: '52%',
		}, 1000);
		$('.contain7').find('.page7BottomLeft').delay(4000).fadeIn(2000);
		$('.contain7').find('.page7BottomMiddle').delay(4000).fadeIn(2000);
		$('.contain7').find('.page7BottomRight').delay(4000).fadeIn(2000);
		interval = setTimeout(function() {
			runPage.go(to);
			$('.contain7').find('.img1').delay(500).animate({
				left: '-120%'
			}, 500);
			$('.contain7').find('.page7Title').delay(500).animate({
				left: '-200%',
			}, 500);
			$('.contain7').find('.page7TopLeft').delay(500).animate({
				left: '-200%',
			}, 500);
			$('.contain7').find('.page7TopRight').delay(500).animate({
				left: '-200%',
			}, 500);
			$('.contain7').find('.page7BottomLeft').delay(500).fadeOut(500);
			$('.contain7').find('.page7BottomMiddle').delay(500).fadeOut(500);
			$('.contain7').find('.page7BottomRight').delay(500).fadeOut(500);
		},15000);
	}else if(to == 9){
		console.log(to)
		$('.contain8').find('.img1').delay(500).animate({
			left: '0',
		}, 1000);
		interval = setTimeout(function() {
			runPage.go(0);
			$('.contain8').find('.img1').delay(500).animate({
				left: '-120%'
			}, 1000,);
		},20000);
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
		console.log(index)
		console.log(index > 8);
		index = index > 9 ? 1 : index+1;
		console.log(index);
		autoPlay(index);
		console.log('滚动到了第 ' + (index) + ' 屏');
	}
});
interval = setTimeout(function() {
//	runPage.go(runPage.thisPage() + 1);
	localStorage.setItem('page1','1');
	autoPlay(1);
},300);

//第一屏的星空动画
var canvas1 = document.getElementById('canvas'),
	ctx1 = canvas.getContext('2d'),
	w1 = canvas1.width = window.innerWidth,
	h1 = canvas1.height = window.innerHeight,

	hue = 217,
	stars = [],
	count = 0,
	maxStars = 1300; //星星数量

var canvas1 = document.createElement('canvas'),
	ctx2 = canvas1.getContext('2d');
	canvas1.width = 100;
	canvas1.height = 100;
var half = canvas1.width / 2,
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
var Star1 = function() {

	this.orbitRadius = random(maxOrbit(w1, h1));
	this.radius = random(60, this.orbitRadius) / 8;
	//星星大小
	this.orbitX = w1 / 2;
	this.orbitY = h1 / 2;
	this.timePassed = random(0, maxStars);
	this.speed = random(this.orbitRadius) / 50000;
	//星星移动速度
	this.alpha = random(2, 10) / 10;
	count++;
	stars[count] = this;
}
Star1.prototype.draw = function() {
	var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
		y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
		twinkle = random(10);

	if(twinkle === 1 && this.alpha > 0) {
		this.alpha -= 0.05;
	} else if(twinkle === 2 && this.alpha < 1) {
		this.alpha += 0.05;
	}

	ctx1.globalAlpha = this.alpha;
	ctx1.drawImage(canvas1, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
	this.timePassed += this.speed;
}
for(var i = 0; i < maxStars; i++) {
	new Star1();
}
function animation() {
	ctx1.globalCompositeOperation = 'source-over';
	ctx1.globalAlpha = 0.5; //尾巴
	ctx1.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
	ctx1.fillRect(0, 0, w1, h1)
	ctx1.globalCompositeOperation = 'lighter';
	for(var i = 1, l = stars.length; i < l; i++) {
		stars[i].draw();
	};
	requestAnimationFrame(animation);
}
animation();
//第二屏
var w2 = page2Canvas.width = window.screen.width,
    h2 = page2Canvas.height = window.screen.height,
    ctxx = page2Canvas.getContext( '2d' ),
    
    opts = {
      
      lineCount: 100,
      starCount: 30,
      
      radVel: .01,
      lineBaseVel: .1,
      lineAddedVel: .1,
      lineBaseLife: .4,
      lineAddedLife: .01,
      
      starBaseLife: 10,
      starAddedLife: 10,
      
      ellipseTilt: -.3,
      ellipseBaseRadius: .15,
      ellipseAddedRadius: .02,
      ellipseAxisMultiplierX: 2,
      ellipseAxisMultiplierY: 1,
      ellipseCX: w2 / 2,
      ellipseCY: h2 / 2,
      
      repaintAlpha: .015
    },
    gui = new dat.GUI,
    
    lines = [],
    stars2 = [],
    tick = 0,
    first = true;

function init() {
  
  lines.length = stars2.length = 0;
  
  ctxx.globalCompositeOperation = 'source-over';
  ctxx.fillStyle = '#333';
  ctxx.fillRect( 0, 0, w2, h2);
  
  if( first ) {
    
    var f = gui.addFolder( 'logics' );
    f.add( opts, 'lineCount', 1, 300 );
    f.add( opts, 'starCount', 1, 300 );
    f.add( opts, 'radVel', 0, 1 );
    f.add( opts, 'lineBaseVel', .01, 1 );
    f.add( opts, 'lineAddedVel', 0, 1 );
    f.add( opts, 'lineBaseLife', 0, 1 );
    f.add( opts, 'lineAddedLife', 0, 1 );
    f.add( opts, 'starBaseLife', 0, 100 );
    f.add( opts, 'starAddedLife', 0, 100 );
       f = gui.addFolder( 'graphics' );
    f.add( opts, 'ellipseTilt', -Math.PI, Math.PI ).step( .1 );
    f.add( opts, 'ellipseBaseRadius', 0, .5 );
    f.add( opts, 'ellipseAddedRadius', 0, .5 );
    f.add( opts, 'ellipseAxisMultiplierX', 0, 3 );
    f.add( opts, 'ellipseAxisMultiplierY', 0, 3 );
    f.add( opts, 'ellipseCX', 0, w2 );
    f.add( opts, 'ellipseCY', 0, h2 );
    f.add( opts, 'repaintAlpha', 0, 1 );
    gui.add( window, 'init' ).name( 'reset animation' );
    gui.add( window, 'LuukLamers' );
    
    loop();
    first = false;
  }
}

function loop() {
  
  requestAnimationFrame(loop);
  step();
  draw();
}

function step() {
  
  tick += .5;
  
  if( lines.length < opts.lineCount && Math.random() < .5 )
    lines.push( new Line );
  
  if( stars2.length < opts.starCount )
    stars2.push( new Star );
  
  lines.map( function( line ) { line.step(); } );
  stars2.map( function( star ) { star.step(); } );
}

function draw() {
  
  ctxx.shadowBlur = 0;
  ctxx.globalCompositeOperation = 'source-over';
  ctxx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.repaintAlpha );
  ctxx.fillRect( 0, 0, w2, h2 );
  
  ctxx.globalCompositeOperation = 'lighter';
  
  ctxx.translate( opts.ellipseCX, opts.ellipseCY );
  ctxx.rotate( opts.ellipseTilt );
  ctxx.scale( opts.ellipseAxisMultiplierX, opts.ellipseAxisMultiplierY );
  
  // ctxx.shadowBlur here almost does nothing
  lines.map( function( line ) { line.draw(); } );
  
  ctxx.scale( 1/opts.ellipseAxisMultiplierX, 1/opts.ellipseAxisMultiplierY );
  ctxx.rotate( -opts.ellipseTilt );
  ctxx.translate( -opts.ellipseCX, -opts.ellipseCY );
  
  stars2.map( function( star ) { star.draw(); } );
}

function Line() {
  
  this.reset();
}
Line.prototype.reset = function() { 

  this.rad = Math.random() * Math.PI * 2,
  this.len = w2 * ( opts.ellipseBaseRadius + Math.random() * opts.ellipseAddedRadius );
  this.lenVel = opts.lineBaseVel + Math.random() * opts.lineAddedVel;
  
  this.x = this.px = Math.cos( this.rad ) * this.len;
  this.y = this.py = Math.sin( this.rad ) * this.len;
  
  this.life = this.originalLife = w2 * ( opts.lineBaseLife + Math.random() * opts.lineAddedLife );
  
  this.alpha = .2 + Math.random() * .8;
}
Line.prototype.step = function() {
  
  --this.life;
  
  var ratio = 1 - .1 *  this.life / this.originalLife;
  
  this.px = this.x;
  this.py = this.y;
  
  this.rad += opts.radVel;
  this.len -= this.lenVel;
  
  this.x = Math.cos( this.rad ) * this.len;
  this.y = Math.sin( this.rad ) * this.len;
  
  if( this.life <= 0 )
    this.reset();
}
Line.prototype.draw = function() {
  
  var ratio = Math.abs( this.life / this.originalLife - 1/2 );
  
  ctxx.lineWidth = ratio * 5;
  ctxx.strokeStyle = ctxx.shadowColor = 'hsla(hue2, 80%, light%, alp)'
    .replace( 'hue2', tick + this.x / ( w2 * ( opts.ellipseBaseRadius + opts.ellipseAddedRadius ) ) * 100 )
    .replace( 'light', 75 - ratio * 150 )
    .replace( 'alp', this.alpha );
  ctxx.beginPath();
  ctxx.moveTo( this.px, this.py );
  ctxx.lineTo( this.x, this.y );
  
  ctxx.stroke();
}

function Star() {
  
  this.reset();
};
Star.prototype.reset = function() {
  
  this.x = Math.random() * w2;
  this.y = Math.random() * h2;
  this.life = opts.starBaseLife + Math.random() * opts.starAddedLife;
}
Star.prototype.step = function() {
  
  --this.life;
  
  if( this.life <= 0 )
    this.reset();
}
Star.prototype.draw = function(){
  
  ctxx.fillStyle = ctxx.shadowColor = 'hsla(hue2, 80%, 50%, .2)'
    .replace( 'hue2', tick + this.x / w2 * 100 );
  ctxx.shadowBlur = this.life;
  ctxx.fillRect( this.x, this.y, 1, 1 );
};

window.addEventListener( 'resize', function() {
  w2 = page2Canvas.width = window.innerWidth;
  h2 = page2Canvas.height = window.innerHeight;
  
  opts.ellipseCX = w2 / 2;
  opts.ellipseCY = h2 / 2;
  
  init();
} );

function LuukLamers() {
  
  var i = 0,
      array = [ 300, 74, 0.04, 0.1, 0.1, .55, 10, 100, 10, -.15, .18, .01, 3, 1, w2 / 2, h2 / 2, 0.02 ];
  
  for( var key in opts ) {
    
    opts[ key ] = array[ i ];
    ++i;
  }
  
  init();
}

init();
//最后一屏背景
function initVars(){
	pi=Math.PI;
	ctx8=canvash.getContext("2d");
	canvash.width=document.body.clientWidth;
	canvash.height=document.body.clientHeight;
	cx=canvash.width/2;
	cy=canvash.height/2;
	playerZ=-25;
	playerX=playerY=playerVX=playerVY=playerVZ=pitch=yaw=pitchV=yawV=0;
	scale8=600;
	seedTimer=0;seedInterval=5,seedLife=100;gravity=.02;
	seeds=new Array();
	sparkPics=new Array();
	s="https://cantelope.org/NYE/";
	for(i=1;i<=10;++i){
		sparkPic=new Image();
		sparkPic.src=s+"spark"+i+".png";
		sparkPics.push(sparkPic);
	}
	sparks=new Array();
	pow1=new Audio(s+"pow1.ogg");
	pow2=new Audio(s+"pow2.ogg");
	pow3=new Audio(s+"pow3.ogg");
	pow4=new Audio(s+"pow4.ogg");
	frames = 0;
}

function rasterizePoint(x,y,z){

	var p,d;
	x-=playerX;
	y-=playerY;
	z-=playerZ;
	p=Math.atan2(x,z);
	d=Math.sqrt(x*x+z*z);
	x=Math.sin(p-yaw)*d;
	z=Math.cos(p-yaw)*d;
	p=Math.atan2(y,z);
	d=Math.sqrt(y*y+z*z);
	y=Math.sin(p-pitch)*d;
	z=Math.cos(p-pitch)*d;
	var rx1=-1000,ry1=1,rx2=1000,ry2=1,rx3=0,ry3=0,rx4=x,ry4=z,uc=(ry4-ry3)*(rx2-rx1)-(rx4-rx3)*(ry2-ry1);
	if(!uc) return {x:0,y:0,d:-1};
	var ua=((rx4-rx3)*(ry1-ry3)-(ry4-ry3)*(rx1-rx3))/uc;
	var ub=((rx2-rx1)*(ry1-ry3)-(ry2-ry1)*(rx1-rx3))/uc;
	if(!z)z=.000000001;
	if(ua>0&&ua<1&&ub>0&&ub<1){
		return {
			x:cx+(rx1+ua*(rx2-rx1))*scale8,
			y:cy+y/z*scale8,
			d:Math.sqrt(x*x+y*y+z*z)
		};
	}else{
		return {
			x:cx+(rx1+ua*(rx2-rx1))*scale8,
			y:cy+y/z*scale8,
			d:-1
		};
	}
}

function spawnSeed(){
	
	seed=new Object();
	seed.x=-50+Math.random()*100;
	seed.y=25;
	seed.z=-50+Math.random()*100;
	seed.vx=.1-Math.random()*.2;
	seed.vy=-1.5;//*(1+Math.random()/2);
	seed.vz=.1-Math.random()*.2;
	seed.born=frames;
	seeds.push(seed);
}

function splode(x,y,z){
	
	t=5+parseInt(Math.random()*150);
	sparkV=1+Math.random()*2.5;
	type=parseInt(Math.random()*3);
	switch(type){
		case 0:
			pic1=parseInt(Math.random()*10);
			break;
		case 1:
			pic1=parseInt(Math.random()*10);
			do{ pic2=parseInt(Math.random()*10); }while(pic2==pic1);
			break;
		case 2:
			pic1=parseInt(Math.random()*10);
			do{ pic2=parseInt(Math.random()*10); }while(pic2==pic1);
			do{ pic3=parseInt(Math.random()*10); }while(pic3==pic1 || pic3==pic2);
			break;
	}
	for(m=1;m<t;++m){
		spark=new Object();
		spark.x=x; spark.y=y; spark.z=z;
		p1=pi*2*Math.random();
		p2=pi*Math.random();
		v=sparkV*(1+Math.random()/6)
		spark.vx=Math.sin(p1)*Math.sin(p2)*v;
		spark.vz=Math.cos(p1)*Math.sin(p2)*v;
		spark.vy=Math.cos(p2)*v;
		switch(type){
			case 0: spark.img=sparkPics[pic1]; break;
			case 1:
				spark.img=sparkPics[parseInt(Math.random()*2)?pic1:pic2];
				break;
			case 2:
				switch(parseInt(Math.random()*3)){
					case 0: spark.img=sparkPics[pic1]; break;
					case 1: spark.img=sparkPics[pic2]; break;
					case 2: spark.img=sparkPics[pic3]; break;
				}
				break;
		}
		spark.radius=25+Math.random()*50;
		spark.alpha=1;
		spark.trail=new Array();
		sparks.push(spark);
	}
	switch(parseInt(Math.random()*4)){
		case 0:	pow=new Audio(s+"pow1.ogg"); break;
		case 1:	pow=new Audio(s+"pow2.ogg"); break;
		case 2:	pow=new Audio(s+"pow3.ogg"); break;
		case 3:	pow=new Audio(s+"pow4.ogg"); break;
	}
	d=Math.sqrt((x-playerX)*(x-playerX)+(y-playerY)*(y-playerY)+(z-playerZ)*(z-playerZ));
	pow.volume=1.5/(1+d/10);
//	pow.play();
}

function doLogic(){
	
	if(seedTimer<frames){
		seedTimer=frames+seedInterval*Math.random()*10;
		spawnSeed();
	}
	for(i=0;i<seeds.length;++i){
		seeds[i].vy+=gravity;
		seeds[i].x+=seeds[i].vx;
		seeds[i].y+=seeds[i].vy;
		seeds[i].z+=seeds[i].vz;
		if(frames-seeds[i].born>seedLife){
			splode(seeds[i].x,seeds[i].y,seeds[i].z);
			seeds.splice(i,1);
		}
	}
	for(i=0;i<sparks.length;++i){
		if(sparks[i].alpha>0 && sparks[i].radius>5){
			sparks[i].alpha-=.01;
			sparks[i].radius/=1.02;
			sparks[i].vy+=gravity;
			point=new Object();
			point.x=sparks[i].x;
			point.y=sparks[i].y;
			point.z=sparks[i].z;
			if(sparks[i].trail.length){
				x=sparks[i].trail[sparks[i].trail.length-1].x;
				y=sparks[i].trail[sparks[i].trail.length-1].y;
				z=sparks[i].trail[sparks[i].trail.length-1].z;
				d=((point.x-x)*(point.x-x)+(point.y-y)*(point.y-y)+(point.z-z)*(point.z-z));
				if(d>9){
					sparks[i].trail.push(point);
				}
			}else{
				sparks[i].trail.push(point);
			}
			if(sparks[i].trail.length>5)sparks[i].trail.splice(0,1);				
			sparks[i].x+=sparks[i].vx;
			sparks[i].y+=sparks[i].vy;
			sparks[i].z+=sparks[i].vz;
			sparks[i].vx/=1.075;
			sparks[i].vy/=1.075;
			sparks[i].vz/=1.075;
		}else{
			sparks.splice(i,1);
		}
	}
	p=Math.atan2(playerX,playerZ);
	d=Math.sqrt(playerX*playerX+playerZ*playerZ);
	d+=Math.sin(frames/80)/1.25;
	t=Math.sin(frames/200)/40;
	playerX=Math.sin(p+t)*d;
	playerZ=Math.cos(p+t)*d;
	yaw=pi+p+t;
}


function draw8(){
	
	ctx8.clearRect(0,0,cx*2,cy*2);
	
	ctx8.fillStyle="#ff8";
	for(i=-100;i<100;i+=3){
		for(j=-100;j<100;j+=4){
			x=i;z=j;y=25;
			point=rasterizePoint(x,y,z);
			if(point.d!=-1){
				size=250/(1+point.d);
				d = Math.sqrt(x * x + z * z);
				a = 0.75 - Math.pow(d / 100, 6) * 0.75;
				if(a>0){
					ctx8.globalAlpha = a;
					ctx8.fillRect(point.x-size/2,point.y-size/2,size,size);				
				}
			}
		}
	}
	ctx8.globalAlpha=1;
	for(i=0;i<seeds.length;++i){
		point=rasterizePoint(seeds[i].x,seeds[i].y,seeds[i].z);
		if(point.d!=-1){
			size=200/(1+point.d);
			ctx8.fillRect(point.x-size/2,point.y-size/2,size,size);
		}
	}
	point1=new Object();
	for(i=0;i<sparks.length;++i){
		point=rasterizePoint(sparks[i].x,sparks[i].y,sparks[i].z);
		if(point.d!=-1){
			size=sparks[i].radius*200/(1+point.d);
			if(sparks[i].alpha<0)sparks[i].alpha=0;
			if(sparks[i].trail.length){
				point1.x=point.x;
				point1.y=point.y;
				switch(sparks[i].img){
					case sparkPics[0]:ctx8.strokeStyle="#f84";break;
					case sparkPics[1]:ctx8.strokeStyle="#84f";break;
					case sparkPics[2]:ctx8.strokeStyle="#8ff";break;
					case sparkPics[3]:ctx8.strokeStyle="#fff";break;
					case sparkPics[4]:ctx8.strokeStyle="#4f8";break;
					case sparkPics[5]:ctx8.strokeStyle="#f44";break;
					case sparkPics[6]:ctx8.strokeStyle="#f84";break;
					case sparkPics[7]:ctx8.strokeStyle="#84f";break;
					case sparkPics[8]:ctx8.strokeStyle="#fff";break;
					case sparkPics[9]:ctx8.strokeStyle="#44f";break;
				}
				for(j=sparks[i].trail.length-1;j>=0;--j){
					point2=rasterizePoint(sparks[i].trail[j].x,sparks[i].trail[j].y,sparks[i].trail[j].z);
					if(point2.d!=-1){
						ctx8.globalAlpha=j/sparks[i].trail.length*sparks[i].alpha/2;
						ctx8.beginPath();
						ctx8.moveTo(point1.x,point1.y);
						ctx8.lineWidth=1+sparks[i].radius*10/(sparks[i].trail.length-j)/(1+point2.d);
						ctx8.lineTo(point2.x,point2.y);
						ctx8.stroke();
						point1.x=point2.x;
						point1.y=point2.y;
					}
				}
			}
			ctx8.globalAlpha=sparks[i].alpha;
			ctx8.drawImage(sparks[i].img,point.x-size/2,point.y-size/2,size,size);
		}
	}
}

function frame(){
	if(frames>100000){
		seedTimer=0;
		frames=0;
	}
	frames++;
	draw8();
	doLogic();
	requestAnimationFrame(frame);
}

initVars();
frame();
//第七页
var vertexHeight = 15000;
var planeDefinition = 100;
var planeSize = 1245000;
var totalObjects = 50000;
var frame7 = 0;

var container7 = document.createElement('div');
document.getElementsByClassName('contain7')[0].appendChild( container7 );

var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight,1, 400000)
camera.position.z = 550000;
camera.position.y =10000;
camera.lookAt( new THREE.Vector3(0,6000,0) );


var scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0x23233f, 1, 300000 );

var uniforms = 
    {
      time: { type: "f", value: 0.0 }
    };


	var material = new THREE.ShaderMaterial( {
            uniforms: uniforms,
					vertexShader: document.getElementById( 'vertexShader' ).textContent,	
            fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
	            wireframe: true,
	    fog: false
					} );
	
	
	
	var	plane = new THREE.Mesh( new THREE.PlaneGeometry( planeSize, planeSize, planeDefinition, planeDefinition ), material );
	plane.rotation.x -=Math.PI*.5;
	
	scene.add( plane );
	
	var geometry = new THREE.Geometry();
	
	for (i = 0; i < totalObjects; i ++) 
	{ 
	  var vertex = new THREE.Vector3();
	  vertex.x = Math.random()*planeSize-(planeSize*.5);
	  vertex.y = (Math.random()*100000)+10000;
	  vertex.z = Math.random()*planeSize-(planeSize*.5);
	  geometry.vertices.push( vertex );
	}
	
	var material = new THREE.ParticleBasicMaterial( { size: 200 });
	var particles = new THREE.ParticleSystem( geometry, material );
		 
	scene.add( particles ); 
	
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	container7.appendChild( renderer.domElement );
	
	render();
	function render() {
	    requestAnimationFrame(this.render);
	    camera.position.z -= 150;
	    uniforms.time.value = frame7;
	    frame7 += .04;
   //  dateVerts();
	renderer.render(scene, camera);
}
