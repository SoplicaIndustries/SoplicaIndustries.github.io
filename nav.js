var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let nav = document.getElementById("nav")
  let shadow = "nav-shadow"

  console.log(window.scrollY)

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    if(window.scrollY > 150){
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

