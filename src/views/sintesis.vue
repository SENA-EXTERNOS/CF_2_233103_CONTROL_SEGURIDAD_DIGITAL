<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
        .col-lg-8.sm-8
          .titulo-sexto.color-acento-contenido
            b Control de la seguridad digital
            p.mt-2 Síntesis: Fundamentos y normativa para la ciberseguridad.
            
   

        .col-lg-2
          figure
          img(src="@/assets/curso/temas/g4.svg" width='89,61' height='86,7')
        
    .row.justify-content-center
        .col-lg-10.sm-8.mt-5       
            p El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo.

        

    .row.justify-content-center
      .col-lg-7.mb-5.mt-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      
      
      
    .row.justify-content-center
        .col-lg-3.sm-8.mt-5  
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
