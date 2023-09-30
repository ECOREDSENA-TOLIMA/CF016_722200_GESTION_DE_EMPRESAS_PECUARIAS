<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel

    .row.align-items-center.my-1.col-lg-12.m-auto        
      .col-5
        figure
          img(src='@/assets/curso/temas/1/1.svg').m-auto(data-aos="fade-right")
      .col-7
        p(data-aos="fade-up" style="overflow-x: hidden !important") El manejo de los sistemas silvopastoriles depende de las variables físicas, químicas y de la planificación que se realice de las actividades agrícolas, ya que estas son el punto de partida para lograr que la producción no tenga altibajos que puedan poner en riesgo las especies vegetales y a los animales.
        .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#DBF9BD; overflow-x: hidden !important")
          p.mb-2.py-2(style="overflow-x: hidden !important") Para llevar a cabo todos los procesos operativos, es vital el potencial humano, ya que es el personal el que granizará que todo marche bien. Por esta razón es indispensable garantizar la seguridad y la calidad de vida del personal, lo cual conduce a una implementación de un 
            b Sistema de Gestión de Seguridad y Salud en el Trabajo SG-SST. 

    p.align-items-center.my-1.col-lg-12.m-auto.mb-2.py-5 Analice la siguiente tabla y amplíe sus conocimientos sobre la normatividad relacionada con la gestión de la seguridad y salud en el trabajo.

    .row.align-items-center.mb-5.col-lg-10.m-auto  
      .col-sm-12.col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-1
          p.mb-0 #[b Tabla 1.] 
            i Normatividad SG-SST

    .tabla-b.color-acento-contenido.col-lg-10.m-auto.mb-5  
      .tabla-b__header
        th Tipo de Norma
        td Concepto
      table
        caption Gestión de la seguridad y salud en el trabajo.
        tr
          th Código sustantivo del trabajo de 1951  
          td Propende por la justicia en las relaciones entre empleador y trabajador. 
        tr
          th Decreto ley 1295 de 1994
          td Decreta la organización y la administración del Sistema General de Riesgos Profesionales.
        tr
          th Resolución 1401 de 2007
          td Determina los diferentes requisitos mínimos y las obligaciones para la realización de investigaciones de incidentes y accidentes en el trabajo, para identiﬁcar causas, hechos y situaciones que los han generado; y así implementar medidas correctivas orientadas a la eliminación o minimización de los riesgos y condiciones de riesgos (y evitar su materialización y/o recurrencia).
        tr
          th Ley 1010 de 2006
          td Adopta medidas de prevención, corrección y sanción del acoso laboral y demás hostigamientos del ámbito del trabajo.
        tr
          th Resolución 3368 de 2014
          td Modiﬁca el reglamento para la protección contra caídas de trabajo en alturas 
        tr
          th Resolución 2346 de 2007
          td Regula la práctica de evaluaciones medica ocupacionales y el manejo de las historias clínicas ocupacionales  
        tr
          th Resolución 1792 de 1990
          td Establece valores límites permisibles para la exposición al ruido.
        tr
          th Resolución 0652 de 2012 
          td Resuelve la conformación y el funcionamiento de los comités de convivencia laboral, en las entidades públicas y en las empresas privadas. Así mismo, establece las responsabilidades que les asiste a los empleadores públicos y privados, a las administradoras de riesgos profesionales, frente al desarrollo de medidas preventivas y correctivas del acoso laboral.
        tr
          th Resolución 1356 de 2012 
          td Modiﬁca parcialmente la Resolución 652 de 2012 
        tr
          th Resolución 2013 de 1986
          td Reglamenta la organización y funcionamiento de los comités paritarios de seguridad y salud en el trabajo en los lugares de trabajo, estableciendo las funciones de este comité y de cada uno de sus miembros, así como el quórum para sesionar
        tr
          th Resolución 4502 de 2012 
          td Reglamenta el procedimiento, requisitos para el otorgamiento y renovación de las licencias de salud ocupacional y se dictan otras disposiciones.
        tr
          th Resolución 2646 de 2008  
          td Establece disposiciones y deﬁne las responsabilidades de los diferentes actores sociales en cuanto a la identiﬁcación, evaluación, prevención, intervención y monitoreo permanente de la exposición a los factores de riesgo psicosocial en el trabajo, así como el estudio y determinación de origen de patologías presuntamente causadas por estrés ocupacional.
        tr
          th Resolución 1956 de 2008  
          td Adopta medias frente al consumo de cigarrillo y tabaco. 
        tr
          th Circular 0039 de 2010
          td Establece espacios libres de humo y sustancias psicoactivas en la empresa. 
        tr
          th Decreto 1474 de 2014
          td Expide la tabla de enfermedades laborales
        tr
          th Resolución 2400 de 1979
          td Establece algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo. Incluye las características que deben cumplir estos establecimientos y también normas generales sobre riesgos físicos, químicos y biológicos 
        tr
          th Resolución 0312 de 2019
          td Tiene por objeto establecer los estándares mínimos del sistema de gestión de seguridad y salud en el trabajo SG-SST para las personas naturales y jurídicas. 
        
    .cont_1_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_1 1.1  Ciclo hidrológico, usos y calidad    

    p.align-items-center.my-1.col-lg-12.m-auto.mb-3 El requerimiento hídrico en un sistema silvopastoril va a depender de la influencia directa del clima en la finca; los aspectos a tener en cuenta son: temperatura, humedad relativa, viento.

    p.align-items-center.my-1.col-lg-12.m-auto.mb-5 Tenga en cuenta las generalidades sobre estos tres aspectos y otros elementos importantes que se mencionan a continuación, relativos a los requerimientos hídricos; procure llevar registro de ello en su libreta personal de apuntes:

    SlyderB.p-3.mb-5(:datos="datosSlyder" style="background:#DBF9BD;")


    .row.justify-content-center.mb-5.col-lg-12.m-auto  
      .col-auto
        a.boton.color-acento-botones.indicador__container.px-5(@click="modal1 = true" style="border-radius: 15px;")
          span Coeficientes de cultivo
          .indicador--click(v-if="mostrarIndicador") 
          i.fas.fa-search  
          

      .col-auto
        a.boton.color-acento-botones.indicador__container.px-5(@click="modal2 = true" style="border-radius: 15px;")
          span Cálculo requerimiento agua de cultivo
          .indicador--click(v-if="mostrarIndicador")
          i.fas.fa-search       
  
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center.p-5(style="border-radius: 15px; background-color: #E3E7DF")
        .col-md-8.mb-4.mb-md-0
          h4 Cálculo requerimiento agua de cultivo
          p Para el cálculo del requerimiento de agua de un cultivo, se utiliza la ecuación:

          .row.justify-content-center.m-2.mx-5
            .col-sm-12.col-lg-12
              img(src='@/assets/curso/temas/1/11.svg', style="width:300px")
            
          p Dónde:
            
          b ETc 
          | : evapotranspiración del cultivo de interés, expresada en mm/día, mm/mes, mm/semana, etc. <br>
          b ETo
          | : evapotranspiración del cultivo de referencia, expresada en mm/día, mm/mes, mm/semana, etc. <br>
          b Kc 
          | : coeficiente del cultivo.


        .col-md-4
          figure
            img(src='@/assets/curso/temas/1/9.svg', alt='Texto que describa la imagen')
    
       
  
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center.p-5(style="border-radius: 15px; background-color: #E3E7DF")
        .col-md-8.mb-4.mb-md-0
          h4 Coeficientes de cultivo

          p Coeficientes experimentales, llamados Coeficientes del Cultivo 
            b (Kc)
            |, son usados para relacionar la 
            b ETc 
            | con la 
            b ETo 
            | ya que 
            b ETc 
            | = 
            b ETo 
            | x 
            b Kc
            |. El 
            b Kc 
            | cambia según el estadio de la planta, es usualmente menor que 1; pero alcanza valores de hasta 1.2 cuando está en floración.
      
        .col-md-4
          figure
            img(src='@/assets/curso/temas/1/10.svg', alt='Texto que describa la imagen')






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue

    modal1: false,
    modal2: false,

    datosSlyder: [
      {
        titulo: 'Temperatura',
        texto:
          'Siempre será necesario conocer todos aquellos factores externos que pueden afectar, de manera directa, el consumo que las personas y animales y demás seres vivos hagan del agua. Cuando las temperaturas son altas, serán las plantas quienes absorban, más que otras especies, agua de los suelos; y ello sucede ya que la transpiración en su interior sufre un incremento significativo. ',
        imagen: require('@/assets/curso/temas/1/2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Humedad relativa',
        texto:
          'Vapor de agua que se puede encontrar en el aire. La humedad puede ser expresada de manera absoluta o relativa (grado de humedad). La humedad relativa, hace referencia a aquella relación porcentual existente entre vapor de agua real (contenida en el aire) y la que habría de contener para, de esta manera, saturarse a una temperatura igual: una humedad relativa del 70 % quiere decir que de la totalidad de vapor de agua (el 100 %) que podría contener el aire a esta temperatura, sólo tiene el 70 %.',
        imagen: require('@/assets/curso/temas/1/3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Viento',
        texto:
          'Es de suma importancia tener claridad de los días en que el viento tiene mayor rigor o fuerza. Ello favorece, o no, el riego. Cualquier cultivo podría llegar a sufrir una pérdida de agua con menor rapidez en el lapso en que haya poco viento. Así mismo, el suelo podría tener un proceso de secado más ágil en temporadas (cortas o extensas) de mayor velocidad del viento.',
        imagen: require('@/assets/curso/temas/1/4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evaluación de condiciones climáticas',
        texto:
          'Después de evaluar las condiciones climáticas de la zona se debe determinar la necesidad de agua de los cultivos, para ello hay que planificar las especies a instalar para evaluar los requerimientos de agua que necesitan dichas especies y si es viable su implementación.',
        imagen: require('@/assets/curso/temas/1/5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evaporación',
        texto:
          'Dependiendo del lugar o sitio en el cual sea medida la evaporación del agua, esta se dará. Así mismo, la evaporación depende de otros factores asociados: luz, vientos, temperaturas, humedad del ambiente, altura, entre otros. Es posible lograr los datos de la evaporación en una estación de meteorología cercana; se puede llegar a determinar al medir la altura de agua perdida en un tanque de agua, en milímetros. En este ejemplo, cada uno de los milímetros equivaldrá a 1 litro por metro cuadrado (10 metros cúbicos por hectárea).',
        imagen: require('@/assets/curso/temas/1/6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Requerimiento de agua de cultivo',
        texto:
          'Cantidad de agua que se necesita para compensar la pérdida por evapotranspiración de un campo cultivado. Aun cuando los valores para evapotranspiración del cultivo (ETc) y el requerimiento de agua del cultivo son iguales, el requerimiento de agua del cultivo hace referencia a aquella cantidad de agua por suplir y la Etc (evapotranspiración del cultivo) se refiere a la cantidad de agua perdida por evapotranspiración. Generalmente, el requerimiento de agua de riego hace referencia a la diferencia existente entre el requerimiento del cultivo y la precipitación efectiva. El requerimiento de agua de riego también incluye agua adicional, para el lavado de sales y para la compensación por la no uniformidad de la aplicación del agua.',
        imagen: require('@/assets/curso/temas/1/7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evapotranspiración',
        texto:
          'La ETc puede ser calculada directamente utilizando parámetros climáticos e integrando directamente la resistencia del cultivo, el albedo (fracción de la radiación solar que es reflejada por una superficie; coeficiente de reflejo de la vegetación, generalmente 0.23) y factores de resistencia del aire en el método de “Penman Monteith”. Como en la actualidad existe una considerable falta de información para diferentes cultivos, se utiliza este método para la estimación de la superficie de referencia para determinar su tasa de evapotranspiración, esto es, su ETo.',
        imagen: require('@/assets/curso/temas/1/8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
