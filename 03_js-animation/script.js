const burger = document.querySelector(".burger");
// const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
// const header = document.querySelector(".header");
// const main = document.querySelector(".main");

let tle = gsap.timeline({ paused: true });

tle.fromTo(
    ".menu__top",
    { y: -50, opacity: 0 }, // начальные значения
    { y: 0, duration: 0.5, opacity: 1, ease: "sine" } // конечные значения
  )

  .to(".menu__container",
    { duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "sine",
    })

  .fromTo(".menu",
    { y: -50, opacity: 0, display: "none" }, // начальные значения
    { y: 0, duration: 0.5, opacity: 1, display: "block", ease: "sine" }, "-=0.5")

  .from(['.social', '.menu__right'], {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "sine"
  });

burger.onclick = () => tle.play();
close.onclick = () => tle.reverse();

//анимация первой страницы
const tl = gsap.timeline();
tl.to([".hero__title", ".hero__btn"],
{ duration: 1.2,
  opacity: 1,
  y: 0,
  ease: "power1.out",
  delay: 0.5,
})
  .to(".hero__descr",
    { duration: 1.2,
      opacity: 1,
      ease: "power1.out",
    }, "-=0.2")
  .to(".photos-wrap img:nth-child(1)",
    { duration: 0.5,
      opacity: 1,
      scale: 1,
      ease: "power1.out",
    }, "-=1")
  .to(".photos-wrap img:nth-child(2)",
    { duration: 0.5,
      opacity: 1,
      scale: 1,
      ease: "power1.out",
    }, "-=0.8")
  .to(".photos-wrap img:nth-child(3)",
    { duration: 0.5,
      opacity: 1,
      scale: 1,
      ease: "power1.out",
    }, "-=0.7")
  .to(".photos__author",
    { duration: 1.2,
      opacity: 1,
      ease: "power1.out",
    }, "-=0.5");
