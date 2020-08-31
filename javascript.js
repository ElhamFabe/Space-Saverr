var container = document.getElementById('container');
var arches = document.getElementsByClassName('arches');
var archesSVGNode = document.querySelector('.arches-svg-node');
var splashLines = document.getElementsByClassName('splash-lines');
TweenMax.set(splashLines, {
  drawSVG:'40 60'
})

TweenMax.set('svg', {
  
  visibility:'visible'
})

//console.log(splashLines.getTotalLength())
var cloned = archesSVGNode.cloneNode(true);
container.appendChild(cloned)

TweenMax.set(cloned, {
  transformOrigin:'50% 100%',
  rotationX:180,
  y:'+=57',
  alpha:0.08
})



TweenMax.set(container, {
  position:'absolute',
  left:'50%',
  xPercent:-50,
  top:'50%',
  yPercent:-50
})
TweenMax.set(arches, {
  drawSVG:'100% 100%'
  
})


var tl = new TimelineMax({repeat:-1, yoyo:false, repeatDelay:1});
tl.timeScale(1);


tl.to(arches, 0.8, {
  drawSVG:'550 600',
  ease:Linear.easeNone
})

.to(arches, 2, {
  drawSVG:'-1% -5%',
  ease:Linear.easeNone
})

.to(splashLines, 0.8, {
  drawSVG:0,
  ease:Power2.easeOut,
  alpha:1
}, '-=0.2')

.to(splashLines, 0.8, {
  
  alpha:0
}, '-=0.65')


