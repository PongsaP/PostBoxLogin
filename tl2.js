const container = document.querySelector(".container");
let scrollLine = document.querySelector('.progress-bar');
let  ppnext = document.querySelector(".paper-next");

container.addEventListener('wheel', (e)=>{
    e.preventDefault();
    container.scrollLeft += e.deltaY*0.7;
    console.log(container.scrollLeft);
    //movepgbar
    if(container.scrollLeft > 2100 && container.scrollLeft < 3900){
        scrollLine.style.left = ((container.scrollLeft - 1920)/25*1.2) + "px";
    }else if (container.scrollLeft >= 3900 && container.scrollLeft < 7700){
        scrollLine.style.left = ((container.scrollLeft - 1920)/25*1.5) + "px";
    }else if (container.scrollLeft >= 7700 && container.scrollLeft < 9600){
        scrollLine.style.left = ((container.scrollLeft - 1920)/25*1.6) + "px";
    }else if (container.scrollLeft >= 9600){
        scrollLine.style.left = ((container.scrollLeft - 1920)/25*1.7) + "px";
    }else{
        scrollLine.style.left =  -2 +  "vw";
    }

    if(container.scrollLeft >= 1423 && container.scrollLeft < 2800){
        document.getElementById("mailbox1").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 2800 && container.scrollLeft < 4800){
        document.getElementById("mailbox2").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 4800 && container.scrollLeft < 6700){
        document.getElementById("mailbox3").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 6700 && container.scrollLeft < 8500){
        document.getElementById("mailbox4").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 8500 && container.scrollLeft < 10453){
        document.getElementById("mailbox5").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 10453 && container.scrollLeft < 12300){
        document.getElementById("mailbox6").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 12300 && container.scrollLeft < 14863){
        document.getElementById("mailbox7").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 14863 && container.scrollLeft < 16000){
        document.getElementById("mailbox8").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 16000 && container.scrollLeft < 18500){
        document.getElementById("mailbox9").style.filter = "grayscale(0%)";
    }else if (container.scrollLeft >= 18500){
        document.getElementById("mailbox10").style.filter = "grayscale(0%)";
    }else{
        document.getElementById("mailbox1").style.filter = "grayscale(100%)";
        document.getElementById("mailbox2").style.filter = "grayscale(100%)";
        document.getElementById("mailbox3").style.filter = "grayscale(100%)";
        document.getElementById("mailbox4").style.filter = "grayscale(100%)";
        document.getElementById("mailbox5").style.filter = "grayscale(100%)";
        document.getElementById("mailbox6").style.filter = "grayscale(100%)";
        document.getElementById("mailbox7").style.filter = "grayscale(100%)";
        document.getElementById("mailbox8").style.filter = "grayscale(100%)";
        document.getElementById("mailbox9").style.filter = "grayscale(100%)";
        document.getElementById("mailbox10").style.filter = "grayscale(100%)";
    }

    //fadeppnext
    if(container.scrollLeft > 1500){
        ppnext.style.opacity -= 0.3;
    }else{
        ppnext.style.opacity = 1;
    }

    function myFunction(scale) {
        if (scale.matches) { // If media query matches
            if(container.scrollLeft >= 700 && container.scrollLeft < 1000){
                scrollLine.style.left =  10 +  "px";
                document.getElementById("mailbox2").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 1000 && container.scrollLeft < 1400){
                scrollLine.style.left =  40 +  "px";
                document.getElementById("mailbox3").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 1400 && container.scrollLeft < 1750){
                scrollLine.style.left =  75 +  "px";
                document.getElementById("mailbox4").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 1750 && container.scrollLeft < 2100){
                scrollLine.style.left =  105 +  "px";
                document.getElementById("mailbox5").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 2100 && container.scrollLeft < 2500){
                scrollLine.style.left =  135 +  "px";
                document.getElementById("mailbox6").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 2500 && container.scrollLeft < 2800){
                scrollLine.style.left =  170 +  "px";
                document.getElementById("mailbox7").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 2800 && container.scrollLeft < 3200){
                scrollLine.style.left =  200 +  "px";
                document.getElementById("mailbox8").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 3200 && container.scrollLeft < 3500){
                scrollLine.style.left =  240 +  "px";
                document.getElementById("mailbox9").style.filter = "grayscale(0%)";
            }else if(container.scrollLeft >= 3500){
                scrollLine.style.left =  265 +  "px";
                document.getElementById("mailbox10").style.filter = "grayscale(0%)";
            }else{
                scrollLine.style.left =  -3 +  "px";
                document.getElementById("mailbox1").style.filter = "grayscale(0%)";
                document.getElementById("mailbox2").style.filter = "grayscale(100%)";
                document.getElementById("mailbox3").style.filter = "grayscale(100%)";
                document.getElementById("mailbox4").style.filter = "grayscale(100%)";
                document.getElementById("mailbox5").style.filter = "grayscale(100%)";
                document.getElementById("mailbox6").style.filter = "grayscale(100%)";
                document.getElementById("mailbox7").style.filter = "grayscale(100%)";
                document.getElementById("mailbox8").style.filter = "grayscale(100%)";
                document.getElementById("mailbox9").style.filter = "grayscale(100%)";
                document.getElementById("mailbox10").style.filter = "grayscale(100%)";
            }
        } else {
         document.body.style.backgroundColor = "pink";
         
        }
      }
      
      var scale = window.matchMedia("(max-width: 480px)")
      myFunction(scale) // Call listener function at run time
      scale.addListener(myFunction) // Attach listener function on state changes
})

//open info
function showinfo04() {
    var openinfo = document.getElementById("info04");
    if (openinfo.style.display === "none") {
      openinfo.style.display = "block";
    }else{
        openinfo.style.display = "block"
    }
}

function closeinfo04(){
    var close = document.getElementById("info04");
    if (close.style.display === "block") {
      close.style.display = "none";
    }else{
        close.style.display = "none"
    }
}

function showinfo10() {
    var openinfo = document.getElementById("info10");
    if (openinfo.style.display === "none") {
      openinfo.style.display = "block";
    }else{
        openinfo.style.display = "block"
    }
}

function closeinfo10(){
    var close = document.getElementById("info10");
    if (close.style.display === "block") {
      close.style.display = "none";
    }else{
        close.style.display = "none"
    }
}

// ------------------------------

let anchorSelector = 'a[href^="#"]';
let anchorList = document.querySelectorAll(anchorSelector);
anchorList.forEach(link => {
            link.onclick = function (a) {
                a.preventDefault();
                let destination =
                    document.querySelector(this.hash);
                destination.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
// -------------------------------

gsap.registerPlugin(ScrollTrigger);

TweenMax.from(".page_1 h1", { 
        x: 80,
        opacity:0,
        scale: 0.1,     
    });

TweenMax.to(".page_1 h1", { 
    x: 105,
    opacity:1,
    scale: 1,
    rotationY: 360,
    duration: 2    
});

TweenMax.from(".page_1 h2", { 
    x: -50,
    opacity:0,   
    delay:1.2
});

TweenMax.to(".page_1 h2", { 
    x: 0,
    opacity:1,
    duration: 2,
    delay:1.2
});

TweenMax.from(".page_1 p", { 
    x: -50,
    opacity:0,   
    delay:1.4
});

TweenMax.to(".page_1 p", { 
    x: 0,
    opacity:1,
    duration: 2,
    delay:1.4
});



// gsap.from("#mailbox1", { 
//     scrollTrigger: "#mailbox1",
//     x: 80,
//     opacity:0,
//     scale: 0.1,     
// });

// gsap.to("#mailbox1", { 
//     scrollTrigger: "#mailbox1",
//     x: 105,
//     opacity:1,
//     scale: 1,
//     rotationY: 360,
//     duration: 3     
// });

