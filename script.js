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
    const middle = absoluteElementTop - (window.innerHeight / 5);
    window.scrollTo({top: middle, behavior: 'smooth'});
}