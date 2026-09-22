document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  // gsap code here!
  //lenis smooth scroller
  // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

function getPos(section, xPercent, yPercent) {
    const rect= section.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;

    return{
        x:rect.left + rect.width * xPercent - window.innerWidth / 2,
        y: rect.top + scrollY + rect.height * yPercent - window.innerHeight / 2
    };
}
//scroll trigger according to media
ScrollTrigger.matchMedia({
    "(min-width:1024px)":function(){
      const pome =document.querySelector('#pome');
      const s2 = document.querySelector('#about');
      const s3 = document.querySelector('#process');
      const s4 = document.querySelector('#gallery');
      const s5 = document.querySelector('#shop');

      //scrolling animation for pomegranate can to about section
      gsap.to(pome,{
        scrollTrigger: {
            trigger:s2,
            start:"top bottom",
            end:"center center",
            scrub: 1.2,
        },
        x:() => getPos(s2, 0.78, 0.50).x,
        y:() => getPos(s2, 0.78, 0.50).y,
        width: "32vw",
        rotate: 40,
        ease: "power1.inOut",
        immediateRender: false
      });
      // scrolling animation for pomegranate can to process section 
      gsap.to(pome, {
       scrollTrigger: {
             trigger: s3, // #process
             start: "top bottom",
             end: "center center",
             scrub: 1.2,
        },
        x: () => getPos(s3, 0.22, 0.6).x,
        y: () => getPos(s3, 0.22, 0.6).y,
        width: "32vw",
        rotate: 0,
        ease: "power1.inOut",
        immediateRender: false
     });
     //GSAP animation for hero section pomegrante can
     gsap.from(pome,{
        opacity: 0,
        scale: 0.6,
        duration: 1, 
        ease: "power2.out"
     })
    }
 })
 });

// ---------- GSAP NAVBAR ----------


gsap.registerPlugin(ScrollTrigger);

const navbar = document.getElementById("mainNav");

ScrollTrigger.create({
    start: "top -80px",

    onEnter: () => {
        navbar.classList.add("scrolled");
    },

    onLeaveBack: () => {
        navbar.classList.remove("scrolled");
    }
});
// ---------- CLOSE NAVBAR AFTER CLICK ----------

const navLinks = document.querySelectorAll("#navbarNav .nav-link");
const navbarCollapse = document.getElementById("navbarNav");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const collapse =
            bootstrap.Collapse.getInstance(navbarCollapse);

        if (collapse) {
            collapse.hide();
        }

    });

});