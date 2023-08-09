export default {
  global: {
    componenteFormativo: 'Fundamentos y normativa para la ciberseguridad',
    descripcionCurso:
      'Este componente formativo aborda conceptos y aspectos de la normativa y procedimientos básicos de la ciberseguridad en entornos corporativos, necesarios para garantizar el funcionamiento seguro de los procesos de la compañía, previniendo ataques cibernéticos a la información y/o datos vulnerables. Todos ellos, elementos que se realizan mediante buenas prácticas y procedimientos adecuados a las normas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),

    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal1.png'),

    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1ra', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Activos de información',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos de ciberseguridad',
        desarrolloContenidos: true,

        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición de conceptos esenciales',
            hash: 't_2_1',
          },

          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Contextualización y estado del arte',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Objetivos de la ciberseguridad',
            hash: 't_2_3',
          },

          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Ciberseguridad: metodología, estrategias y técnicas de diagnóstico',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa: ISO 27001',
        desarrolloContenidos: true,

        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos generales, principios y políticas',
            hash: 't_3_1',
          },

          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas y procedimientos de la norma',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Gestión de riesgos y evaluación',
            hash: 't_3_3',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manual de ciberseguridad corporativa',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'ISO 27001',
      referencia:
        'Procem Consultores (2018). ISO 27001 - Seguridad de la Información.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=BNdPQU32p2Y&ab_channel=ProcemConsultores ',
    },
    // {
    //   tema: 'Análisis de vulnerabilidades',
    //   referencia: 'Cloud seguro. (2021). Análisis de Vulnerabilidades.',
    //   tipo: 'Video',
    //   link:
    //     'https://www.youtube.com/watch?v=dwhIZdqFyyI&ab_channel=CloudSeguro ',
    // },
    {
      tema: 'Fundamentos de ciberseguridad',
      referencia:
        'Curso Introducción al Hacking & Penstesting (2020). Análisis de Vulnerabilidades.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Rji6lKeZUvA',
    },
    {
      tema: 'Activos de información',
      referencia:
        'Instituto Nacional de Tecnologías de la Información, España (2012). Activos de información.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=THnQ2FH7NtU',
    },
    {
      tema: 'Fundamentos de ciberseguridad',
      referencia:
        'Rodríguez Cruz, D. (2020). Objetivos de la ciberseguridad y causas de los riesgos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0mqc4fde8y0',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'hace referencia a un recurso propio de la empresa que genera y posee en sí mismo un valor, siendo importante para los procesos de esta.',
    },
    {
      termino: 'Ciberataque',
      significado:
        'cualquier tipo de acción encaminada a causar daños a la información digital de una persona, empresa u otro tipo de organización. Por ejemplo, el robo de información privada, la alteración, destrucción o secuestro de información empresarial.',
    },
    {
      termino: 'Credenciales de acceso',
      significado:
        'hace referencia al sistema utilizado para el acceso a carpetas, archivos, ambientes y espacios de la compañía. Las credenciales suelen ser usuario y contraseña, pin de seguridad, control biométrico entre otras.',
    },
    {
      termino: 'Licencia',
      significado:
        'en informática, se refiere a las licencias como el acuerdo legal o contrato entre el desarrollador/proveedor del <em>software</em> y el usuario quien, mediante algún tipo de reconocimiento, puede usar dicho programa de manera legal y con derecho al soporte y acceso a las herramientas contratadas. ',
    },
    {
      termino: 'Norma',
      significado:
        'es una agrupación de conceptos, procedimientos y reglas sobre determinado tema o actividad, que han sido emitidos por un organismo reconocido con el objetivo de estandarizar, ordenar y definir la manera apropiada de hacer algo.',
    },
    {
      termino: 'Política corporativa',
      significado:
        'conjunto de acciones implementadas por la empresa y exigidas a sus colaboradores para realizar las actividades relacionadas con el cumplimiento de los objetivos empresariales y buen funcionamiento de la misma. ',
    },
    {
      termino: 'Procedimiento',
      significado:
        'hace referencia al método o conjunto de actividades ordenadas para realizar determinada actividad.',
    },
    {
      termino: 'Riesgo',
      significado:
        'situación que puede ocurrir en el sistema de información, desencadenando algún tipo de daño o perturbación en este.  ',
    },
    {
      termino: 'Suplantación',
      significado:
        'acción de hacerse pasar o tomar responsabilidades  de alguien más  de manera fraudulenta, esto puede ocurrir por ejemplo, cuando se ingresa sin autorización a las cuentas personales o laborales de alguien más, motivado principalmente por el hecho de obtener información sin autorización o consentimiento de su propietario.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'son los puntos o aspectos del sistema que pueden ser susceptibles al sufrir algún tipo de incidente o ciberataque.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arroyo Guardeño, D. Gayoso Martínez, V. & Hernández Encinas, L. (2020). Ciberseguridad. Editorial CSIC Consejo Superior de Investigaciones Científicas. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/172144?page=7 ',
    },
    {
      referencia:
        'Delitos informáticos en Colombia subieron un 17 % en el 2021: sepa cómo prevenirlos. (2021). Infobae.',
      link:
        'https://www.infobae.com/america/colombia/2021/12/27/delitos-informaticos-en-colombia-subieron-un-17-en-el-2021-sepa-como-prevenirlos/#:~:text=%E2%80%9CSeg%C3%BAn%20cifras%20del%20Centro%20Cibern%C3%A9tico,capturas%E2%80%9D%2C%20revelaron%20las%20autoridades.',
    },
    {
      referencia:
        'Giant, N. (2016). Ciber seguridad para la i-generación: usos y riesgos de las redes sociales y sus aplicaciones. Narcea Ediciones. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/46247?page=17  ',
    },
    {
      referencia:
        'El ciberdelito creció 150% en el último año en el mundo. (2022). Portafolio. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/46247?page=17 ',
    },
    {
      referencia:
        'ISO 27001:2013 Guía de implantación para la seguridad de la información. (s.f.). Nga.',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      referencia:
        'La cibercriminalidad costó más de u$s6 billones en 2021. (11 de mayo de 2022). Ámbito.',
      link:
        'https://www.ambito.com/mundo/ciberseguridad/la-cibercriminalidad-costo-mas-us6-billones-2021-n5436916',
    },
    {
      referencia:
        'Ministerio de tecnologías de la información y las telecomunicaciones [mintic].(2021). Política de Seguridad Digital. ',
      link:
        'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/15430:Politica-de-Seguridad-Digital',
    },
    {
      referencia: 'Pérez-Montoro, M. (2009). Gestión del conocimiento.',
      link:
        'https://diposit.ub.edu/dspace/bitstream/2445/123350/1/Pe%CC%81rez-Montoro%20%282008%29%20Gestio%CC%81n%20del%20conocimiento%20en%20las%20organizaciones.pdf',
    },
    {
      referencia:
        'Super intendencia de industria y comercio [SIC]. (2018). Metodología para la identificación, clasificación y valoración de activos de información. ',
      link:
        'https://www.sic.gov.co/sites/default/files/files/Nuestra_Entidad/Transparencia_y_acceso_a_la_informacion_publica/SC05-I03%20ACTIVOS%20DE%20INFORMACION%20(1)%20(1).doc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
