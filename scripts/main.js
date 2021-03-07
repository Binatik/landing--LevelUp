document.head.insertAdjacentHTML(
    'afterbegin',
    ` 
 <link rel="stylesheet" href="./styles/constructor.css">  
 <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
`
);

const swiper = new Swiper('.swiper-container', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },

    on: {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    }
});
