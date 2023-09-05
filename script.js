var btnlogin = document.querySelector(".login-icon");
      var form = document.querySelector(".overlay");
      var overlay = document.querySelector(".black-cover");
      var cross = document.querySelector(".fa-xmark");
      
      // btnlogin.addEventListener("click",showModal);
      // cross.addEventListener("click",closeModal);
      function showModal(){
        overlay.classList.add("showcover");
        form.classList.add("showoverlay");
      }
      function closeModal(){
        overlay.classList.remove("showcover");
        form.classList.remove("showoverlay");
      }


// second page
var para = document.getElementById("dey");
var para2 = document.getElementById("dip");
var para3 = document.getElementById("soumya");
function showPara(){
  para.classList.add("popular-cuisines-about-display");
}
function showPara1(){
  para2.classList.add("popular-cuisines-about-display");
}
function showPara2(){
    para3.classList.add("popular-cuisines-about-display");
}



