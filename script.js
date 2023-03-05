
function age(){

    //This function was used to show my age based on my birth date, but i found out that because of this people haven't treated me seriously enough.
    //Thats why i decided to remove this feature, but if you're a potential employeer, and you're reading this you must be already interested in working with me (because why would you check my code).
    //So please, don't be concerned by my age.

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
    if(isMobile)divider=25;
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
    let bar1 = document.getElementById("bar-top")
    let bar2 = document.getElementById("bar-middle")
    let bar3 = document.getElementById("bar-bottom")

    if(style.right == "-70%"){

        container.style.right = "0%"
        dimm.style.display = "block"
        bar1.style.transform = "rotate(45deg)"
        bar2.style.transform = "translateX(1rem)"
        bar2.style.opacity ="0"
        bar3.style.transform = "rotate(-45deg)"
    }
    else if(style.right == "0%"){
        container.style.right = "-70%"
        dimm.style.display = "none"
        bar1.style.transform = "rotate(0deg)"
        bar2.style.transform = "translateX(0rem)"
        bar2.style.opacity ="1"
        bar3.style.transform = "rotate(0deg)"
    }
    else{
        container.style.right = "-70%"
    }
}

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){

            entry.target.setAttribute('style', 'margin-left: 0vw !important');
            entry.target.style.opacity = "1"
        }
        else{
            entry.target.setAttribute('style', 'margin-left: -5vw !important');
            entry.target.style.opacity = "0"
        }
    })
});



function ctncSwitch(direction){

    var currentScrollPos = window.pageYOffset;
    let nav = document.getElementById("nav")
    let shadow = "nav-shadow"
    let isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;


    let arr = [
        ["api", "/media/api.png"],
        ["moa", "/media/moa.png"],
        ["billing", "/media/billing_service.png"]
    ]
    let curr = 0;
    let next = 0;
    let photoid = 0;
    let photo = document.getElementById("photo")
    
    arr.forEach(el => {
        let group = document.getElementsByName(el[0]);
        group.forEach(gr =>{
            if(!gr.classList.contains("hidden")){
                curr = el;
                gr.classList.add("hidden");
            }
        })
        

    })


    console.log(curr)

     if(direction == "down"){
         if(arr.indexOf(curr) == arr.length-1)next = arr[0]; 
         else next = arr[arr.indexOf(curr)+1]; 
         
         
     }
     else if(direction == "up"){
         if(arr.indexOf(curr) == 0) next = arr[arr.length-1]
         else next = arr[arr.indexOf(curr)-1];
         
     }

    
     let divs = document.getElementsByName(next[0]);
     
    
     photo.style.animation = "";

     divs.forEach(el => {
         if(el.classList.contains("hidden")) el.classList.remove("hidden")
         
     });
        
     if(direction == "up"){
        if(isMobile){
            divs[0].style.animation = "right 0.5s";
            setTimeout(()=>{
                photo.style.backgroundImage = "url('"+next[1]+"')"
                photo.style.animation = "right 0.5s";
            }, 1)
            
        }
        else{
            divs[0].style.animation = "up 0.5s";
            setTimeout(()=>{
                photo.style.backgroundImage = "url('"+next[1]+"')"
                photo.style.animation = "up 0.5s";
            }, 1)
            
        }
     }
     
     else{
        if(isMobile){
            divs[0].style.animation = "left 0.5s";
            setTimeout(()=>{
                photo.style.backgroundImage = "url('"+next[1]+"')"
                photo.style.animation = "left 0.5s";
            }, 1)
            
        }
        else{ 
            divs[0].style.animation = "down 0.5s";
            setTimeout(()=>{
                photo.style.backgroundImage = "url('"+next[1]+"')"
                photo.style.animation = "down 0.5s";
            }, 1)
        }
    }

    
    
}




let cards = document.querySelectorAll('.card');

cards.forEach((el) => observer.observe(el));

