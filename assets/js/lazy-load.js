// lazy loading wszystkich zdjec, ktore nie sa obsluzone przez lazy loading slicka / nie sa w sliderze

let lazyImages = [...document.querySelectorAll('.lazy-image')]
let inAdvance = 300

function lazyLoad() {
    lazyImages.forEach(image => {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            image.src = image.dataset.src
            image.onload = () => image.classList.add('loaded')
        }
    })
}

lazyLoad()

window.addEventListener('scroll', _.throttle(lazyLoad, 16))
window.addEventListener('resize', _.throttle(lazyLoad, 16))