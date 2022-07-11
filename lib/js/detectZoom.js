// 若返回100则为默认无缩放，如果大于100则是放大，否则缩小
function detectZoom (){ 
  var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();
 
   if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
  }
  else if (~ua.indexOf('msie')) {  
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  }
  else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }
   
   if (ratio){
    ratio = Math.round(ratio * 100);
  }
   
   return ratio;
};