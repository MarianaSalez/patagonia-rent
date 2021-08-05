let ArrowsLeft = document.querySelectorAll('.fa-angle-left')
let ArrowsRight = document.querySelectorAll('.fa-angle-right')
let galeryImg = document.querySelectorAll('.tarjeta__img')
let carousel = []

import {imagenes} from './imagenes.js'

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
        reference.image.setAttribute('src', images[i][reference.url])
        reference.btnLeft.addEventListener('click', ()=>{
            if(reference.url > 0){
                reference.url--
            }
            else{
                reference.url = images[i].length -1
            }
            reference.image.setAttribute('src', images[i][reference.url])
        })

        reference.btnRight.addEventListener('click', ()=>{
            if(reference.url < images[i].length -1){
                reference.url++
            }
            else{
                reference.url = 0
            }
            reference.image.setAttribute('src', images[i][reference.url])
        })
    }
}

function crearGaleria(cantImg){
    let images = []
    for(let i = 0; i < cantImg; i++){
        images.push(`../images/acuarioCarousel/img${i}.jpg`)
    }
    return images
}

//GALERIAS DEL IMAGENES
const acuarioCarousel = crearGaleria(11)
const images = [imagenes.acuario.acuarioCarousel, imagenes.acuario.acuarioCarousel, imagenes.alma.almaCarousel, imagenes.bosque.bosqueCarousel, imagenes.refugio.refugioCarousel];

addCarousel(ArrowsLeft,ArrowsRight, galeryImg, galeryImg.length)
carouselMove(carousel)
addClassName(ArrowsLeft, 'fas fa-angle-left carrouselBtnLeft')
addClassName(ArrowsRight, 'fas fa-angle-right carrouselBtnRight')





