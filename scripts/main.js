const submits = document.querySelectorAll('input');

document.head.insertAdjacentHTML(
    'afterbegin',
    ` 
 <link rel="stylesheet" href="./styles/constructor.css">  
 <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
`
);

function setTitle(dataList) {
    const data = [...document.querySelectorAll(dataList)];
    data.map(el => el.classList.add('d-title'));
}

setTitle('[data-title]');

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


submits.forEach((submit) => {
    submit.addEventListener('click', (ev) => {
        submit.type === 'submit' ? ev.preventDefault() : 'continue';

        submit.id === 'phone'
            ? submit.addEventListener('keyup', function() {
                this.value = this.value.replace(/[^\d]/g,'')
            })
            : 'continue';
    });
});






