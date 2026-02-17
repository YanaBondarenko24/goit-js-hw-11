import{a as f,S as d,i as m}from"./assets/vendor-DQiTczw4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const g="54675250-921b736f026c47058d05b606e",p="https://pixabay.com/api/",y=r=>f(p,{params:{key:g,q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}});function h(r){return r.map(({webformatURL:i,largeImageURL:l,tags:s,likes:e,views:t,comments:o,downloads:u})=>`<li class="gallery-list">
 <a class="gallery-link" href="${l}">
 <img class="gallery-img" src="${i}" alt ="${s}" width="360" heigth="200"/>
 </a>
 <ul class="info">
 <li class="info-list">
 <h3 class="gallery-item-title">Likes</h3>
 <p class="gallery-item-text">${e}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Views</h3>
 <p class="gallery-item-text">${t}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Comments</h3>
 <p class="gallery-item-text">${o}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Downloads</h3>
 <p class="gallery-item-text">${u}</p>
 </li>
 </ul>
 </li>`).join("")}function L(){return a.innerHTML=""}function b(){return c.classList.remove("hide")}function S(){return c.classList.add("hide")}let x=new d(".gallery a");const $=document.querySelector(".form"),n=document.querySelector("input"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");$.addEventListener("submit",q);n.addEventListener("input",handleInput);a.addEventListener("click",v);function q(r){r.preventDefault(),b(),L();const i=n.value;i===""||i===" "||y(i).then(l=>{const s=l.data.hits;s.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"}),a.innerHTML=h(s),x.refresh()}).catch(l=>{console.log("error")}).finally(l=>{S()})}function v(r){r.target.classList.contains("gallery-img")||console.log(r.target)}
//# sourceMappingURL=index.js.map
