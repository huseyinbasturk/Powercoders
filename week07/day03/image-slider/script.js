let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];

async function getImage() {
    //let url = "images.json";
    //let url = "https://jsonplaceholder.typicode.com/photos";
    let url = "https://pixabay.com/api/?key=27379163-ee6045d171f0479b9b5c14499";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function slideToNext(){
    let images = await getImage();
    
    //console.log(counter+" >");
    counter++;
    if(counter === images.hits.length){
        counter = 0;
    }
    if(counter < images.hits.length){
        let nextSlide = images.hits[counter].webformatURL;
        console.log(nextSlide);
        imgTag.src = nextSlide;

    }
}

async function slideToPrev(){
    let images = await getImage();
    
    //console.log(counter+" <");
    counter--;    
    if(counter < 0){
        counter = images.hits.length-1;
    }
    if(counter >= 0){
        let prevSlide = images.hits[counter].webformatURL;
        imgTag.src = prevSlide;
    }
}
prevBtn.addEventListener("click",slideToPrev);
nextBtn.addEventListener("click",slideToNext);


function slide(){
    /** direction: next or previous slide */
    /** currentSlide: which image (index of the images array is visible) */
    /** container for that image: img-tag to replace the src attribute */
    let currentSlide = images[counter];

}

window.onload = async function() {
    let images = await getImage();
    imgTag.src=images.hits[counter].webformatURL;
}