
function age(){
    let birthDate = new Date('12/09/2005');
    let years = new Date(Date.now()-birthDate.getTime());
    let age = years.getUTCFullYear() - 1970;
    let container = document.getElementById('age');
    container.innerText = age;
}

function show(id){
    let element = document.getElementById(id);
    
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;

    let isMobile = Math.min(window.screen.width, window.screen.height) < 576 || navigator.userAgent.indexOf("Mobi") > -1;
    let divider;
    if(isMobile)divider=25; // set after setting margin of cards
    else divider = 5;



    const middle = absoluteElementTop - (window.innerHeight / divider);
    window.scrollTo({top: middle, behavior: 'smooth'});
    menuHandler()
}

function menuHandler(){
    let isMobile = Math.min(window.screen.width, window.screen.height) < 576 || navigator.userAgent.indexOf("Mobi") > -1;
    if(!isMobile) return;
    let container = document.getElementById("nav-button-container");
    let style = container.style
    let dimm = document.getElementById("dimm")
    if(style.right == "-70%"){
        container.style.right = "0%"
        dimm.style.display = "block"
    }
    else{
        container.style.right = "-70%"
        dimm.style.display = "none"
    };
  }