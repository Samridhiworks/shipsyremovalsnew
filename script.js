
  let content = document.getElementById("show-content-1");
  let img1 = document.getElementById("img-1")
  function toggleContent() {
      
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        img1.src="images/down.png"
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        img1.src="images/up.png"
       
      }
    }

    let content2 = document.getElementById("show-content-2");
    let img2 = document.getElementById("img-2")
    function toggleContent2(){

      if(content2.style.maxHeight){
        content2.style.maxHeight = null;
        img2.src="images/down.png"
      }else{
        content2.style.maxHeight = content2.scrollHeight+"px"
        img2.src="images/up.png"
      }
    }

    let content3 = document.getElementById("show-content-3")
    let img3 = document.getElementById("img-3")
    function toggleContent3(){
      if(content3.style.maxHeight){
        content3.style.maxHeight = null;
        img3.src="images/down.png"
      }else{
        content3.style.maxHeight = content3.scrollHeight+"px"
        img3.src="images/up.png"
      }
    }

    let content4 = document.getElementById("show-content-4")
    let img4 = document.getElementById("img-4")
    function toggleContent4(){
      if(content4.style.maxHeight){
        content4.style.maxHeight = null;
        img4.src="images/down.png"
      }else{
        content4.style.maxHeight = content4.scrollHeight+"px"
        img4.src="images/up.png"
      }
    }

    let content5 = document.getElementById("show-content-5")
    let img5 = document.getElementById("img-5")
    function toggleContent5(){
      if(content5.style.maxHeight){
        content5.style.maxHeight = null;
        img5.src="images/down.png"
      }else{
        content5.style.maxHeight = content5.scrollHeight+"px"
        img5.src="images/up.png"
      }
    }
 
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

     
      let showpopup = document.getElementById("show-form")
      let bg = document.getElementById("bg")
  
      function openpopup() {
        showpopup.classList.add("open-popup")
        bg.style.display = "block"
        body.classList.add("body-fixed");
        // document.documentElement.style.background="black"
  
      }
      function closepopup() {
        showpopup.classList.remove("open-popup")
        bg.style.display = "none"
      }
  
      let showpopup1 = document.getElementById("show-form-1");
      let bg1 = document.getElementById("bg-1");
      let body = document.body;
  
      function openpopup1() {
        showpopup1.classList.add("open-popup-1");
        bg1.style.display = "block";
        body.classList.add("body-fixed");
  
      }
  
      function closepopup1() {
        showpopup1.classList.remove("open-popup-1");
        bg1.style.display = "none";
      }
  
      let gallery = document.getElementById("gallery")
      let card5 = document.getElementById("card-5")
  
      setInterval(function () {
        gallery.scrollLeft += 420
      },10000)
  
      let mbgallery = document.getElementById("mb-gallery")
      let mbcard = document.getElementById("mb-card")
  
      setInterval(function () {
        mbgallery.scrollLeft += 300
      }, 10000)
  
   
