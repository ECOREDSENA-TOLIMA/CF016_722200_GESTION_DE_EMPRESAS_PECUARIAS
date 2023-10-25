export default {
  global: {
    componenteFormativo: 'Mantenimiento y evaluación del sistema silvopastoril',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz afianzará sus conocimientos y habilidades en el mantenimiento y evaluación de un sistema de pastoreo y el compendio de actividades agrícolas conexas: producción silvícola (producción de madera) y la producción pastoril (producción de pastos). También se capacitará en la maximización de la producción y disminución de los impactos generados a los ecosistemas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo de los sistemas silvopastoriles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos hídricos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo integrado de plagas, enfermedades y malezas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Poda de las especies arbóreas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Rotación de potreros',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Manejo y disposición de residuos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Suplementación alimenticia',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de información en el sistema silvopastoril',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación del sistema silvopastoril',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Parámetros técnicos para la evaluación del sistema silvopastoril',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Plan de contingencia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Plan de mejoramiento',
            hash: 't_3_3',
          },
        ],
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
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_16_722200.zip',
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
      tema: '1.2 Manejo integrado de plagas, enfermedades y malezas',
      referencia:
        'Ganadería Tropical Paso a Paso (2021). Manejo Agroecológico de Plagas y Parásitos en Ganaderías a Pastoreo. [Video]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=p0F_z1Kx9WM&ab_channel=GanaderiaTropicalPasoaPaso',
    },
    {
      tema: '1.4. Rotación de potreros',
      referencia:
        'Agrolatina TV (20215). Ganadería Silvopastoril. [Video]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=2fuvV2UAwQ0&ab_channel=AgrolatinaTV',
    },
  ],
  glosario: [
    {
      termino: 'Arvenses',
      significado:
        'Más conocidas como malezas. Son plantas que tienen un potencial de uso en ganadería por su valor nutricional, su efecto en la estructura del suelo, la protección de suelos de ladera y otros efectos alelopáticos, todavía no estudiados a plenitud.',
    },
    {
      termino: 'Barrenar',
      significado: 'Taladrar, agujerar alguna cosa.',
    },
    {
      termino: 'Forraje',
      significado: 'Hierba verde o seca que se da al ganado para alimentarlo.',
    },
    {
      termino: 'Macolla',
      significado:
        'Conjunto de vástagos que nacen de la base de un mismo pie en manojos o penachos.',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'Entorno en el cual una organización opera, incluidos el aire, el agua, el suelo, los recursos naturales, la flora, la fauna, los seres humanos y sus interrelaciones. (Norma Técnica Colombiana NTC – ISO 14001, 2004).',
    },
    {
      termino: 'Pradera',
      significado:
        'Terreno llano y con hierba de mayor extensión que el prado.',
    },
    {
      termino: 'Pastoreo',
      significado:
        'Acción o actividad consistente en el cuidado y la alimentación del ganado en pastizales.',
    },
    {
      termino: 'Residuo',
      significado:
        'Material o subproducto industrial considerado, por su cantidad, composición o particular naturaleza, para ser reintegrado a los ciclos, flujos y procesos de la misma u otras cadenas productivas. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Silvopastoril',
      significado:
        'Sistemas que tiene como objeto la producción de silvícola (madera) y pastoril (pasto).',
    },
  ],
  referencias: [
    {
      referencia:
        'Campos, G. (2020). Normatividad en Seguridad y Salud en el Trabajo. Seguridad Laboral.',
      link:
        'https://www.seguridad-laboral.es/sl-latam/colombia/normatividad-en-seguridad-y-salud-en-el-trabajo-2019-2020-colombia_20200630.html',
    },
    {
      referencia:
        'Martínez, F. (2020). Pastoreo Rotacional. Infopastosyforrajes.',
      link:
        'https://infopastosyforrajes.com/sistemas-de-pastoreo/pastoreo-rotacional/',
    },
    {
      referencia:
        'Resolución 0312 de 2019 [Ministerio del Trabajo]. Por la cual se modifican los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo para empleadores y contratantes. Febrero 13 de 2019.',
      link:
        'https://www.arlsura.com/index.php/decretos-leyes-resoluciones-circulares-y-jurisprudencia',
    },
  ],
  creditos: [
    {
      titulo: 'PROGRAMA GESTIÓN DE EMPRESAS PECUARIAS',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Karly Cediel',
          cargo: 'Contratista Diseño Curricular',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Metodóloga',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
