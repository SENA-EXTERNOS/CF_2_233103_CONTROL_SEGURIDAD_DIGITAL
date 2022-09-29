<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/imagentema1.svg')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Para avanzar con el desarrollo del tema, es necesario tener claro el concepto de ciberseguridad, que se abordará con mayor profundidad en un contenido formativo posterior, dedicado exclusivamente a este tema, en este apartado se hace una primera aproximación.
             


    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1  Definición de conceptos esenciales.


    p.mt-2 Diversos autores definen la ciberseguridad de la siguiente forma:


    .tarjeta.bgr-slider.p-4.mt-4
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            b.mt-2 Arroyo Guardeño, D. Gayoso Martínez, V. & Hernández Encinas, L. (2020) definen la ciberseguridad así                                
            p.mt-3 Ciberseguridad, del término de la siguiente forma: “podemos definir la ciberseguridad como el conjunto de técnicas, procedimientos y protocolos encaminados a la protección de la información, vinculada a los usuarios de las cibertecnologías. Esta protección demanda la custodia no solo de la información en sí, sino también de todos los elementos precisos para su correcta gestión. Es decir, la ciberseguridad tiene como objetivo proteger todo tipo de activo o recurso de valor para una persona, empresa u organización (p.12). 
            p También, asocian tres elementos que debe incluir la ciberseguridad como se observa en el gráfico:
       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider1.png', alt='Texto que describa la imagen')
              
        .row.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            b.mt-2 Otra valiosa definición es la que brinda Giant, N. (2016), quien indica que                         
            p.mt-3 La ciberseguridad se refiere al uso seguro y responsable de los productos de la tecnología de la información y la comunicación (TIC), incluyendo Internet, los dispositivos móviles y de comunicación y los instrumentos tecnológicos diseñados para guardar, compartir o recibir información, por ejemplo, los teléfonos móviles, las cámaras digitales, etc. (p.17).
            p Esta definición puede ampliar el concepto de ciberseguridad más allá de los antivirus y los equipos de seguridad de la red, hace énfasis en el usuario, la manera en que actúa y se responsabiliza sobre su propia seguridad y la de su empresa
       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider2.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            b.mt-2 Otra valiosa definición es la que brinda Giant, N. (2016), quien indica que                                
            p.mt-3 La ciberseguridad agrupa recursos de hardware y software junto con políticas, normas y comportamientos seguros, los cuales tienen aplicabilidad para el uso personal, corporativo e industrial; siempre y cuando el personal cuente con formación sobre los cuidados que debe tener para proteger la información. 
       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider3.png', alt='Texto que describa la imagen')


    separador

    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2  Contextualización y estado del arte.


    p.mt- Para continuar es importante conocer el estado actual de la ciberseguridad en las empresas, el país y el mundo.



    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenidotarjeta.p-4
        .row.justify-content-center.mb-3
          .col-9
            img(src='@/assets/curso/temas/Tema2/carrusel1.svg' alt='AvatarTop')
        h2.text-center Crecimiento exponencial
        p.text-center Citando nuevamente a Arroyo Guardeño, D. Gayoso Martínez, V. & Hernández Encinas, L. (2020), “en España, por ejemplo, en solo un año, entre 2018 y 2019, los ciberdelitos denunciados representaron un 10% del total de denuncias por algún tipo de delito, y en este mismo periodo se tuvo un aumento del 35% de los casos reportados” (p.11).
      
      .tarjeta.color-acento-contenidotarjeta.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema2/carrusel2.svg' alt='AvatarTop')
        h2.text-center En Colombia
        p.text-center Según cifras del Centro Cibernético Policial MinTIC (2021), durante el año 2021 los delitos cibernéticos en Colombia ascendieron a 33.465, lo que significa un aumento de 17 % en comparación con 2020, cuando fueron 28.524 casos. Además, se recibieron 1.558 denuncias y se efectuaron 49 capturas”, revelaron las autoridades.

      
      .tarjeta.color-acento-contenidotarjeta.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema2/carrusel3.svg' alt='AvatarTop')
        h2.text-center El precio de los fallos en ciberseguridad
        p.text-center La revista portafolio (2022) [6] indica que, en el mundo durante el último año, los ciberdelitos crecieron en un 150% y aproximadamente el 32% de las empresas fueron atacadas, estas se vieron en la obligación de pagar rescates a piratas informáticos para recuperar su información. Entre esas empresas se encuentran corporaciones, bancos, e inclusive gobiernos, así que dichos pagos representan cantidades de dinero considerables. Ámbito (2022)[7] indica que los ciberataques en el 2021 han costado más de 5,7 billones de euros.
      
      .tarjeta.color-acento-contenidotarjeta.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema2/carrusel4.svg' alt='AvatarTop')
        h2.text-center Políticas públicas: según MinTIC (2021), el propósito de la política de seguridad digital
        p.text-center El objetivo general de esta política es que los colombianos y las empresas conozcan e identifiquen los riesgos a los que están expuestos en el entorno digital y aprendan como protegerse, prevenir y reaccionar ante los delitos y ataques cibernéticos.
        p.text-center Esta labor a nivel institucional requiere un arduo trabajo e inversión conjuntas entre el estado y la empresa privada, labor que tiene un alto componente educativo, el cual exige adoptar una cultura de seguridad digital en el país. 

      














</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
