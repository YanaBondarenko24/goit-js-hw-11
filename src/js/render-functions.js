import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {loader} from "../main";
import { gallery } from "../main";





export function createGallery(images){
 return images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => 
 `<li class="gallery-list">
 <a class="gallery-link" href="${largeImageURL}">
 <img class="gallery-img" src="${webformatURL}" alt ="${tags}" width="360" heigth="200"/>
 </a>
 <ul class="info">
 <li class="info-list">
 <h3 class="gallery-item-title">Likes</h3>
 <p class="gallery-item-text">${likes}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Views</h3>
 <p class="gallery-item-text">${views}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Comments</h3>
 <p class="gallery-item-text">${comments}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Downloads</h3>
 <p class="gallery-item-text">${downloads}</p>
 </li>
 </ul>
 </li>`).join("");
}


export function clearGallery(){
  return gallery.innerHTML = "";
}

export function showLoader(){
   return loader.classList.remove("hide");
}

export function hideLoader(){
return loader.classList.add("hide");
}