function cambiar (id,html){
    document.getElementById(id).innerHTML=html
}

document.getElementById("btn1").onclick = function(){
    cambiar("titulo1", "Quienes Somos")
    cambiar("presentacion1",`Somos una familia radicada hace muchos años en Bariloche, amantes de la montaña y la naturaleza. Con los años emprendimos este proyecto con la intención de acercar al visitante a un turismo sustentable, buscando la conexión del mismo con el  bosque y la montaña que nos rodea.
    Intentamos ofrecer y difundir alternativas no tan masificadas, concientizando a la vez en la importancia de las prácticas de bajo impacto.`)
    cambiar("presentacion2","Buscamos acercar a nuestros visitantes a un turismo mas sustentable, ofreciendo alternativas no tan masificadas y concientizando en la importancia de las practicas de bajo impacto.")
    cambiar("imagenPresentacion",'  <img src="https://i.postimg.cc/W4Z5zxNJ/img1.jpg" alt="Foto Familia" class="tarjeta__img slider1">')
}

document.getElementById("btn2").onclick = function(){
    cambiar("titulo1", "Ubicacion")
    cambiar("presentacion1","Nos encontramos en un barrio tranquilo de montaña, en las afueras de San Carlos de Bariloche a 15 minutos del centro y 20 del Cerro Catedral.")
    cambiar("presentacion2","")
    cambiar("imagenPresentacion",`<iframe class="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67930.43076192202!2d-71.40181835197643!3d-41.197155308473626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a6fdc23f53213%3A0x30174fbec7725467!2sLago%20Guti%C3%A9rrez!5e0!3m2!1ses!2sar!4v1628544609646!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
}

document.getElementById("btn3").onclick = function(){
    cambiar("titulo1", "Excursiones")
    cambiar("presentacion1","Te recomendamos algunas actividades, pero no dudes en consultarnos por mas:")
    cambiar("presentacion2",`<ul>
    <li>Trekking Cerrito Llao Llao</li>
    <li>Trekking Refugio Lopez</li>
    <li>Recorrer en auto la Pampa linda a pies del cerro tronador</li>
    <li>Rafting en el rio Manso</li>
</ul>`)
cambiar("imagenPresentacion",`<img src="images/web/Trekking bariloche 2.jpg" alt="Foto Trekking" class="tarjeta__img slider1">`)
}

document.getElementById("btn4").onclick = function(){
    cambiar("titulo1", "Servicios")
    cambiar("presentacion1","Nuestras Instalaciones cuentan con los siguientes servicios:")
    cambiar("presentacion2",`<ul>
    <li>Cocina</li>
    <li>Estacionamiento gratis en la propiedad</li>
    <li>Zona de trabajo</li>
    <li>Wi-fi</li>
    <li>Espacio de parilla y fogones</li>
</ul>`)
cambiar("imagenPresentacion",`<img src="images/web/servicios.JPG" alt="Foto servicios" class="tarjeta__img slider1">`)
}

