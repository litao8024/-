/* super inefficient right now, could be improved */
var c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    cw = c.width = 400,
		ch = c.height = 300,
    rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);},
    dToR = function(degrees){
        return degrees * (Math.PI / 180);
    },
    circle = {
      x: (cw / 2) + 5,
      y: (ch / 2) + 22,
      radius: 90,
      speed: 2,
      rotation: 0,
      angleStart: 270,
      angleEnd: 90,
      hue: 220,
      thickness: 18,
      blur: 25
    },
    particles = [],
    particleMax = 100,
    updateCircle = function(){
      if(circle.rotation < 360){
      	circle.rotation += circle.speed;
      } else {
      	circle.rotation = 0; 
      }
    },
    renderCircle = function(){
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.beginPath();
      ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
      ctx.lineWidth = circle.thickness;    
      ctx.strokeStyle = gradient1;
      ctx.stroke();
      ctx.restore();
    },
    renderCircleBorder = function(){
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.beginPath();
      ctx.arc(0, 0, circle.radius + (circle.thickness/2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
      ctx.lineWidth = 2;  
      ctx.strokeStyle = gradient2;
      ctx.stroke();
      ctx.restore();
    },
		renderCircleFlare = function(){
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation+185));
      ctx.scale(1,1);
      ctx.beginPath();
      ctx.arc(0, circle.radius, 30, 0, Math.PI *2, false);
      ctx.closePath();
      var gradient3 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 30);      
      gradient3.addColorStop(0, 'hsla(330, 50%, 50%, .35)');
      gradient3.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
      ctx.fillStyle = gradient3;
      ctx.fill();     
      ctx.restore();
    },
    renderCircleFlare2 = function(){
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation+165));
      ctx.scale(1.5,1);
      ctx.beginPath();
      ctx.arc(0, circle.radius, 25, 0, Math.PI *2, false);
      ctx.closePath();
      var gradient4 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 25);
      gradient4.addColorStop(0, 'hsla(30, 100%, 50%, .2)');
      gradient4.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
      ctx.fillStyle = gradient4;
      ctx.fill();     
      ctx.restore();
    },
    createParticles = function(){
      if(particles.length < particleMax){
        particles.push({
          x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation-85))) + (rand(0, circle.thickness*2) - circle.thickness),
          y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation-85))) + (rand(0, circle.thickness*2) - circle.thickness),
          vx: (rand(0, 100)-50)/1000,
          vy: (rand(0, 100)-50)/1000,
          radius: rand(1, 6)/2,
          alpha: rand(10, 20)/100
        });
      }
    },
    updateParticles = function(){
      var i = particles.length;
      while(i--){
      	var p = particles[i];
        p.vx += (rand(0, 100)-50)/750;
        p.vy += (rand(0, 100)-50)/750;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= .01;
        
        if(p.alpha < .02){
          particles.splice(i, 1)
        }
      }
    },
    renderParticles = function(){
      var i = particles.length;
      while(i--){
      	var p = particles[i];
        ctx.beginPath();
        ctx.fillRect(p.x, p.y, p.radius, p.radius);
        ctx.closePath();
        ctx.fillStyle = 'hsla(0, 0%, 100%, '+p.alpha+')';
      }
    },
    clear = function(){
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';		
    }
    loop = function(){
      clear();
      updateCircle();
      renderCircle();
      renderCircleBorder();
      renderCircleFlare();
      renderCircleFlare2();
      createParticles();
      updateParticles();
      renderParticles();
    }

/* Append Canvas */
//document.body.appendChild(c);

/* Set Constant Properties */
ctx.shadowBlur = circle.blur;
ctx.shadowColor = 'hsla('+circle.hue+', 80%, 60%, 1)';
ctx.lineCap = 'round'
  
var gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
gradient1.addColorStop(0, 'hsla('+circle.hue+', 60%, 50%, .25)');
gradient1.addColorStop(1, 'hsla('+circle.hue+', 60%, 50%, 0)');
  
var gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
gradient2.addColorStop(0, 'hsla('+circle.hue+', 100%, 50%, 0)');
gradient2.addColorStop(.1, 'hsla('+circle.hue+', 100%, 100%, .7)');
gradient2.addColorStop(1, 'hsla('+circle.hue+', 100%, 50%, 0)');

/* Loop It, Loop It Good */
setInterval(loop, 16);

//第一屏的星空动画
var canvas = document.getElementById('canvas'),
	ctx1 = canvas.getContext('2d'),
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

	ctx1.globalAlpha = this.alpha;
	ctx1.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
	this.timePassed += this.speed;
}
for(var i = 0; i < maxStars; i++) {
	new Star();
}
function animation() {
	ctx1.globalCompositeOperation = 'source-over';
	ctx1.globalAlpha = 0.5; //尾巴
	ctx1.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
	ctx1.fillRect(0, 0, w, h)
	ctx1.globalCompositeOperation = 'lighter';
	for(var i = 1, l = stars.length; i < l; i++) {
		stars[i].draw();
	};
	window.requestAnimationFrame(animation);
}
animation();