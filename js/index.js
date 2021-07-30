const images = ['http://www.fonditos3d.com/1024x768/espacio-misterioso.jpg', 'https://fondosmil.com/fondo/88265.jpg', 'https://fondosmil.com/fondo/88233.jpg'];
let ArrowsLeft = document.querySelectorAll('.fa-angle-left')
let ArrowsRight = document.querySelectorAll('.fa-angle-right')
let galeryImg = document.querySelectorAll('.tarjeta__img')
let carousel = []

function addClassName(array, className) {
    let cont = 0
    for (const i of array) {
        i.setAttribute('class', `${className}${cont}`)
        cont++
    }
}

function addCarousel(btnsLeft, btnsRight, Images, length) {
    for (let i = 0; i < length; i++) {
        carousel.push(
            {
                btnLeft: btnsLeft[i], 
                btnRight: btnsRight[i], 
                image: Images[i],
                url: 0 
            }
        )
    }
}

function carouselMove(array) {
    for (let i = 0; i < carousel.length; i++) {
        const reference = array[i]
        reference.btnLeft.addEventListener('click', ()=>{
            if(reference.url > 0){
                reference.url--
            }
            else{
                reference.url = images.length -1
            }
            reference.image.setAttribute('src', images[reference.url])
        })

        reference.btnRight.addEventListener('click', ()=>{
            if(reference.url < images.length -1){
                reference.url++
            }
            else{
                reference.url = 0
            }
            reference.image.setAttribute('src', images[reference.url])
        })
    }
}

addCarousel(ArrowsLeft,ArrowsRight, galeryImg, galeryImg.length)
carouselMove(carousel)
addClassName(ArrowsLeft, 'fas fa-angle-left carrouselBtnLeft')
addClassName(ArrowsRight, 'fas fa-angle-right carrouselBtnRight')





