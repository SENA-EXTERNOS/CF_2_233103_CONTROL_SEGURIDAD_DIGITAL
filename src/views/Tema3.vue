<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa: ISO 27001.



    .row.justify-content-around.align-items-center
      .col-lg-2.col-sm-4
        figure
          img(src='@/assets/curso/temas/Tema3/tema3.svg', alt='Texto que describa la imagen'  ).imagen-decorativa-1
      .col-lg-8.col-sm-10
          p Continuando con el estudio de este recurso educativo, ahora pasamos a conocer detalles sobre la reglamentación de la norma ISO 27001.  
          p Para el desarrollo de esta sección, se tiene como referente la estructura de ISO 27001:2013 en la guía de implantación para la seguridad de la información proporcionada por el organismo de certificación mundial nqa.



    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/imag1.png')})`}"
          )
          .bloque-texto-g__texto3.p-4
            .col-10.col-lg-12
              p La ISO 27001:2013 es la norma internacional que proporciona un marco de trabajo para los sistemas de gestión de seguridad de la información (SGSI) con el fin de proporcionar confidencialidad, integridad y disponibilidad continuada de la información, así como el cumplimiento legal. La certificación ISO 27001 es esencial para proteger los activos más importantes en la organización, la información de los clientes y empleados, la imagen corporativa y otra información privada. La norma ISO incluye un enfoque basado en procesos para lanzar, implantar, operar y mantener un SGSI. 
              

        row.justify-content-around.align-items-centerrd.mt-5
          .col-12
            .tarjeta.color-secundario.p-3.mt-4
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/Tema3/imag2.svg")
                .col-9
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Guía de implantación nqa
                      p.text-small Para ampliar la información anterior sobre la implantación de la ISO 27001, ver el documento.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download



    separador
    #t_3_1

    .titulo-segundo.color-acento-contenido
      h2 3.1.	Conceptos generales.


    p.mt-1 La norma ISO 27001 hace parte de la familia de normas ISO27000, algunas normas relevantes al tema en estudio son:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenidotarjeta2.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema3/1.png' alt='AvatarTop')
        
        
        p.text-center ISO 27000 Tecnologías de la información – Resumen y vocabulario
      
      .tarjeta.color-acento-contenidotarjeta.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema3/carrusel2.svg' alt='AvatarTop')
        h2.text-center En Colombia
        p.text-center Según cifras del Centro Cibernético Policial MinTIC (2021), durante el año 2021 los delitos cibernéticos en Colombia ascendieron a 33.465, lo que significa un aumento de 17 % en comparación con 2020, cuando fueron 28.524 casos. Además, se recibieron 1.558 denuncias y se efectuaron 49 capturas”, revelaron las autoridades.

      
      .tarjeta.color-acento-contenidotarjeta.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema3/carrusel3.svg' alt='AvatarTop')
        
        h2.text-center El precio de los fallos en ciberseguridad
        p.text-center La revista portafolio (2022) [6] indica que, en el mundo durante el último año, los ciberdelitos crecieron en un 150% y aproximadamente el 32% de las empresas fueron atacadas, estas se vieron en la obligación de pagar rescates a piratas informáticos para recuperar su información. Entre esas empresas se encuentran corporaciones, bancos, e inclusive gobiernos, así que dichos pagos representan cantidades de dinero considerables. Ámbito (2022)[7] indica que los ciberataques en el 2021 han costado más de 5,7 billones de euros.
      
      .tarjeta.color-acento-contenidotarjeta.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema2/carrusel4.svg' alt='AvatarTop')
        h2.text-center Políticas públicas: según MinTIC (2021), el propósito de la política de seguridad digital
        p.text-center El objetivo general de esta política es que los colombianos y las empresas conozcan e identifiquen los riesgos a los que están expuestos en el entorno digital y aprendan como protegerse, prevenir y reaccionar ante los delitos y ataques cibernéticos.
        p.text-center Esta labor a nivel institucional requiere un arduo trabajo e inversión conjuntas entre el estado y la empresa privada, labor que tiene un alto componente educativo, el cual exige adoptar una cultura de seguridad digital en el país. 



    separador
    #t_3_2

    .titulo-segundo.color-acento-contenido
      h2 3.2.	Principios.


    .row.justify-content-around.align-items-center
      .col-lg-1.col-sm-5
        figure
          img(src='@/assets/curso/temas/Tema3/imag4.svg', alt='Texto que describa la imagen'  )
      .col-lg-7.col-sm-10
          p El desarrollo de la norma se basa en los siguientes principios esenciales, sobre los cuales se alcanza el objetivo de proteger los activos de la información:
          


    h3.mt-5 Tarjetas flip

    .row.mb-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/flip1.png')})`}")
              .tarjeta-flip__contenido.p-3.p-xl-5
                
                p Proteger los activos de la empresa, lo que incluye personas, información, capital y equipos.

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/flip2.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                
                p Identificar y corregir las vulnerabilidades a la seguridad de los activos.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/flip3.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                
                p Diseñar e Implementar los manuales de procedimientos para la gestión de los activos de manera segura

        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/flip4.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                
                p Establecer los procedimientos y el manejo de contingencias y emergencias asociadas a la seguridad digital.


        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/flip5.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                
                p Proteger la confidencialidad, integridad y disponibilidad de la información.

        

    separador
    
    #t_3_3

    .titulo-segundo.color-acento-contenido
      h2 3.3.	Políticas

    p.mt-2 La norma se ejecuta mediante 10 etapas o cláusulas, a continuación, se realiza una breve descripción de cada una:

    
     AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azulacordion").mt-5
      .row(titulo="Cláusula 1 - Alcance")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img1.svg', alt='Texto que describa la imagen')             
        
            .col-lg-9
             p La norma ha sido diseñada para ser aplicable en todas las empresas, independientemente del sector al que pertenezca y tamaño de la misma.    
    
         
      
      div(titulo="Cláusula 2 - base normativa")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img2.svg') 

            .col-lg-9
             p La certificación incluye la aplicación de los parámetros de la familia de normas ISO 27000.    
   
      div(titulo="Cláusula 3- definición de conceptos clave ")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img3.svg') 

            .col-lg-9
             p Se debe incluir la definición de palabras y elementos claves contenidos en la norma ISO 27000.    
   
      div(titulo="Cláusula 4 -contexto de la organización")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img4.svg') 

            .col-lg-9
             p Incluye el análisis del entorno organizacional, proceso y estudio de las vulnerabilidades, además de las necesidades de cada uno.    
   
      div(titulo="Cláusula 5 -liderazgo y definición de roles")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img5.svg') 

            .col-lg-9
             p Se establece la distribución de responsabilidades respecto al sistema de seguridad digital de la organización.    
   

      div(titulo="Cláusula 6 - planificación e identificación de riesgos")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img6.svg') 

            .col-lg-9
             p Se plantea la proyección de riesgos, esta cláusula se ampliará en una próxima sección 3.5.   
   

      div(titulo="Cláusula 7 - soporte")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img7.svg') 

            .col-lg-9
             p Se definen los recursos técnicos, humanos y económicos destinados a la implementación y ejecución del sistema de seguridad digital.     
   

      div(titulo="Cláusula 8 -operación")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img8.svg') 

            .col-lg-9
             p En esta fase se definen los parámetros y políticas para la ejecución del sistema de seguridad digital.    
   

      div(titulo="Cláusula 9 -Evaluación")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img9.svg') 

            .col-lg-9
             p Se realiza la valoración de los resultados del sistema, esta cláusula de ampliará en la próxima sección 3.


      div(titulo="Cláusula 10 -mejora")
        .row
            .col-lg-1
              figure
              img(src='@/assets/curso/temas/Tema3/img10.svg') 

            .col-lg-9
             p Planteamiento de acciones correctivas y de mejoramiento basados en la evaluación de resultados de la ejecución del sistema de seguridad digital.
   
                        
     separador
    
    #t_3_4

    .titulo-segundo.color-acento-contenido
      h2 3.4.	Técnicas y procedimientos de la norma.  

    .row
      .col-lg-11.col-sm-10
      .bloque-texto-b.color-cajon.mb-2
        .bloque-texto-b__texto
          p Para la implementación de la norma hay dos aspectos importantes a tratar: la metodología de planeación, ejecución y evaluación, además de las auditorías al sistema. En el siguiente gráfico se describe el método PHVA, una de las metodologías más usadas.
    
    .row.justify-content-center.mb-3.mt-4
      .col-lg-4.col-sm-10   
        figure
          img(src='@/assets/curso/temas/Tema3/imgcolores.svg').mt-5

      
      
      
          b Auditorías
          p.mt-2 Es el método por el cual se verifica el correcto desarrollo de un proceso, se evalúa la adecuada ejecución de la metodología, instrumentos y políticas establecidas por la norma de referencia y se identifican las falencias o puntos por mejorar.

      
      
          
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azulacordion").mt-5
            .row(titulo="Cláusula 1 - Alcance")
              .row
                  .col-lg-3
                    figure
                    img(src='@/assets/curso/temas/Tema3/img1.svg', alt='Texto que describa la imagen')             
              
                  .col-lg-2
                  p La norma ha sido diseñada para ser aplicable en todas las empresas, independientemente del sector al que pertenezca y tamaño de la misma.    
          
              
            
            div(titulo="Cláusula 2 - base normativa")
              .row
                  .col-lg-1
                    figure
                    img(src='@/assets/curso/temas/Tema3/img2.svg') 

                  .col-lg-9
                  p La certificación incluye la aplicación de los parámetros de la familia de normas ISO 27000.    


</template>

<script>
export default {
  name: 'Tema3',
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
