import{a as d,S as g,i as y}from"./assets/vendor-Cv5j3NfU.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="54675250-921b736f026c47058d05b606e",p="https://pixabay.com/api/",L=t=>d(p,{params:{key:h,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0}});let b=new g(".gallery a");function S(t){return t.map(({webformatURL:i,largeImageURL:o,tags:l,likes:e,views:r,comments:s,downloads:m})=>`<li class="gallery-list">
 <a class="gallery-link" href="${o}">
 <img class="gallery-img" src="${i}" alt ="${l}" width="360" height="200"/>
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
 <p class="gallery-item-text">${s}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Downloads</h3>
 <p class="gallery-item-text">${m}</p>
 </li>
 </ul>
 </li>`).join("")}function x(){L(a).then(t=>{t.data;const i=t.data.hits;i.length===0&&c(),n.innerHTML=S(i),b.refresh()}).catch(t=>{c()}).finally(t=>{u()})}function $(){n.innerHTML=""}function q(){f.classList.remove("hide")}function u(){f.classList.add("hide")}function c(){y.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}const v=document.querySelector(".form"),w=document.querySelector("input"),n=document.querySelector(".gallery"),f=document.querySelector(".loader");v.addEventListener("submit",P);n.addEventListener("click",O);let a="";function P(t){if(t.preventDefault(),q(),$(),a=w.value.trim(),a===""){u();return}x()}function O(t){t.target.classList.contains("gallery-img")}
//# sourceMappingURL=index.js.map
