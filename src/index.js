import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const projectLinks = document.querySelectorAll(".projects__container ul li a");
const contactLinks = document.querySelectorAll(".contact__container ul li a");

// const lettersConstruction = new SplitText(".construction", { type: "chars" });
const lettersName = new SplitText(".name h1", { type: "words" });
const lettersNameInfo = new SplitText(".name p", { type: "words" });
const lettersProjectTitle = new SplitText(".projects__container h2", { type: "words, chars" });
const lettersContactTitle = new SplitText(".contact__container h2", { type: "words, chars" });

const tl = gsap.timeline();

gsap.from(".construction", {
  opacity: 0,
  duration: 4,
  delay: 0.7,
  // ease: "power2.out",
});
gsap.from(lettersName.words, {
  y: 60,
  duration: 2,
  stagger: 0,
});

gsap.from(lettersNameInfo.words, {
  y: 60,
  duration: 2,
  stagger: 0,
});

gsap.from(lettersContactTitle.words, {
  y: 60,
  duration: 2,
  stagger: 0.3,
});

gsap.from(lettersProjectTitle.words, {
  y: 60,
  duration: 2,
  stagger: 0.3,
});

gsap.from(".projects__container ul li a", {
  y: 60,
  duration: 2,
  stagger: 0.3,
});

gsap.from(".contact__container ul li a", {
  y: 60,
  duration: 2,
  stagger: 0.3,
});
