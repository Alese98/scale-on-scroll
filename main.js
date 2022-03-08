import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger)


let images = document.querySelectorAll('img')


images.forEach((images) =>{
  gsap.to(images, {
    scrollTrigger: {
      trigger:  images,
      start: 'top 60%',
      end: 'bottom 5%',
      scrub: true,
    },
    scale: 1.5,
    transformOrigin: "center",
    ease: "none"
  })
  
})