import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export let lightbox = new SimpleLightbox(".gallery a");



const form = document.querySelector(".form");
const input = document.querySelector("input");
export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");

form.addEventListener("submit", handleSubmit);
input.addEventListener("input", handleInput);
gallery.addEventListener("click", handleClick);




function handleSubmit(event){
    event.preventDefault();
    render.showLoader(); 
    render.clearGallery();
    const inputHandle = input.value;
    if(inputHandle === "" || inputHandle === " "){
        return;
    }
    getImagesByQuery(inputHandle)
    .then(response => {
        const responseUser = response.data.hits;
        if(responseUser.length === 0){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: "#fafafb",
                backgroundColor: "#ef4040",
                messageSize: "16px",
                position: "topRight",
                icon: 'material-icons',
            })
        }
    
    gallery.innerHTML = render.createGallery(responseUser);
    lightbox.refresh();
})
    .catch(error => {
console.log("error");

})
    .finally(message => {
        render.hideLoader();
    })   
}

function handleClick(event){
if (!event.target.classList.contains("gallery-img")){
 
    console.log(event.target);
}


}
