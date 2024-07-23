let navbar = document.getElementById("nav")
let upBtn = document.getElementById("up")


window.addEventListener("scroll",()=>{
    if(window.scrollY>60){
        navbar.classList.add("scroll")
    }
    else{
        navbar.classList.remove("scroll")
    }
    if(window.scrollY>120){
        upBtn.style.opacity="1"
    }
    else{
        upBtn.style.opacity="0"
    }
})
upBtn.addEventListener("click",()=>{
    window.location.href="#main"
})
