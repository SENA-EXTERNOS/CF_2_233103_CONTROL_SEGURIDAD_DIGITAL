<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
   
    .row.justify-content-around.align-items-center
      .col-lg-10.col-sm-16
        .bloque-texto-b.color-cajon.p-1
          .bloque-texto-b__texto
            p Bienvenido a este componente formativo en el que se define la ciberseguridad, se reconocen los aspectos de importancia y aplicación real en la industria, los procedimientos y políticas que las empresas deben manejar soportados en las normas internacionales sobre la gestión de la seguridad digital y por último un primer acercamiento a la identificación de amenazas, vulnerabilidades, acciones preventivas y correctivas en los sistemas de la compañía. En el entorno empresarial los volúmenes de información que entran, salen y circulan son grandes e importantes, en ellos está presente gran parte de la información sensible y decisiva, para garantizar el correcto funcionamiento y el cumplimiento de los objetivos organizacionales,  los  datos, están potencialmente expuestos a las amenazas existentes en las redes y sistemas digitales, solo el personal calificado y la correcta aplicación de los protocolos y normas pueden salvarlos y con ellos a las empresas.
         
        .row.justify-content-around.align-items-center.mt-2.mb-3
          .col-lg-6.col-sm-10
            figure
              img(src='@/assets/curso/temas/Introduccion/imagen1.png', alt='Texto que describa la imagen').imagen-decorativa-1
          .col-lg-6.col-sm-10
            p.mt-4 A través de vídeos, gráficos, imágenes y el contenido dispuesto en este recurso educativo, puede apropiarse de los conceptos necesarios para iniciarse en el mundo de la ciberseguridad. 

            p.mt-4 Para iniciar, ver el siguiente video en él se realiza una presentación general de la temática que se estudiará a lo largo del componente formativo. ¡Éxitos! En este proceso de aprendizaje.

      .col-lg-6.mt-3
      figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO
    
         



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
