<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de Ciberseguridad

    .row.mt-2.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/candado.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Para avanzar con el desarrollo del tema, es necesario tener claro el concepto de <b>ciberseguridad</b>. En este punto, haga una primera aproximación, prestando atención a los siguientes aspectos:
    

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido.mt-2
      h2 2.1 Definición de conceptos esenciales

    p.mt-2 Diversos autores definen la ciberseguridad de la siguiente forma:

    .row.justify-content-around.align-items-center.mb-5
      SlyderA(tipo="b").bg5
        .row.mt-.justify-content-center
          .col-md-5.mb-4.mb-md-0.mt-5
            b Arroyo Guardeño, D. Gayoso Martínez, V. & Hernández Encinas, L. (2020) definen la ciberseguridad así:                              
            p.mt-3.text-small “conjunto de técnicas, procedimientos y protocolos encaminados a la protección de la información, vinculada a los usuarios de las cibertecnologías. Esta protección demanda la custodia no solo de la información en sí, sino también de todos los elementos precisos para su correcta gestión. Es decir, la ciberseguridad tiene como objetivo proteger todo tipo de activo o recurso de valor para una persona, empresa u organización.
            p.text-small También, asocian los tres elementos que se observan en el gráfico:
       
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider1.png', alt='Texto que describa la imagen')
              
        .row.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            b.mt-2 Giant, N. (2016), indica que:                      
            p.mt-4.text-small La ciberseguridad se refiere al uso seguro y responsable de los productos de la tecnología de la información y la comunicación (TIC), incluyendo Internet, los dispositivos móviles y de comunicación y los instrumentos tecnológicos diseñados para guardar, compartir o recibir información, por ejemplo, los teléfonos móviles, las cámaras digitales, etc.
            p.text-small Esta definición puede ampliar el concepto de ciberseguridad más allá de los antivirus y los equipos de seguridad de la red; hace énfasis en el usuario, la manera en que actúa y se responsabiliza sobre su propia seguridad y la de su empresa.
       
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider2.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            b  Otra valiosa definición es la que brinda Giant, N. (2016), quien indica que:                                
            p.mt-4.text-small La ciberseguridad agrupa recursos de 
              b #[i hardware y software ]  
              | junto con políticas, normas y comportamientos seguros, los cuales tienen aplicabilidad para el uso personal, corporativo e industrial; siempre y cuando el personal cuente con formación sobre los cuidados que debe tener para proteger la información. 
       
          .col-md-6.mt-5 
            figure
              img(src='@/assets/curso/temas/Tema2/imagslider3.png', alt='Texto que describa la imagen')


    separador

    #t_2_2.titulo-segundo.color-acento-contenido.mt-2
      h2 2.2  Contextualización y estado del arte

    p Para continuar, es importante conocer el estado actual de la ciberseguridad en las empresas, el país y el mundo.

    SlyderF.mb-5.mt-5(columnas="col-lg-5 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel1.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h4.text-center.mt-5 Crecimiento exponencial
          p.text-center.text-small Citando nuevamente a Arroyo Guardeño, D. Gayoso Martínez, V. & Hernández Encinas, L. (2020), “en España, por ejemplo, en solo un año, entre 2018 y 2019, los ciberdelitos denunciados representaron un 10% del total de denuncias por algún tipo de delito, y en este mismo periodo se tuvo un aumento del 35% de los casos reportados”.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel2.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h4.text-center.mt-5 En Colombia
          p.text-center.text-small Según cifras del Centro Cibernético Policial MinTIC (2021), durante el año 2021 los delitos cibernéticos ascendieron a 33.465, lo que significa un aumento de 17% en comparación con 2020, cuando fueron 28.524 casos. Además, se recibieron 1.558 denuncias y se efectuaron 49 capturas.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel3.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h4.text-center.mt-5 El precio de los fallos en ciberseguridad
          p.text-center.text-small La revista portafolio (2022), indica que, en el mundo, durante el último año, los ciberdelitos crecieron en un 150% y, aproximadamente, el 32% de las empresas fueron atacadas. Estas se vieron en la obligación de pagar rescates a piratas informáticos para recuperar su información. Entre esas empresas se encuentran corporaciones, bancos e, inclusive, gobiernos, por lo cual tales pagos representan cantidades de dinero considerables.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/Tema2/carrusel4.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h4.text-center.mt-5 Políticas públicas:
          p.text-center.text-small Según MinTIC (2021), el propósito de la política de seguridad digital es que las personas y las empresas conozcan e identifiquen los riesgos a los que están expuestos en el entorno digital y aprendan cómo protegerse, prevenir y reaccionar ante los delitos y ataques cibernéticos.
          p.text-center.text-small Esta labor a nivel institucional requiere un arduo trabajo e inversión conjuntas entre el estado y la empresa privada, labor que tiene un alto componente educativo que exige adoptar una cultura de seguridad digital en el país.
   
    separador

    #t_2_3.titulo-segundo.color-acento-contenido.mt-5
      h2 2.3  Objetivos de la ciberseguridad

    .row.justify-content-around.align-items-center.mb-5.mt-5
      .col-9
          .row
            .col-lg-1
              figure
                img(src='@/assets/curso/temas/Tema2/imag3.svg' width='85' height='85' )
      
            .col-lg-11
              p A pesar de los riesgos y las cifras alarmantes, la ciberseguridad ha sido considerada como prioridad para las organizaciones, los gobiernos y las personas, estableciendo propósitos u objetivos de las políticas de esta:


    .row.justify-content-center.mt-5.mb-5
      .col-lg-8.sm-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2
          br
          em Objetivos de la ciberseguridad
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema2/aj1.svg', alt='Texto que describa la imagen')
              
          .tarjeta.color-acento-botones.p-3(x="12%" y="5%" numero="1")
            h5.text-white Sensibilización y educación.         
            p.text-white La cultura digital de las personas tiene alto impacto en el desempeño de un sistema de seguridad digital, por eso es fundamental que la ciberseguridad se enseñe desde temprana edad en los colegios y sea tema de constante capacitación para profesionales y empresas.

          .tarjeta.color-acento-botones.p-3(x="12%" y="41%" numero="2")
            h5.text-white Empleo.           
            p.text-white La ciberseguridad es un área del conocimiento que actualmente tiene una demanda alta de profesionales y provee mejores salarios, con respecto a otros cargos del entorno de las TIC.
          
          .tarjeta.color-acento-botones.p-3(x="12%" y="71%" numero="3")
            h5.text-white Desarrollo tecnológico.
            p.text-white La ciberseguridad requiere que se invierta en investigación y desarrollo de tecnologías capaces de actuar y proteger de las amenazas modernas, que evolucionan también a un ritmo acelerado.

          .tarjeta.color-acento-botones.p-3(x="77%" y="40%" numero="4")
            h5.text-white Protección.
            p.text-white La protección es el objetivo más evidente de las políticas de seguridad digital. Los más protegidos son los activos de información de las empresas, ya que ellos son la fuente principal del movimiento operativo y económico de las organizaciones.
          
          .tarjeta.color-acento-botones.p-3(x="77%" y="71%" numero="5")         
            h5.text-white Economía.
            p.text-white En la medida en que el sistema de la organización esté blindado de ataques, podrá garantizar una mayor seguridad a los usuarios, asegurando menos riesgos y reprocesos, lo que se verá reflejado en mayor eficiencia y menor probabilidad de tener que pagar rescates a delincuentes informáticos.
      
    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4	Ciberseguridad: metodología, estrategias y técnicas de diagnóstico
       
    .row.justify-content-center.mt-2.mb-5
      .tarjeta.color-primario--borde
      
        figure
            img(src='@/assets/curso/temas/Tema2/img7.png', alt='Texto que describa la imagen')

        
        .row.justify-content-center
          .col-lg-11.mt-5
            p.text-small En la ciberseguridad es necesario plantear estrategias que se desarrollen a través de métodos y metodologías que marquen la ruta por seguir, cómo garantía de seguridad digital de la información en la organización. En el siguiente vídeo se detallan las metodologías y estrategias.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Dc7PGh5Aiss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    h3.titulo-tercero(data-aos='fade-right') Técnicas de diagnóstico

    .row.justify-content-around.align-items-center.mb-5.textoeditado
      .col-lg-5.mb-6
        p El proceso de ciberseguridad requiere la aplicación de acciones y procedimientos de identificación del estado del sistema de información digital y de los equipos.
        p La 
          b vulnerabilidad 
          | es un punto débil del sistema desde el cual un tercero o una persona malintencionada puede acceder a la información. Una manera útil de diagnosticar la seguridad de este, consiste en ubicarse en el lugar de quien quiere perjudicar el sistema e intentar acceder y afectar algún elemento.
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/Tema2/elemento3.png').imagen-decorativa-1


    .row.justify-content-around.align-items-center.mb-5
      .col-lg-2.col-sm-4
        figure
          img(src='@/assets/curso/temas/Tema2/imag5.svg', alt='Texto que describa la imagen' width='84px' height='84,92px' )
      .col-lg-9.col-sm-10
        p Se sugiere considerar las siguientes preguntas y sugerencias, si en alguna la respuesta es positiva o existe una alternativa, se identifica una vulnerabilidad en el sistema. 


    .row.mb-5
      TabsA.color-secundario.mb-5        
        .tarjeta.color-tarjetacliente.p-4(titulo="A nivel físico")      
          p ¿Qué tan probable será que un tercero acceda físicamente a algún equipo o terminal, viole el acceso y pueda extraer, modificar o eliminar información importante? 
          p.mt-2 Verifique los permisos de acceso a carpetas, archivos y cuentas de usuario, por ejemplo, ¿qué tan seguras son las contraseñas?
              
        .tarjeta.color-tarjetacliente.p-4(titulo="A nivel de conectividad")
          p ¿Qué probabilidad tiene y de qué forma podría un tercero acceder de manera inalámbrica o mediante cable a alguna de las redes o equipos de la compañía y, estando allí, qué información podría estar a su alcance? 
          p.mt-2 Verifique la seguridad de las contraseñas y el listado de equipos conectados a los medios inalámbricos, identifique qué puertos podrían estar potencialmente disponibles para la conexión de un tercero en los equipos de red y el control de acceso al cuarto de telecomunicaciones.

        .tarjeta.color-tarjetacliente.p-4(titulo="<em>Software</em>")
          p ¿El 
            em software 
            | que tiene la compañía, cuenta con las licencias correspondientes o se usa de manera ‘pirata’? ¿los equipos de la empresa tienen instalados solo los programas permitidos y en sus versiones autorizadas? o ¿existe algún equipo con 
            em software 
            | de terceros instalado sin autorización?
          p Compruebe el listado de programas instalados y la lista de procesos en ejecución de cada equipo.

        .tarjeta.color-tarjetacliente.p-4(titulo="Físico/locativo")          
          p Los activos ¿están expuestos a algún factor ambiental, físico o humano que pueda ocasionar daños o pérdidas en los equipos y la información?
          p Revise las instalaciones eléctricas, niveles de voltaje, protecciones, sistemas contra incendios, extintores, sustancias, equipos o procedimientos riesgosos cerca de estos.

        .tarjeta.color-tarjetacliente.p-4(titulo="Factores humanos")          
          p ¿Cuánto conocen las personas que manejan información en la empresa? ¿Qué nivel de formación y cualificación tiene el personal para favorecer la seguridad de la información? 
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
