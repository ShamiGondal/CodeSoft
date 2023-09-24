// code for the inspect Blockage
 let counter = 0;
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
   
    counter++;
    
    if(e){
        if(counter >= 3){
            const alerts = document.getElementById('alert');
            alerts.style.display="block";
            setTimeout(() => {
                alerts.style.display = "none";
            }, 1000);
            counter =0;
        }
        
    }
});


//Code for the loader

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    // Hide the loader
    loader.style.display = 'none';

    // Show the website content
    content.style.display = 'block';
});


//code for the menu toggel
let menu_btn = document.getElementById("menu_btn");
let menu_content = document.getElementById("menu_content");

menu_btn.addEventListener("click", () =>{

    menu_content.classList.toggle("hidden");


});

//type js library function
var typed = new Typed('#element', {
    strings: ['Freelance UI/UX Designer','Web Developer', 'Front-end Developer','Web Designer', 'JavaScript Developer','Java Developer', 'C++ Developer'],
    typeSpeed: 50,
    loop: true
  });



  //code for the testimonial slider
  const cardWrapper = document.querySelector('.card-wrapper');
  const cardSlider = document.querySelector('.card-slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const cardWidth = 620; // Adjust this width according to your card size
  let currentIndex = 0;

  cardSlider.style.overflow = 'hidden'; // Initially hide overflow

  prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSliderPosition();
  });

  nextBtn.addEventListener('click', () => {
      currentIndex = Math.min(currentIndex + 1, cardWrapper.children.length - 1);
      updateSliderPosition();
  });

  function updateSliderPosition() {
      const translateX = -currentIndex * cardWidth;
      cardWrapper.style.transform = `translateX(${translateX}px)`;

      // Show overflow when navigating to the first or last card
      if (currentIndex === 0 || currentIndex === cardWrapper.children.length - 1) {
          cardSlider.style.overflow = 'hidden';
      } else {
          cardSlider.style.overflow = 'hidden';
      }
  }


  //small devices on scroll logic for the testmonilas

       // Get the card slider container
const cardSlider_2 = document.getElementById("card-slider");

// Add event listeners for scrolling
cardSlider_2.addEventListener("mousedown", startScroll);
cardSlider_2.addEventListener("mousemove", scroll);
cardSlider_2.addEventListener("mouseup", stopScroll);
cardSlider_2.addEventListener("mouseleave", stopScroll);

cardSlider_2.addEventListener("touchstart", startTouchScroll);
cardSlider_2.addEventListener("touchmove", touchscroll);
cardSlider_2.addEventListener("touchend", stopTouchScroll);

let isScrolling = false;
let startX;
let scrollLeft;

function startScroll(e) {
    isScrolling = true;
    startX = e.pageX - cardSlider_2.offsetLeft;
    scrollLeft = cardSlider_2.scrollLeft;
}

function scroll(e) {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - cardSlider_2.offsetLeft;
    const walk = x - startX;
    cardSlider_2.scrollLeft = scrollLeft - walk;
}

function stopScroll() {
    isScrolling = false;
}


function startTouchScroll (e){

    isScrolling = true;
    startX = e.touches[0].pageX - cardSlider_2.offsetLeft;
    scrollLeft = cardSlider_2.scrollLeft;
}

function touchscroll (e){

    if (!isScrolling) return;
    e.preventDefault();
    const x = e.touches[0].pageX - cardSlider_2.offsetLeft;
    const walk = x - startX;
    cardSlider_2.scrollLeft = scrollLeft - walk;
}
  
function stopTouchScroll(){

    isScrolling = false;
}

  //animation for the whole website

  let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting ){

            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
  });

  let hiddenElement = document.querySelectorAll('.hid');
  hiddenElement.forEach((element) => {
    observer.observe(element);
  });

  
  //slider for the skills 
  const card_Wrapper = document.querySelector('.wrapper');
  const card_Slider = document.querySelector('.slider');
  const prev_Btn = document.getElementById('prev_Btn');
  const next_Btn = document.getElementById('next_Btn');
  const card_Width = 220; // Adjust this width according to your card size
  let current_Index = 0;
  
  card_Slider.style.overflow = 'hidden'; // Initially hide overflow
  
  prev_Btn.addEventListener('click', () => {
      current_Index = (current_Index - 1 + card_Wrapper.children.length) % card_Wrapper.children.length;
      updateSliderPositions();
  });
  
  next_Btn.addEventListener('click', () => {
      current_Index = (current_Index + 1) % card_Wrapper.children.length;
      updateSliderPositions();
  });
  
  function updateSliderPositions() {
      const translateX = -current_Index * card_Width;
      card_Wrapper.style.transform = `translateX(${translateX}px)`;
  
      // Hide overflow when navigating to the first or last card
      if (current_Index === 0 || current_Index === card_Wrapper.children.length - 1) {
          card_Slider.style.overflow = 'hidden';
      } else {
          card_Slider.style.overflow = 'hidden';
      }
  }
// Scrolling methods for the mobile devices (skills)

const cardSlider_3 = document.getElementById("slider_1");

// Add event listeners for scrolling
cardSlider_3.addEventListener("mousedown", startScrollSkills);
cardSlider_3.addEventListener("mousemove", scrollSkills);
cardSlider_3.addEventListener("mouseup", stopScrollSkills);
cardSlider_3.addEventListener("mouseleave", stopScrollSkills);

cardSlider_3.addEventListener("touchstart", startTouchScrollSkills);
cardSlider_3.addEventListener("touchmove", touchScrollSkills);
cardSlider_3.addEventListener("touchend", stopTouchScrollSkills);

let isScrollingSkills = false;
let startXSkills;
let scrollLeftSkills;

function startScrollSkills(a) {
    isScrollingSkills = true;
    startXSkills = a.pageX - cardSlider_3.offsetLeft;
    scrollLeftSkills = cardSlider_3.scrollLeftSkills;
}

function scrollSkills(a) {
    if (!isScrollingSkills) return;
    a.preventDefault();
    const x = a.pageX - cardSlider_3.offsetLeft;
    const walk = x - startXSkills;
    cardSlider_3.scrollLeft = scrollLeftSkills - walk;
}

function stopScrollSkills() {
    isScrollingSkills = false;
}

// Functions for touch events on mobile
function startTouchScrollSkills(e) {
    isScrollingSkills = true;
    startXSkills = e.touches[0].pageX - cardSlider_3.offsetLeft;
    scrollLeftSkills = cardSlider_3.scrollLeft;
}

function touchScrollSkills(e) {
    if (!isScrollingSkills) return;
    e.preventDefault();
    const x = e.touches[0].pageX - cardSlider_3.offsetLeft;
    const walk = x - startXSkills;
    cardSlider_3.scrollLeft = scrollLeftSkills - walk;
}

function stopTouchScrollSkills() {
    isScrollingSkills = false;
}