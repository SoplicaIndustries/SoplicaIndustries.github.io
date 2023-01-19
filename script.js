
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

    var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
    let divider;
    if(isMobile)divider=25; // set after setting margin of cards
    else divider = 5;

    console.log(isMobile + " " + divider)

    const middle = absoluteElementTop - (window.innerHeight / divider);
    window.scrollTo({top: middle, behavior: 'smooth'});
}