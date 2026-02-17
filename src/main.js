

import * as render from "./js/render-functions.js";
import {getImagesByQuery} from "./js/pixabay-api.js";







const form = document.querySelector(".form");
const input = document.querySelector("input");
export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");

form.addEventListener("submit", handleSubmit);
gallery.addEventListener("click", handleClick);


export let inputHandle = "";

 function handleSubmit(event){
    event.preventDefault();
    render.showLoader(); 
    render.clearGallery();
   inputHandle = input.value.trim();
    if(!inputHandle){
        render.hideLoader()
        return;
    }
getImagesByQuery(inputHandle);
}

function handleClick(event){
if (!event.target.classList.contains("gallery-img")){
 
    console.log(event.target);
}


}
