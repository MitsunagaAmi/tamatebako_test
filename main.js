const header = document.getElementById('header');
const fv = document.getElementById('top');
const fvRange = fv.offsetHeight;

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    // スクロールでヘッダー表示
    if(window.scrollY > fvRange){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});

//グラデ
const gradation = document.querySelector('.gradation');
    gsap.fromTo(
    gradation,
    {
        autoAlpha: 0,
    },{
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
            trigger: gradation,
            start: "top 70%",
            end: "bottom 200%",
            scrub: true,
        },
    }
);

//フェードイン
gsap.utils.toArray('.fadeUp').forEach((fadeUp) =>{
    gsap.fromTo(
    fadeUp,
    {
        autoAlpha: 0,
        y: -30,
    },{
        autoAlpha: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
            trigger: fadeUp,
            start: "top center",
        },
    }
);
})

//メニュー開閉
const nav__button = document.querySelector('.header__nav');
const grobal__nav = document.querySelector('.grobal__nav');

nav__button.addEventListener('click', () => {
    nav__button.classList.toggle('active');
    global__nav.classList.toggle('active');
});



// parallax
const imgBox = document.querySelector('.js-parallax');
gsap.fromTo(
    imgBox.querySelector('img'),{
        yPercent: 0,
    },
    {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: imgBox,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.4,
        },
    }
);

// swiper
const swiper = new Swiper('.swiper', {
  loop: false, // ループ
  speed: 1000, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1, 
  slidesPerGroup: 1,
  allowTouchMove: false,
  cssMode: false,
  freeMode: false,
  direction: "vertical", // 縦方向
//   mousewheel: true, // マウスホイールでスライド
});

const section = document.querySelector('#recommend');
section.addEventListener('wheel', (e) => {

    const rect = section.getBoundingClientRect();
    if (rect.top > -100) return;
    if (e.deltaY > 0 &&!swiper.isEnd) {
        e.preventDefault();
        if (swiper.animating) return;
        swiper.slideNext();
    } else if (e.deltaY < 0 && !swiper.isBeginning) {
        e.preventDefault();
        if (swiper.animating) return;
        swiper.slidePrev();
    }

},{passive: false });