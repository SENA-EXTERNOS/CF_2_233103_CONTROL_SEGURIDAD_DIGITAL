<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de Ciberseguridad.

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
    
    #t_2_1.titulo-segundo.color-acento-contenido.mt-2
      h2 2.1  Definición de conceptos esenciales.


    p.mt-2 Diversos autores definen la ciberseguridad de la siguiente forma:


    .row.justify-content-around.align-items-center
      SlyderA(tipo="b").bg5
        .row.mt-.justify-content-center
          .col-md-5.mb-4.mb-md-0.mt-5
            b Arroyo Guardeño, D. Gayoso Martínez, V. & Hernández Encinas, L. (2020) definen la ciberseguridad así                                
            p.mt-3.text-small Ciberseguridad, del término de la siguiente forma: “podemos definir la ciberseguridad como el conjunto de técnicas, procedimientos y protocolos encaminados a la protección de la información, vinculada a los usuarios de las cibertecnologías. Esta protección demanda la custodia no solo de la información en sí, sino también de todos los elementos precisos para su correcta gestión. Es decir, la ciberseguridad tiene como objetivo proteger todo tipo de activo o recurso de valor para una persona, empresa u organización (p.12). 
            p.text-small También, asocian tres elementos que debe incluir la ciberseguridad como se observa en el gráfico:
       
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider1.png', alt='Texto que describa la imagen')
              
        .row.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            b.mt-2 Otra valiosa definición es la que brinda Giant, N. (2016), quien indica que                         
            p.mt-4.text-small La ciberseguridad se refiere al uso seguro y responsable de los productos de la tecnología de la información y la comunicación (TIC), incluyendo Internet, los dispositivos móviles y de comunicación y los instrumentos tecnológicos diseñados para guardar, compartir o recibir información, por ejemplo, los teléfonos móviles, las cámaras digitales, etc. (p.17).
            p.text-small Esta definición puede ampliar el concepto de ciberseguridad más allá de los antivirus y los equipos de seguridad de la red, hace énfasis en el usuario, la manera en que actúa y se responsabiliza sobre su propia seguridad y la de su empresa
       
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider2.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            b  Otra valiosa definición es la que brinda Giant, N. (2016), quien indica que                                
            p.mt-4.text-small La ciberseguridad agrupa recursos de hardware y software junto con políticas, normas y comportamientos seguros, los cuales tienen aplicabilidad para el uso personal, corporativo e industrial; siempre y cuando el personal cuente con formación sobre los cuidados que debe tener para proteger la información. 
       
          .col-md-6.mt-5 
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider3.png', alt='Texto que describa la imagen')


    separador

    #t_2_2.titulo-segundo.color-acento-contenido.mt-2
      h2 2.2  Contextualización y estado del arte.


    p.mt- Para continuar es importante conocer el estado actual de la ciberseguridad en las empresas, el país y el mundo.

    SlyderF.mb-5.mt-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel1.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Crecimiento exponencial
          p.text-center Citando nuevamente a Arroyo Guardeño, D. Gayoso Martínez, V. & Hernández Encinas, L. (2020), “en España, por ejemplo, en solo un año, entre 2018 y 2019, los ciberdelitos denunciados representaron un 10% del total de denuncias por algún tipo de delito, y en este mismo periodo se tuvo un aumento del 35% de los casos reportados” (p.11).

      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel2.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 En Colombia
          p.text-center Según cifras del Centro Cibernético Policial MinTIC (2021), durante el año 2021 los delitos cibernéticos en Colombia ascendieron a 33.465, lo que significa un aumento de 17 % en comparación con 2020, cuando fueron 28.524 casos. Además, se recibieron 1.558 denuncias y se efectuaron 49 capturas”, revelaron las autoridades.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel3.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 El precio de los fallos en ciberseguridad
          p.text-center La revista portafolio (2022) [6] indica que, en el mundo durante el último año, los ciberdelitos crecieron en un 150% y aproximadamente el 32% de las empresas fueron atacadas, estas se vieron en la obligación de pagar rescates a piratas informáticos para recuperar su información. Entre esas empresas se encuentran corporaciones, bancos, e inclusive gobiernos, así que dichos pagos representan cantidades de dinero considerables. Ámbito (2022)[7] indica que los ciberataques en el 2021 han costado más de 5,7 billones de euros.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel4.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Políticas públicas: según MinTIC (2021), el propósito de la política de seguridad digital
          p.text-center El objetivo general de esta política es que los colombianos y las empresas conozcan e identifiquen los riesgos a los que están expuestos en el entorno digital y aprendan como protegerse, prevenir y reaccionar ante los delitos y ataques cibernéticos.
          p.text-center Esta labor a nivel institucional requiere un arduo trabajo e inversión conjuntas entre el estado y la empresa privada, labor que tiene un alto componente educativo, el cual exige adoptar una cultura de seguridad digital en el país. 


   
    separador

    #t_2_3.titulo-segundo.color-acento-contenido.mt-5
      h2 2.3  Objetivos de la ciberseguridad.



    .row.justify-content-around.align-items-center.mb-5.mt-5
      .col-9
          .row
            .col-lg-1
              figure
                img(src='@/assets/curso/temas/Tema2/imag3.svg' width='85' height='85' )
      
            .col-lg-11
              p A pesar de los riesgos y las cifras alarmantes, la ciberseguridad ha sido considerada como prioridad para las organizaciones, los gobiernos y las personas, estableciendo propósitos u objetivos de las políticas de esta:


      .row.justify-content-center.mt-5
      .col-lg-8.sm-8

        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema2/elemento.png', alt='Texto que describa la imagen')
              
          .tarjeta.color-acento-botones.p-3(x="10%" y="2%" numero="1")
            h5 Protección.           
              p Es el objetivo más evidente de las políticas de seguridad digital, el centro de todo debe ser la protección de los activos de información de las empresas, ya que ellos son la fuente principal del movimiento operativo y económico de las organizaciones.

          .tarjeta.color-acento-botones.p-3(x="90%" y="40%" numero="2")
            h5 Empleo.
           
            p Es un área del conocimiento que actualmente tiene una demanda alta de profesionales y provee mejores salarios, con respecto a otros cargos del entorno de las TIC.

          .tarjeta.color-acento-botones.p-3(x="9%" y="40%" numero="3")
            h5 Desarrollo tecnológico.
            
            p La ciberseguridad requiere que se invierta en investigación y desarrollo de tecnologías capaces de actuar y proteger de las amenazas modernas, que evolucionan también a un ritmo acelerado.

          .tarjeta.color-acento-botones.p-3(x="10%" y="70%" numero="4")
            .h5.mb-2 Sensibilización y educación.
            
            p Como se ha mencionado, la cultura digital de las personas tiene alto impacto en el desempeño de un sistema de seguridad digital, por eso es fundamental que la ciberseguridad se enseñe desde temprana edad en los colegios y sea tema de constante capacitación para profesionales y empresas.
      
          .tarjeta.color-acento-botones.p-3(x="90%" y="70%" numero="5")         
            .h5.mb-2 Economía.
            
            p Como se ha detallado anteriormente, en la medida que el sistema de la organización esté blindado de ataques, podrá garantizar una mayor seguridad a los usuarios, asegurando menos riesgos y reprocesos, lo que se verá reflejado en mayor eficiencia y menor probabilidad de tener que pagar los mencionados rescates a delincuentes informáticos.
      
      separador

      #t_2_4.titulo-segundo.color-acento-contenido
        h2 2.4.	Metodología y estrategias.
       
      .row.mt-1.justify-content-center
        .tarjeta.color-primario--borde
          .col-lg-5  
            figure
                img(src='@/assets/curso/temas/Tema2/elemento2.png' width='400px' height='171px')
          
          .col-lg-6.mt-5
              p.text-small En la ciberseguridad es necesario plantear estrategias que se desarrollen a través de métodos y metodologías encargadas de marcar la ruta a seguir, cómo garantía de la seguridad digital de la información en la organización. En el siguiente vídeo se detallan las metodologías y estrategias.  






        .col-lg-6.mt-4
      figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO   
      


      separador

      #t_2_5.titulo-segundo.color-acento-contenido.mt-2
        h2 2.5.	Técnicas de diagnóstico.




        .row.justify-content-around.align-items-center.mb-5
          .row.justify-content-around.align-items-center.textoeditado
            .col-lg-5.mb-6
              p En este ítem se listan algunas recomendaciones y procedimientos para identificar el estado del sistema de información digital y de los equipos.
              p Para iniciar, es necesario recordar que una vulnerabilidad es un punto débil del sistema, desde el cual un tercero o una persona malintencionada puede acceder al sistema de información.  Una forma útil para diagnosticar la seguridad de este, consiste en ubicarse en el lugar de quien quiere perjudicar el sistema, e intentar acceder a afectar algún elemento.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/Tema2/elemento3.png').imagen-decorativa-1


        .row.justify-content-around.align-items-center
              .col-lg-2.col-sm-4
                  figure
                    img(src='@/assets/curso/temas/Tema2/imag5.svg', alt='Texto que describa la imagen' width='84px' height='84,92px' )
              .col-lg-9.col-sm-10
                p En la ciberseguridad es necesario plantear estrategias que se desarrollen a través de métodos y metodologías encargadas de marcar la ruta a seguir, cómo garantía de la seguridad digital de la información en la organización. En el siguiente vídeo se detallan las metodologías y estrategias.  


        .row.mt-5
        TabsA.color-secundario.mb-5        
          .tarjeta.color-tarjetacliente.p-4(titulo="A nivel físico")      
            .row           
              .col-xl-10
              p ¿Qué tan probable será que un tercero acceda físicamente a algún equipo o terminal, viole el acceso y pueda extraer, modificar o eliminar información importante? 
              p.mt-2 Verifique los permisos de acceso a carpetas, archivos y cuentas de usuario, por ejemplo, ¿qué tan seguras son las contraseñas?
                
                  
          .tarjeta.color-tarjetacliente.p-4(titulo="A nivel de conectividad")
          
            .row                     
              .col-xl-10
              p ¿Qué probabilidad y de qué forma podría un tercero acceder de manera inalámbrica o mediante cable a alguna de las redes o equipos de la compañía, y estando allí, qué información podría estar a su alcance? 
              p.mt-2 Verifique la seguridad de las contraseñas y el listado de equipos conectados a los medios inalámbricos, identifique que puertos podrían estar potencialmente disponibles para la conexión de un tercero en los equipos de red y el control de acceso al cuarto de telecomunicaciones.

          .tarjeta.color-tarjetacliente.p-4(titulo="Software")
          
            .row                     
              .col-xl-10
              p ¿El software que tiene la compañía, cuenta con las licencias correspondientes o se usa de manera ‘pirata’? ¿los equipos de la empresa tienen instalados solo los programas permitidos y en sus versiones autorizadas? o ¿existe algún equipo con software de terceros instalado sin autorización?
              p.mt-2 Compruebe el listado de programas instalados y la lista de procesos en ejecución de cada equipo.


          .tarjeta.color-tarjetacliente.p-4(titulo="Físico/locativo")
          
            .row                     
              .col-xl-10
              p Los activos están expuestos a algún factor ambiental, físico o humano que pueda ocasionar daños o pérdidas en los equipos y la información; revise las instalaciones eléctricas, niveles de voltaje, protecciones, sistemas contra incendios, extintores, sustancias, equipos o procedimientos riesgosos cerca de estos.
            

          .tarjeta.color-tarjetacliente.p-4(titulo="Factores humanos")
          
            .row                     
              .col-xl-10
              p Evalúe el nivel de conocimiento y ejecución de la política de seguridad digital de la empresa, capacite a las personas en el correcto uso de los equipos y el manejo de la información.
              
          


















      


















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
