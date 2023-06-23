// JS NAVBAR
    let menu = document.querySelector('#menu');
    let navbar = document.querySelector('.navbar')

    menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    }


// JS SLIDE GAMBAR
activeslideimg();

function activeslideimg(activeslide=2){
    const slides =document.querySelectorAll(".slide");
    slides[activeslide].classList.add("active");

   for (const slide of slides){
       slide.addEventListener("click",()=>{
           clearActiveClasses();

           slide.classList.add("active");
       })
   }
   function clearActiveClasses(){
       slides.forEach((slide) =>{
           slide.classList.remove("active");
       })
   }
}