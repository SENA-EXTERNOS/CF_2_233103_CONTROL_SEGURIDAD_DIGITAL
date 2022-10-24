<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manual de ciberseguridad corporativa

    .col-lg-12.col-sm-5
      figure
      img(src='@/assets/curso/temas/Tema4/imag1.svg').mt-5

    .row.justify-content-around.align-items-center
      .col-lg-.col-sm-10.mt-5
        .bloque-texto-b.color-cajon
          .bloque-texto-b__texto
            p Un manual de procedimientos, es un documento escrito donde se reglamenta y se especifica la manera aprobada por la empresa para realizar determinada labor, cómo deben realizarse los procedimientos y la información de manera organizada y continua dentro de la empresa, todo empleado deberá aplicarlos en su labor diaria para evitar sanciones, y evitar alterar la calidad, seguridad y funcionamiento del sistema completo de la compañía.
    
    
        row.justify-content-around.align-items-centerrd.mt-5
            .col-12
              .tarjeta.color-secundario.p-3.mt-4
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/temas/Tema4/img2.svg")
                  .col-9
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Manual de procedimientos departamento de sistemas dif estatal chihuahua 
                        p.text-small Se recomienda revisar el Anexo 2 Manual de procedimientos departamento de sistemas dif estatal chihuahua, para reconocer el contenido y metodología de un manual de procedimientos.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download

      separador
    #t_4_1

    .titulo-segundo.color-acento-contenido
      h2 4.1	Objetivos y alcance

    p Se deben plantear los objetivos específicos teniendo como referente el alcance del manual, este debe ser documentando de la siguiente forma: 
      
    .row.mt-4
    .tarjeta--container.row
      
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema4/img3.svg', alt='Texto que describa la imagen')
          .col-8.mt-4.parrafo_tarjeta_azul_t4
            h2.text-center Alcance
            p Todo cargo o actividad de la empresa debe tener establecidas unas responsabilidades y procedimientos estandarizados, desde los niveles más bajos con el personal auxiliar y operativo, pasando por el personal técnico, ingeniería, personal administrativo y llegando hasta los altos cargos directivos, deben tener un manual de procedimientos, algunos de carácter general, mientras otros son específicos para cada labor.
      

      .col-md.tarjeta.color-acento-contenido.text-black.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema4/img4.svg', alt='Texto que describa la imagen')
        
        .row.justify-content-center.mb-4  
          .col-9
            h2.text-center Objetivos 
            p <i class="fas fa-check" STYLE="Color: black"></i> Delimitar labores y referentes a un cargo específico.
            p <i class="fas fa-check" STYLE="Color: black"></i> Imponer los pasos para realizar una actividad.
            p <i class="fas fa-check" STYLE="Color: black"></i> Establecer con detalle las funciones, actividades y temas que pueden generar controversias o discusiones.
            p <i class="fas fa-check" STYLE="Color: black"></i> Garantizar la seguridad, buenas prácticas y uso adecuado de los activos de la empresa.

      separador
    #t_4_2

    .titulo-segundo.color-acento-contenido
      h2 4.2	Estructura organizacional 

    p La estructura organizacional que también se contempla en el manual tiene los siguientes elementos:

    .row.justify-content-around.align-items-center
      .col-lg-11.col-sm-10.mt-5
      .bg--img_03
        .row.justify-content-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/Tema4/acordion.png", alt="alt").imagen-decorativa-1
          .col-lg-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azulacordion").mt-5
            
              .row(titulo="Organigrama de la empresa")
                row
                .col-lg-2
                  figure
                  img(src='@/assets/curso/temas/Tema4/img5.svg' width='105px' height='104px')    
                .col-lg-9
                  p Toda empresa está compuesta por un grupo de colaboradores con un cargo y responsabilidades predefinidas, conocer cómo es la organización de esta facilita la canalización de la información para que llegue a quienes son competentes en el tema, y para evitar que se comparta o se generen confusiones al llegar a quienes no resulta relevante dicha información.
               
              .row(titulo="Conducto regular y canales de comunicación")
                row
                .col-lg-2
                  figure
                  img(src='@/assets/curso/temas/Tema4/img6.svg' width='105px' height='104px')    
                .col-lg-9
                  p La empresa establece los canales para la comunicación formal y las líneas de supervisión o mando para transmitir la información.
               
              
              .row(titulo="Roles y cadena de mando")
                row
                .col-lg-2
                  figure
                  img(src='@/assets/curso/temas/Tema4/img7.svg' width='105px' height='104px')    
                .col-lg-9
                  p Cada empleado tendrá sus funciones y límites establecidos, además de un jefe inmediato para canalizar toda información o requerimiento.
               
      separador
    
    #t_4_3

    .titulo-segundo.color-acento-contenido
      h2 4.3	Lineamientos y políticas corporativas

    .row.justify-content-around.align-items-center.mb-5.mt-5
        .col-9
          .row
            .col-lg-1
              figure
                img(src='@/assets/curso/temas/Tema4/img8.svg' width='83' height='91')
            .col-lg-9
              p La empresa necesita definir los lineamientos y políticas sobre las cuales trabajará en el campo de la seguridad digital, algunas políticas establecidas son:

    
    .tarjeta.tarjeta--white
      //- PasosB debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      PasosB.color-secundario       
        div(titulo="")
          
          figure
            img(src='@/assets/curso/temas/Tema4/linea1.png', alt='Texto que describa la imagen')
            
        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea2.png', alt='Texto que describa la imagen')
            

        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea3.png', alt='Texto que describa la imagen')
            
        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea4.png', alt='Texto que describa la imagen')

        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea5.png', alt='Texto que describa la imagen')
          
        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea6.png', alt='Texto que describa la imagen')

        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea7.png', alt='Texto que describa la imagen')
            
        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea8.png', alt='Texto que describa la imagen')            
            
        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea9.png', alt='Texto que describa la imagen')
          
        div(titulo="")
          figure
            img(src='@/assets/curso/temas/Tema4/linea10.png', alt='Texto que describa la imagen')


    .row.justify-content-around.align-items-center.mb-5.mt-2
      .col-9
        .cajon.color-acento-botones.color.p-4.mb-4     
          .row
            .col-lg-1
              figure
                img(src='@/assets/curso/temas/Tema4/img1.svg' width='52' height='52' )  
            .col-lg-11
              p Por favor, explore los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.


        

        

      

        
            
            

            
            
            

      
        
    
    

    

   
    


    
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
