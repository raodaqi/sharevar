(function(e){var t={},i;function n(e){return"tagName"in e?e:e.parentNode}function o(e,t,i,n){var o=Math.abs(e-t),a=Math.abs(i-n);return o>=a?e-t>0?"Left":"Right":i-n>0?"Up":"Down"}var a=750,u;function l(){u=null;if(t.last){t.el.trigger("longTap");t={}}}function r(){if(u)clearTimeout(u);u=null}e(document).ready(function(){var c,s;e(document.body).bind("touchstart",function(o){c=Date.now();s=c-(t.last||c);t.el=e(n(o.touches[0].target));i&&clearTimeout(i);t.x1=o.touches[0].pageX;t.y1=o.touches[0].pageY;if(s>0&&s<=250)t.isDoubleTap=true;t.last=c;u=setTimeout(l,a)}).bind("touchmove",function(e){r();t.x2=e.touches[0].pageX;t.y2=e.touches[0].pageY}).bind("touchend",function(e){r();if(t.isDoubleTap){t.el.trigger("doubleTap");t={}}else if(t.x2&&Math.abs(t.x1-t.x2)>30||t.y2&&Math.abs(t.y1-t.y2)>30){t.el.trigger("swipe")&&t.el.trigger("swipe"+o(t.x1,t.x2,t.y1,t.y2));t={}}else if("last"in t){t.el.trigger("tap");i=setTimeout(function(){i=null;t.el.trigger("singleTap");t={}},250)}}).bind("touchcancel",function(){if(i)clearTimeout(i);if(u)clearTimeout(u);u=i=null;t={}})});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})})(Zepto);