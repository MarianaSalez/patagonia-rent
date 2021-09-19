function cambiar (id,html){
    document.getElementById(id).innerHTML=html
}

document.getElementById("btn1").onclick = function(){
    cambiar("titulo1", "Quienes Somos")
    cambiar("presentacion1",`Somos una familia radicada hace muchos años en Bariloche, amantes de la montaña y la naturaleza. Con los años emprendimos este proyecto con la intención de acercar al visitante a un turismo sustentable, buscando la conexión del mismo con el  bosque y la montaña que nos rodea.
    Intentamos ofrecer y difundir alternativas no tan masificadas, concientizando a la vez en la importancia de las prácticas de bajo impacto.`)
    cambiar("presentacion2","Buscamos acercar a nuestros visitantes a un turismo mas sustentable, ofreciendo alternativas no tan masificadas y concientizando en la importancia de las practicas de bajo impacto.")
    cambiar("imagenPresentacion",'  <img src="https://i.postimg.cc/k4JRYpK4/quienes-somos.jpg" alt="Foto Familia" class="tarjeta__img slider1">')
}

document.getElementById("btn2").onclick = function(){
    cambiar("titulo1", "Ubicacion")
    cambiar("presentacion1","El complejo se encuentra ubicado en Villa Lago Gutiérrez, un barrio residencial situado en el medio del bosque y la montaña. A sólo 11 km del centro de Bariloche por Ruta 40 Sur camino a El Bolsón, y a los pies del Cerro Ventana. A pocas cuadras se puede disfrutar de las playas del Lago Gutiérrez");
    cambiar("presentacion2","")
    cambiar("imagenPresentacion",`<iframe class="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.806495281246!2d-71.38282728458057!3d-41.182387579283436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDEwJzU2LjYiUyA3McKwMjInNTAuMyJX!5e0!3m2!1ses!2sar!4v1628884865115!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
}

document.getElementById("btn3").onclick = function(){
    cambiar("titulo1", "Excursiones")
    cambiar("presentacion1","Mi nombre es Alejandro Aleuy y soy Guía de Montaña habilitado en el Parque Nacional Nahuel Huapi desde hace 15 años. He desarrollado mi pasión y profesión a lo largo de los Andes, de Argentina, Chile, Bolivia y Perú.")
    cambiar("presentacion2",`<p>Como ferviente admirador del lugar donde vivimos y su entorno es que buscamos acercar a quienes nos visiten al contacto con la naturaleza. Pueden consultarme por cualquier caminata o excursión, ya sea por el día o de algunas horas o incluso varios días en la montaña.</p>
	<p>Así mismo por nuestra amplia trayectoria en la montaña podemos recomendarles o asesorarlos si desean realizar cualquier otra actividad relacionada (Escalada, Rafting, Cabalgatas, Parapente, Mountain Bike, Kayak y actividades náuticas, etc). </p>`)
    cambiar("imagenPresentacion",`<img src="https://i.postimg.cc/YqzVnjXR/trek.jpg" alt="Foto Trekking" class="tarjeta__img slider1">`)}

document.getElementById("btn4").onclick = function(){
    cambiar("titulo1", "Servicios")
    cambiar("presentacion1",`<ul>
    <li>Nuestro objetivo es que los viajeros que nos visitan se sientan locales durante su estadía. Nos ponemos a disposición del huésped para guiarlos en cuanto a caminatas, salidas, excursiones,  ofertas gastronómicas, etc. para que puedan disfrutar al máximo de su viaje.</li>
    <li>El lugar cuenta con parrilla tipo chulengo y fogón con asador.</li>
    <li>Parque con diferentes espacios para la recreación, hamacas, estanques, bancos al sol donde leer un libro, y huerta para recolectar en época de cosecha.</li>
    <li>Estacionamiento dentro de la propiedad.</li>
    <li>Escalada: vivimos a metros de muchos sectores para practicar escalada deportiva en roca, ofrecemos todo tipo de información para quienes practiquen este deporte. </li>
    <li>Todos nuestros espacios cuentan con Smart TV; WIFI; ropa blanca y cocina totalmente equipada.</li>
    </ul>`)
    cambiar("presentacion2","")
    cambiar("imagenPresentacion",`<img src="https://i.postimg.cc/MpZLhxNS/servicios.jpg" alt="Foto servicios" class="tarjeta__img slider1">`)
}

