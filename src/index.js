import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const projectLinks = document.querySelectorAll(".projects__container ul li a");
const contactLinks = document.querySelectorAll(".contact__container ul li a");

console.log(SplitText);
const lettersConstruction = new SplitText(".construction", { type: "chars" });
const lettersName = new SplitText(".name h1", { type: "words" });
const lettersNameInfo = new SplitText(".name p", { type: "words" });
const lettersProjectTitle = new SplitText(".projects__container h2", { type: "words, chars" });
const lettersContactTitle = new SplitText(".contact__container h2", { type: "words, chars" });

const tl = gsap.timeline();

gsap.from(lettersConstruction.chars, {
  rotateY: "90deg",
  delay: 0.3,
  stagger: 0.07,
  duration: 7,
  ease: "back.out",
});

gsap.from(lettersName.words, {
  y: 40,
  duration: 2,
});
gsap.from(lettersNameInfo.words, {
  y: 40,
  delay: 0.5,
  duration: 2.4,
});
gsap.from(lettersProjectTitle.chars, {
  y: 20,
  duration: 0.5,
  stagger: 0.1,
});

projectLinks.forEach((link) => {
  const linkLetters = new SplitText(link, { type: "chars" });

  gsap.from(linkLetters.chars, {
    y: 20,
    delay: 0.2,
    stagger: 0.03,
    duration: 0.5,
  });
});

contactLinks.forEach((link) => {
  const linkLetters = new SplitText(link, { type: "chars" });
  gsap.from(linkLetters.chars, {
    y: 20,
    delay: 0.2,
    stagger: 0.02,
    duration: 0.5,
    ease: "linear",
  });
});

gsap.from(lettersContactTitle.chars, {
  y: 20,
  duration: 0.5,
  stagger: 0.1,
});
