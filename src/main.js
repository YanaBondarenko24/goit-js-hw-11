

import * as render from "./js/render-functions.js";

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
    if(inputHandle === ""){
        render.hideLoader()
        return;
    }
    processingResponse()
    render.hideLoader()
}

export function processingResponse(){
        getImagesByQuery(inputHandle)
    .then(response => {
        if(response.length === 0){
           showError();
        } 
    gallery.innerHTML = createGallery(response);
    lightbox.refresh();
})
    .catch(error => {
        showError();
})
    .finally(message => {
        hideLoader();
    })   
}
    
function handleClick(event){
if (!event.target.classList.contains("gallery-img")){
 return;
}
}
