<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Activos de información

    
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.col-sm-16
        .bloque-texto-b.color-cajon.boxtema1.p-1
          .bloque-texto-b__texto
            p Para iniciar con el contenido, es necesario conocer algunas definiciones oficiales básicas y, así, comprender más y mejor la temática que se abordará. La guía 
              b “Metodología para la Identificación, Clasificación y Valoración de Activos de Información” 
              | de la Súper Intendencia de Comercio, define un activo como “cualquier cosa que tiene valor para una organización”. El activo de información es definido como el “elemento de información que se recibe o produce en el ejercicio de sus funciones. Incluye la información que se encuentre en forma impresa, escrita, en papel, transmitida por cualquier medio electrónico o almacenado en equipos de cómputo, incluyendo 
              em software, hardware
              | , recurso humano, datos contenidos en registros, archivos, bases de datos, videos e imágenes”. SIC (2018).

      .col-lg-2
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/Tema1/imag1.svg' width='90' height='95')

    .row.justify-content-center.mt-3
      .col-lg-11.sm-8
        .bloque-texto.cajon.box2tem1.p-4.mb-4
          .row
            .col-lg-2.mt-1
              figure
                img(src='@/assets/curso/temas/Tema1/imag2.svg' alt='Texto que describa la imagen' width='52px' height='52px')  
            .col-lg-10
             p.mb-0 En relación con la seguridad de la información, la explica como cualquier información o elemento relacionado con el tratamiento de ésta que, tenga valor para la entidad, por ejemplo: archivos, bases de datos, expedientes, entre otros.


      p Analice en detalle la definición que se propone en el siguiente esquema:

    .row.justify-content-center.mt-3.mb-5
      .col-lg-7.sm-8
        .titulo-sexto.color-primario
          b  Figura 1
          br
          em Concepto de activos de conocimiento.
        figure
          img(src='@/assets/curso/temas/Tema1/aj2.svg' alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center.mb-5
      .col-9
        .row
          .col-lg-2
              figure
                img(src='@/assets/curso/temas/Tema1/imag3.svg', alt='Texto que describa la imagen' width='84px' height='84,92px' )
          
          .col-lg-10.col-sm-10
            p Existen otros conceptos que se asocian a los activos tecnológicos y de la información, los cuales hay que conocer para comprender cómo se puede hacer una gestión eficiente de estos. 
            p Algunas definiciones de términos claves, referentes a los activos de la información con base en la guía “Metodología para la Identificación, Clasificación y Valoración de Activos de Información”, son:


    SlyderA(tipo="b").bg1.mb-5
      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          h4 Archivo                                
          p Es el conjunto de elementos, normas y procedimientos usados para conservar, proteger y clasificar la información generada en los procesos de la compañía. En informática también se conoce como archivo a cada uno de los documentos digitales con nombre y ubicación específica en la computadora o elemento de almacenamiento.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider1.png', alt='Texto que describa la imagen')
            
      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          h4 Conocimiento corporativo                                
          p Es aquel conocimiento que se le puede atribuir a una organización, el que posee esa organización. Este suele estar representado materialmente en algún tipo de documento. Las bases de datos adquiridas por una organización o la propiedad intelectual y las patentes que ésta desarrolla, son dos claros ejemplos de este tipo de conocimiento.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider2.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          h4 Custodio                                
          p Persona o parte que, dentro de sus funciones en la compañía, tiene la responsabilidad de administrar el uso y acceso a un determinado conjunto de información y garantizar su integridad.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider3.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
            h4 Integridad                                 
            p Cualidad de la información, de estar completa y ser exacta.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider4.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          h4 Disponibilidad                                 
          p Característica, de la información, de estar accesible y utilizable según sea requerida.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider5.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          h4 Proceso organizacional                               
          p Hace referencia a una dependencia o a un grupo, dentro de la organización, con funciones, actividades específicas y uno o más objetivos marcados.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider6.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            h4 Tecnología                              
            p Agrupa el conocimiento, instrumentos o herramientas y técnicas para realizar una labor.
       
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/imagslider7.png', alt='Texto que describa la imagen')


      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          h4 Propietario del activo de información                              
          p Es la persona, grupo de personas, dependencia u organización a quien se reconoce como autor y/o responsable de la seguridad y cuidado de una información en específico.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider8.png', alt='Texto que describa la imagen')

        
      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          h4 Recurso Humano                             
          p Recurso comprendido por el capital humano, sus conocimientos y habilidades para desarrollar una labor.
      
        .col-md-5
          figure
            img(src='@/assets/curso/temas/Tema1/imagslider9.png', alt='Texto que describa la imagen')

    p En relación con la 
      b caracterización y clasificación de los activos tecnológicos
      | , destacan aquellos que hacen parte directa del proceso. Para lo cual, clasificarlos e identificarlos es una acción clave.

    p A continuación, se describe cómo se clasifican:

    TabsA.color-secundario.mb-5        
      .tarjeta.color-tarjetacliente.p-4(titulo="Información")      
        .row           
          .col-xl-10
            
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Bases de datos: conglomerados de información de los diferentes procesos de la organización.
            p <i class="fas fa-check" STYLE="Color: #112782"></i> 
              em Backups: 
              | copias de seguridad y respaldo de información valiosa que, por motivos de la organización, debe ser preservada y estar disponible para ser recuperada en caso de pérdida o daño. 
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Credenciales de acceso: contraseñas, información biométrica, #[i tokens] y llaves digitales para acceder a instancias especiales del sistema de información.
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Aplicaciones y 
              em Software 
              | de uso corporativo: programas necesarios para ejecutar los procesos de la empresa.
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Documentos almacenados en archivo físico.
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Conocimiento de la operación: conocimiento de los procesos generado por los trabajadores.
            
              
      .tarjeta.color-tarjetacliente.p-4(titulo="Activos físicos")
      
        .row                     
          .col-xl-10
            
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Equipos electrónicos: son computadoras y otros equipos terminales como #[i tablets,] teléfonos, entre otros.
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Infraestructura de red: equipos como #[i routers, firewalls,] cableado, canalización, puntos de acceso, servidores y #[i racks.]
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Equipos de almacenamiento digital: discos duros y memorias.
            p <i class="fas fa-check" STYLE="Color: #112782"></i> Recurso Humano: personal, directivo, operativo, técnico, administrativo, que usa, guarda y genera conocimiento en la organización.
         
    h3.titulo-tercero(data-aos='fade-right') Gestión de activos tecnológicos: manejo, preservación y evaluación
    
    p Para realizar una gestión correcta de los activos tecnológicos se debe tener claridad sobre las características de cada uno de los elementos que integran el proceso de gestión. 
    p.mb-5 Son tres los aspectos importantes relacionados con la gestión de los activos tecnológicos
    .row.justify-content-center.mb-5
      .col-lg-7.sm-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--acordion")
          .row(titulo="Manejo")
            .col-md-5
              figure
                img(src='@/assets/curso/temas/Tema1/ACORDION1.png', alt='Texto que describa la imagen')
                
            .col-md-7.mb-4.mb-md-0
              p Es necesario que dentro de la organización exista una o más dependencias propietarias y custodios encargados del control y cuidado de los activos para llevar un registro de su uso, permisos de acceso, inventario, control de mantenimientos, copias de seguridad, rotulación, entre otras actividades relacionadas con el uso de los activos dentro de los diferentes procesos y actividades de la empresa. 
            

          .row(titulo="Preservación")
            .col-md-5
              figure
                img(src='@/assets/curso/temas/Tema1/acordion2.png', alt='Texto que describa la imagen')
                
            .col-md-7.mb-4.mb-md-0
              p La organización deberá proveer los recursos y medios para salvaguardar la información, las políticas o normas relativas a esta actividad. En el caso de equipos electrónicos e infraestructura debe proporcionar la atención y mantenimientos preventivos, predictivos o correctivos que sean necesarios; deberá establecer los mecanismos e invertir en la tecnología y herramientas necesarias para asegurar la propiedad intelectual del conocimiento y el almacenamiento de la información producida por sus colaboradores, los instrumentos y procedimientos para almacenar datos tanto a nivel digital como físico, según sea el caso.
          

          .row(titulo="Evaluación")
            .col-md-5
              figure
                img(src='@/assets/curso/temas/Tema1/acordion3.png', alt='Texto que describa la imagen')
                
          
        
            .col-md-7.mb-4.mb-md-0
              p La compañía deberá establecer procedimientos para evaluar el estado de los activos tecnológicos, en aspectos como pertinencia, eficiencia, disponibilidad, tiempos, costos y funcionamiento en general. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
