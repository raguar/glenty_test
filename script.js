const testimonials = [
    { 
        id : 0,
        name : 'Teresa Van Oerle',
        img : 'images/terersa.png',
        text : 'Klenty seamlessly integrates with Pipedrive and offers straightforward email tracking and cadence management. The contact sync is simple and the support is top-notch. A very efficient and effective platform.',
        job : 'Director of Business Development'
    },
    { 
        id : 1,
        name : 'TIN',
        img : 'images/alex.png',
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        job : ' Director of Business growth'
    },
    { 
        id : 2,
        name : 'FIN',
        img : 'images/Brandon.png',
        text : "Klenty seamlessly integrates with Pipedrive and offers straightforward Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        job : 'Director of Development'
    }
]


const profileImg = document.querySelector('.profile')
const name = document.querySelector('.testimonials-name')
const job = document.querySelector('.testimonials-job')
const text = document.querySelector('.testimonials-text')

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let num = 0;

let currentItem ;

const move = (next) => {
    currentItem = testimonials[next];
    profileImg.src = currentItem.img
    name.innerHTML = currentItem.name
    job.innerHTML = currentItem.job
    text.innerHTML = currentItem.text
}

rightBtn.addEventListener('click', () => {
    num++ ; 

    if (num > testimonials.length -1) {
        num = 0;
    }

    move(num);
})

leftBtn.addEventListener('click', () => {
    num-- ; 
    if (num < 0) {
        num = testimonials.length - 1 ;
    }
    move(num);
})