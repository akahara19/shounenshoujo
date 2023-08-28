import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import simpleParallax from 'simple-parallax-js';

const app = createApp(App)

app.use(router)

app.mount('#app')


const videoContainer = document.querySelector(".wrapper");
const title = document.querySelector(".title");

const LERP_ALPHA = 0.5;

let titlePos = {
  x: -50,
  y: -50
};

videoContainer.addEventListener("mousemove", (e) => {
  const x = -50 + ((e.pageX - innerWidth / 2) / (innerWidth / 2)) * 2;
  const y = -50 + ((e.pageY - innerHeight / 2) / (innerHeight / 2)) * 2;

  titlePos.x = titlePos.x * (1 - LERP_ALPHA) + x * LERP_ALPHA;
  titlePos.y = titlePos.y * (1 - LERP_ALPHA) + y * LERP_ALPHA;
});

videoContainer.addEventListener("mouseout", (e) => {
  titlePos.x = titlePos.x * (1 - LERP_ALPHA) + -50 * LERP_ALPHA;
  titlePos.y = titlePos.y * (1 - LERP_ALPHA) + -50 * LERP_ALPHA;
});

setInterval(function () {
  title.style.transform = `translate(${titlePos.x}%, ${titlePos.y}%)`;
}, 10);

document.addEventListener("contextmenu", (event) => event.preventDefault());

var video = document.getElementsByClassName('video');
new simpleParallax(video, {
  delay: .9,
  scale: 1.1,
	transition: 'cubic-bezier(0,0,0,6)',
});
// about

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
});

var cardAbout = document.getElementsByClassName('cardAbout');
new simpleParallax(cardAbout, {
  delay: .10,
	transition: 'cubic-bezier(0,0,0,1)',
});

// Gallery
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
 content: "#content",
 smooth: 3,
 effects: true
});

smoother.effects("img", { speed: "auto" });

