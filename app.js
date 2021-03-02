const fullImage = document.querySelector(".full-img");
const smallImage = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

smallImage.forEach(function(img){
    console.log(img);
    img.addEventListener('click', function(){
        // Changing the image dynamically
        const originalQuality = img.getAttribute('alt');
        fullImage.src = `img/full/${originalQuality}.jpg`

        modal.classList.add("open");
        fullImage.classList.add("open");
    });
});

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        fullImage.classList.remove('open');
    }
});