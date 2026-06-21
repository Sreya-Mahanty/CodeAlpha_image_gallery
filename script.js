const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        lightbox.style.display = "flex";

        lightboxImg.src = images[currentIndex].src;
    });

});

// Close Lightbox

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Next Image

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;
});

// Previous Image

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;
});

// Filter Function

function filterImages(category){

    const galleryImages = document.querySelectorAll(".image");

    galleryImages.forEach(image => {

        if(category === "all"){
            image.style.display = "block";
        }
        else if(image.classList.contains(category)){
            image.style.display = "block";
        }
        else{
            image.style.display = "none";
        }

    });
}