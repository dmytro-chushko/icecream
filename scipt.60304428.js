parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TVZf":[function(require,module,exports) {
window.addEventListener("DOMContentLoaded",function(){let e=0,t=1;const l=document.querySelectorAll(".customer-review__item"),o=document.querySelector(".reviews__wrapper"),s=document.querySelector(".customer-review"),n=window.getComputedStyle(s).width,r=document.querySelector(".customer-review__inner");r.style.width=100*l.length+"%",r.style.display="flex",r.style.transition="0.5s all",s.style.overflow="hidden",l.forEach(e=>{e.style.width=n});const d=document.createElement("ol"),i=[];d.classList.add("slider-btn"),o.append(d);for(let c=0;c<l.length;c++){const e=document.createElement("li");e.setAttribute("data-slide-to",c+1),e.classList.add("slider-btn__item"),0==c&&(e.style.opacity=1),d.append(e),i.push(e)}i.forEach(l=>{l.addEventListener("click",l=>{const o=l.target.getAttribute("data-slide-to");t=o,e=+n.slice(0,n.length-2)*(o-1),r.style.transform=`translateX(-${e}px)`,i.forEach(e=>e.style.opacity=".5"),i[t-1].style.opacity=1})})});
},{}]},{},["TVZf"], null)
//# sourceMappingURL=/IceCream/scipt.60304428.js.map