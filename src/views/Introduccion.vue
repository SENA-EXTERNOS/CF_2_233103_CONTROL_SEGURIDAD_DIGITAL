<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
   
    .cajon-b.color-primario.p-3.arriba-izquierda
      p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se define la ciberseguridad, se reconocen los aspectos de importancia y aplicación real en la industria, los procedimientos y políticas que las empresas deben manejar, soportados en las normas internacionales sobre la gestión de la seguridad digital y, por último, un primer acercamiento a la identificación de amenazas, vulnerabilidades, acciones preventivas y correctivas en los sistemas de la compañía. 
        
    .px-3
      p En el entorno empresarial los volúmenes de información que entran, salen y circulan son grandes e importantes; en ellos está presente gran parte de la información sensible y decisiva para garantizar el correcto funcionamiento y el cumplimiento de los objetivos organizacionales.  Los datos están potencialmente expuestos a las amenazas existentes en las redes y sistemas digitales, solo el personal calificado y la correcta aplicación de los protocolos y normas pueden salvarlos y, por ende, a las empresas.

    .row.justify-content-around.align-items-center.mt-2.mb-3
      .col-lg-6.col-sm-10.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Introduccion/imagen1.png', alt='Texto que describa la imagen').imagen-decorativa-1
      .col-lg-6.col-sm-10
        p A través de vídeos, gráficos, imágenes y el contenido dispuesto en este recurso educativo, aprópiese de los conceptos necesarios para iniciarse en el mundo de la ciberseguridad.

        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3rqfPRqnKIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
