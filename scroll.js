/*============================== SCROLL REVEAL =============================*/ 
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL Home*/
sr.reveal('#home img',{});
sr.reveal('#home h1',{}); 
sr.reveal('#home',{delay: 200}); 
sr.reveal('#home_buttons',{delay: 400}); 


/*SCROLL About*/
sr.reveal('#about h3',{}); 
sr.reveal('#about-p',{delay: 200}); 

/*SCROLL About/ Team box*/
sr.reveal('#box',{delay: 200}); 


/*SCROLL Piller*/
sr.reveal('#pillar h3',{}); 
sr.reveal('#pillar li',{delay: 200}); 

/*SCROLL Project*/
sr.reveal('#project h3',{}); 
// sr.reveal('#project-left',{delay: 200}); 
// sr.reveal('#project-right',{delay: 200}); 

/*SCROLL Team*/
sr.reveal('#team h3',{}); 

/*SCROLL Story*/
sr.reveal('#story h3',{}); 
sr.reveal('#story-left',{delay: 200}); 
sr.reveal('#story-right',{delay: 200}); 

/*SCROLL Footer*/
sr.reveal('footer',{}); 






