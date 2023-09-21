const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show2");
        }else{
            entry.target.classList.remove("show2");
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el)=> observer2.observe(el));

const elementHome = document.getElementById("home");
const elementServices = document.getElementById("services");
const elementProjects = document.getElementById("projects");
const elementAbout = document.getElementById("about");
const elementContact = document.getElementById("contact");
const elementLogo = document.getElementById("logo");
const elementLogo2 = document.getElementById("logo2");

const elementArrowtop = document.getElementById("arrowtop")

elementLogo.addEventListener('click', function(){
    window.open("digitalimage.html", "_self");
})

elementLogo2.addEventListener('click', function(){
    window.open("digitalimage.html", "_self");
})

document.querySelectorAll('.header-text2').forEach((headerItem) => {
    const headerItemText = headerItem.textContent.trim().toUpperCase();
    headerItem.addEventListener('click', function() {
        if(headerItemText == 'HOME' ){
            elementHome.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'SERVICES'){
            elementServices.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'PROJECTS'){
            elementProjects.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ABOUT'){
            elementAbout.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'CONTACT'){
            elementContact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    })    
})

document.querySelectorAll('.header-text').forEach((headerItem) => {
    const headerItemText = headerItem.textContent.trim().toUpperCase();
    headerItem.addEventListener('click', function() {
        if(headerItemText == 'HOME' ){
            elementHome.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'SERVICES'){
            elementServices.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'PROJECTS'){
            elementProjects.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ABOUT'){
            elementAbout.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'CONTACT'){
            elementContact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    })    
})

const para = document.getElementById('para');

para.addEventListener('scroll',function(){
    var scrollPercent = Math.round(para.scrollTop );
    if(scrollPercent>700) {
        elementArrowtop.style.display="inline-flex";
    }
    if(scrollPercent>2800){
        elementArrowtop.style.bottom="8rem";
    }
    if(scrollPercent<700) {
        elementArrowtop.style.display="none";
    }
    if(scrollPercent<2800) {
        elementArrowtop.style.bottom="2rem";
    }
})


const menuIcon = document.getElementById('menu'); 
const floationMenu = document.getElementById('floating-menu');
var menuActivated = false;

document.querySelector(".para").addEventListener('click',function(){
    if(menuActivated){
        para.style.filter = "blur(0rem)"
        floationMenu.style.display = "none"
        menuActivated = false;        
    }
})

menuIcon.addEventListener('click', function(){
    if(!menuActivated){
        para.style.filter = "blur(0.4rem)"
        floationMenu.style.display = "flex"
        menuActivated = true;
    }else{
        para.style.filter = "blur(0rem)"
        floationMenu.style.display = "none"
        menuActivated = false; 
    }    
})




