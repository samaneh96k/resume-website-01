const btn=document.querySelector('.Hamburger_icon');
const sidbar=document.querySelector('.sidebar');
const closeside=document.querySelector('#close-side');

btn.addEventListener('click',()=>{
sidbar.classList.add('active');
});
closeside.addEventListener('click',()=>{
    sidbar.classList.remove('active');
    });



    let time;
const headerimg=document.querySelector(".imghead");
document.addEventListener('load',myhead())

function myhead(){

    time=setInterval(AnimateHeaderImg,3000) 

}  



function AnimateHeaderImg(){
  
        headerimg.classList.toggle('active');
}

headerimg.addEventListener('click',()=>{
    clearInterval(time);
    headerimg.classList.remove('active');
})



    const tabbtn=document.querySelector('.tab-btn').children;
    const portfoliogallery=document.querySelector('.portfolio-gallery').children;
   console.log(portfoliogallery);
    
for(let i=0;i<tabbtn.length;i++){

   const target=tabbtn[i].getAttribute('data-target');

    tabbtn[i].addEventListener('click',()=>{
        for(let j=0;j<tabbtn.length;j++){
            tabbtn[j].classList.remove('active');
        }
        tabbtn[i].classList.add('active');


      for(let z = 0;z<portfoliogallery.length;z++){
          portfoliogallery[z].style.display='none'
          if(target==portfoliogallery[z]. getAttribute('data-id')){
            portfoliogallery[z].style.display='block'
        }
        if(target=='all'){
            portfoliogallery[z].style.display='block'
        }
      }


    })
}


const gallery = document.querySelector('.portfolio-gallery');
const galleryItem = gallery.querySelectorAll('.item');
const lightbox = document.querySelector('.lightBox');
const lightboxImg = lightbox.querySelector('img');
const close = document.querySelector('.close');

lightbox.addEventListener('click', function(){
    if(event.target != lightboxImg){
        lightbox.classList.remove('show')
    }
})


close.addEventListener('click', function(){
    lightbox.classList.remove('show')
})

galleryItem.forEach(item =>{
    item.querySelector('span').addEventListener('click', function(){
        lightbox.classList.add('show');
        lightboxImg.src = item.querySelector('img').getAttribute('src');

    })
})
/********************************to top */
const totop=document.querySelector('.to-top');
window.addEventListener('scroll',()=>{
if(window.pageYOffset>400){
totop.classList.add('active')
}else {
    totop.classList.remove('active')  
}
})