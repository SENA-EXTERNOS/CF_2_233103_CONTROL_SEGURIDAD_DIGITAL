<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa: ISO 27001.

    .row.justify-content-around.align-items-center.mb-5.mt-2
        .col-8
          .row
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/Tema3/tema3.svg', alt='Texto que describa la imagen'  ).imagen-decorativa-1
            .col-lg-9.mt-4
                p Continuando con el estudio de este recurso educativo, ahora pasamos a conocer detalles sobre la reglamentación de la norma ISO 27001.  
                p Para el desarrollo de esta sección, se tiene como referente la estructura de ISO 27001:2013 en la guía de implantación para la seguridad de la información proporcionada por el organismo de certificación mundial nqa.

    .row.mt-2.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/imag1.png')})`}"
          )
          .bloque-texto-g__texto3.p-4
            .col-11.col-lg-12
              p La ISO 27001:2013 es la norma internacional que proporciona un marco de trabajo para los sistemas de gestión de seguridad de la información (SGSI) con el fin de proporcionar confidencialidad, integridad y disponibilidad continuada de la información, así como el cumplimiento legal. La certificación ISO 27001 es esencial para proteger los activos más importantes en la organización, la información de los clientes y empleados, la imagen corporativa y otra información privada. La norma ISO incluye un enfoque basado en procesos para lanzar, implantar, operar y mantener un SGSI. 
              

        .row.justify-content-around.align-items-centerrd.mt-5
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


    p.mt-2 La norma ISO 27001 hace parte de la familia de normas ISO27000, algunas normas relevantes al tema en estudio son:

  
    SlyderF(columnas="col-lg-5 col-xl-4")
      .tarjeta
        .row.justify-content-center.mb-3
          .col-13
            img(src='@/assets/curso/temas/Tema3/1.png' )               
              
      .tarjeta
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/Tema3/2.png' alt='AvatarTop')
       
        
      
      .tarjeta
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/Tema3/3.png' alt='AvatarTop')
        
      
        
      .tarjeta
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/Tema3/4.png' alt='AvatarTop')
        
       

      .tarjeta
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/Tema3/5.png' alt='AvatarTop')
        
       
      .tarjeta
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/Tema3/6.png' alt='AvatarTop')
        
        

      .tarjeta
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/Tema3/7.png' alt='AvatarTop')
        
        

    separador
    #t_3_2

    .titulo-segundo.color-acento-contenido
      h2 3.2.	Principios.


    .row.justify-content-around.align-items-center
      .col-7
        .row
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/Tema3/imag4.svg', alt='Texto que describa la imagen' white='72' height='68'  )
          .col-lg-10
              p El desarrollo de la norma se basa en los siguientes principios esenciales, sobre los cuales se alcanza el objetivo de proteger los activos de la información:
              


    

    .row.mb-5.justify-content-center.mt-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/flip1.png')})`}")
              .tarjeta-flip__contenido.p-3.p-xl-5
                
                p Proteger los activos de la empresa, lo que incluye personas, información, capital y equipos.

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
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

    .row.mb-5.justify-content-center         
        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/flip4.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                
                p Establecer los procedimientos y el manejo de contingencias y emergencias asociadas a la seguridad digital.


        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
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
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img1.svg', alt='Texto que describa la imagen' width='69px' height='70')             
        
            .col-lg-9
             p La norma ha sido diseñada para ser aplicable en todas las empresas, independientemente del sector al que pertenezca y tamaño de la misma.    
    
         
      
      div(titulo="Cláusula 2 - base normativa")
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img2.svg' width='69px' height='70') 

            .col-lg-9
             p La certificación incluye la aplicación de los parámetros de la familia de normas ISO 27000.    
   
      div(titulo="Cláusula 3- definición de conceptos clave ")
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img3.svg' width='69px' height='70') 

            .col-lg-9
             p Se debe incluir la definición de palabras y elementos claves contenidos en la norma ISO 27000.    
   
      div(titulo="Cláusula 4 -contexto de la organización" width='69px' height='70')
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img4.svg' width='69px' height='70') 

            .col-lg-9
             p Incluye el análisis del entorno organizacional, proceso y estudio de las vulnerabilidades, además de las necesidades de cada uno.    
   
      div(titulo="Cláusula 5 -liderazgo y definición de roles" )
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img5.svg' width='69px' height='70') 

            .col-lg-9
             p Se establece la distribución de responsabilidades respecto al sistema de seguridad digital de la organización.    
   

      div(titulo="Cláusula 6 - planificación e identificación de riesgos")
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img6.svg' width='69px' height='70') 

            .col-lg-9
             p Se plantea la proyección de riesgos, esta cláusula se ampliará en una próxima sección 3.5.   
   

      div(titulo="Cláusula 7 - soporte")
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img7.svg' width='69px' height='70') 

            .col-lg-9
             p Se definen los recursos técnicos, humanos y económicos destinados a la implementación y ejecución del sistema de seguridad digital.     
   

      div(titulo="Cláusula 8 -operación")
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-3
              figure
              img(src='@/assets/curso/temas/Tema3/img8.svg' width='69px' height='70') 

            .col-lg-9
             p En esta fase se definen los parámetros y políticas para la ejecución del sistema de seguridad digital.    
   

      div(titulo="Cláusula 9 -Evaluación")
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-2
              figure
              img(src='@/assets/curso/temas/Tema3/img9.svg' width='69px' height='70') 

            .col-lg-9
             p Se realiza la valoración de los resultados del sistema, esta cláusula de ampliará en la próxima sección 3.


      div(titulo="Cláusula 10 -mejora")
        .row.justify-content-around.align-items-center
        .col-9
          .row
            .col-lg-2
              figure
              img(src='@/assets/curso/temas/Tema3/img10.svg' width='69px' height='70') 

            .col-lg-10
             p Planteamiento de acciones correctivas y de mejoramiento basados en la evaluación de resultados de la ejecución del sistema de seguridad digital.
   
                        
     separador
    
    #t_3_4

    .titulo-segundo.color-acento-contenido
      h2 3.4.	Técnicas y procedimientos de la norma.  

    .row
      .col-lg-11.col-sm-10
      .bloque-texto-b.color-cajon.mb-2
        .bloque-texto-b__texto.cajdelgada
          p Para la implementación de la norma hay dos aspectos importantes a tratar: la metodología de planeación, ejecución y evaluación, además de las auditorías al sistema. En el siguiente gráfico se describe el método PHVA, una de las metodologías más usadas.
    
    .row.justify-content-center.mb-3.mt-4
      .col-lg-4.col-sm-10   
        figure
          img(src='@/assets/curso/temas/Tema3/imgcolores.svg').mt-5         
      
    .row.justify-content-center
      .col-lg-8  
        b Auditorías
            p.mt-2 Es el método por el cual se verifica el correcto desarrollo de un proceso, se evalúa la adecuada ejecución de la metodología, instrumentos y políticas establecidas por la norma de referencia y se identifican las falencias o puntos por mejorar.


        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azulacordion").mt-5
          .row(titulo="Auditoría interna")
            .row.justify-content-around.align-items-center              
              .col-lg-2
                figure
                img(src='@/assets/curso/temas/Tema3/aco1.svg' width='133px' height='129px')             
            
              .col-lg-6
                p La norma ha sido diseñada para ser aplicable en todas las empresas, independientemente del sector al que pertenezca y tamaño de la misma.    
        
            
          
          div(titulo="Auditoría externa")
            .row.justify-content-around.align-items-center
              
              .col-lg-2
                figure
                img(src='@/assets/curso/temas/Tema3/aco2.svg' width='115px' height='126px') 
            
              .col-lg-6
                p Se contrata o solicita la revisión de uno o varios auditores externos e independientes a la empresa, para dar su concepto técnico y hallar fallos.   
            

          div(titulo="Auditoría de certificación")
            .row.justify-content-around.align-items-center
              
              .col-lg-2
                figure
                img(src='@/assets/curso/temas/Tema3/aco3.svg' width='129px' height='126px') 

              .col-lg-6
                p La realiza un organismo acreditado para certificar la implementación de la norma donde se evaluará el cumplimiento de esta, en dicha auditoría todo debe estar funcionando según los parámetros, ya que no hay oportunidades de corrección.   

    separador
    
    #t_3_5

    .titulo-segundo.color-acento-contenido
      h2 3.5.	Gestión de riesgos  

    P.mt-2 A continuación, se amplía la explicación de la ya mencionada cláusula planeación y evaluación de riesgos: 


    .row
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
            img(src="@/assets/curso/temas/Tema3/3.5.1.png"  )
          .crd_hover_txt--body
            
            p.mb-0 Para el SGSI (Sistema de Gestión de Seguridad de la Información) es vital en su etapa de planeación identificar los riesgos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/Tema3/3.5.2.png")
          .crd_hover_txt--body
            
            p.mb-0 Siempre existirán riesgos, lo que se puede controlar es la probabilidad de que ocurra un incidente.

     
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/Tema3/3.5.3.png"  )
          .crd_hover_txt--body
            
            p.mb-0 Es posible que existan riesgos que para el contexto y recursos de la organización no se puedan solucionar aún.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/Tema3/3.5.4.png")
          .crd_hover_txt--body
            p.mb-0 Se deben caracterizar o clasificar los riesgos según el tipo de activo que pueden afectar e identificar las posibles soluciones o métodos para reducir su probabilidad o impacto.



    separador
    
    #t_3_

    .titulo-segundo.color-acento-contenido
      h2 3.6.	Evaluación y administración

    P La evaluación del sistema es el único método para validar que tan efectivo es. 
 

    .row.justify-content-center
      .col-lg-8  
        PasosA.color-secundario.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              p.text-small Se evalúan los resultados obtenidos en material de seguridad, incidentes ocurridos e incidentes evitados.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/Tema3/tiempo1.png', alt='Texto que describa la imagen')
                

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/Tema3/tiempo2.png', alt='Texto que describa la imagen')
                
            .col-md-6             
              p.text-small Se valora el impacto del sistema en cuestión de costos en recursos económicos, humanos, tiempo y procesos.
              

          .row
            .col-md-6.mb-4.mb-md-0
              p.text-small Se establecen las metas, puntos a corregir o agregar al SGSI.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/Tema3/tiempo3.png', alt='Texto que describa la imagen')
                

          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/Tema3/tiempo4.png', alt='Texto que describa la imagen')

            .col-md-6.mb-4.mb-md-0.lineat             
              p.text-small El sistema se administra en base al manual de procedimientos establecido por la empresa.
          
            
                




     

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
