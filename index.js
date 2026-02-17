import{a as d,S as y,i as h}from"./assets/vendor-Cv5j3NfU.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="54675250-921b736f026c47058d05b606e",L="https://pixabay.com/api/",n=t=>d(L,{params:{key:p,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"getImagesByQuerytrue"}});let b=new y(".gallery a");function S(t){return t.map(({webformatURL:i,largeImageURL:a,tags:o,likes:e,views:r,comments:l,downloads:g})=>`<li class="gallery-list">
 <a class="gallery-link" href="${a}">
 <img class="gallery-img" src="${i}" alt ="${o}" width="360" height="200"/>
 </a>
 <ul class="info">
 <li class="info-list">
 <h3 class="gallery-item-title">Likes</h3>
 <p class="gallery-item-text">${e}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Views</h3>
 <p class="gallery-item-text">${r}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Comments</h3>
 <p class="gallery-item-text">${l}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Downloads</h3>
 <p class="gallery-item-text">${g}</p>
 </li>
 </ul>
 </li>`).join("")}n(s).then(t=>{const i=t.data.hits;i.length===0&&u(),c.innerHTML=S(i),b.refresh()}).catch(t=>{u()}).finally(t=>{f()});console.log(n(s));function x(){c.innerHTML=""}function $(){m.classList.remove("hide")}function f(){m.classList.add("hide")}function u(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}const q=document.querySelector(".form"),w=document.querySelector("input"),c=document.querySelector(".gallery"),m=document.querySelector(".loader");q.addEventListener("submit",P);c.addEventListener("click",v);let s="";function P(t){if(t.preventDefault(),$(),x(),s=w.value.trim(),!s){f();return}n(s)}function v(t){t.target.classList.contains("gallery-img")||console.log(t.target)}
//# sourceMappingURL=index.js.map
