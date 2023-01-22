var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let nav = document.getElementById("nav")
  let shadow = "nav-shadow"
  let isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
  console.log(window.scrollY)

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    if(isMobile && window.scrollY > 200){
    nav.style.top = "-200px";
    }
  }

  if(window.scrollY==0){
    if(nav.classList.contains(shadow)) nav.classList.remove(shadow)
  }
  else{
    if(!nav.classList.contains(shadow)) nav.classList.add(shadow)
  }
  prevScrollpos = currentScrollPos;
} 

