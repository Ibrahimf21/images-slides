// //Get Slider Items | Array.from[Es6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get the count of slides
let slidesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

//slide number elemnt
var slideNumberElement =document.getElementById('slide-number');

//previous and next butons 
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


// handle click in prev and next button

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// creat the main ul elemnt
var paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');


// creat list items based on slides count
for(var i = 1; i <= slidesCount;i++) {
    
    //creat the li
    var paginationItem = document.createElement('li');
    
    //set custom attribute
    paginationItem.setAttribute('data-index', i);
    
    //set item content
    paginationItem.appendChild(document.createTextNode(i));
    
    //Append items to the main ul list
    paginationElement.appendChild(paginationItem);
}

//add the created ul elemnt to the page
document.getElementById('indicators').appendChild(paginationElement);

//Get the new creater ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// //Get pagination Items | Array.from[Es6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


//loop through all bullets items
for (var i =0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}


//trigger the checker function
theChecker();




// nextslide function 

function nextSlide() {
    if (nextButton.classList.contains('disabled')){
        return false;
    }else {

        currentSlide++;
        theChecker();
    }
}

// prevslide function 

function prevSlide() {
    if (prevButton.classList.contains('disabled')){
        return false;
    }else {

        currentSlide--;
        theChecker();
    }

}

// creat the checker function
function theChecker() {
    // set the slide number
    slideNumberElement.textContent = 'slide #' + (currentSlide) + 'of' + (slidesCount);
    
    // remove all active 
        removeAllActive();
    
    //set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');
    
    //set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    
    //check if current slide is the first     
    if (currentSlide == 1) {
        
        //add disabled class in prev burttom
        prevButton.classList.add('disabled')
    
    }else {
        
        //remove disabled class in prev burttom
        prevButton.classList.remove('disabled')
    
    } 

    //check if current slide is the last     
    if (currentSlide == slidesCount) {
        
        //add disabled class in next burttom
        nextButton.classList.add('disabled')
    
    }else {
        
        //remove disabled class in next buttom
        nextButton.classList.remove('disabled')
    
    } 
}




//remove  all active class from images and pagenation bullets
function removeAllActive() {

    //loop through images
    sliderImages.forEach(function(img){
        
        img.classList.remove('active')
    });
    
    //loop through pagination bullets
    paginationsBullets.forEach(function(bullet) {

        bullet.classList.remove('active');
    });
}