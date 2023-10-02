<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo de los sistemas silvopastoriles 

    .row.align-items-center.my-1.col-lg-12.m-auto        
      .col-lg-5.col-sm-12.col-m-12.col-md-12
        figure
          img.mb-1(src='@/assets/curso/temas/1/1.svg').m-auto(data-aos="fade-right")
      .col-lg-7.col-sm-12.col-m-12.col-md-12
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

    .cont_1_2.pt-3(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_1_2 1.2.	Manejo integrado de plagas, enfermedades y malezas 

    p Las plagas, enfermedades y malezas son una evidente amenaza a los sistemas silvopastoriles, debido a que estos actores influyen, directamente, en los beneficios que las plantas brindan a los animales y en su propio desarrollo; por eso es necesario visualizar una solución ecológica para el equilibrio y manejo general del sistema silvopastoril.
    p.mb-5 Preste atención a las particularidades del manejo de plagas y malezas que se mencionan a continuación:     

    .tarjeta.bg3.p-4.mb-5(style="background-color: #FFFAD0")
      LineaTiempoC.color-acento-botones(text-small)
        .row.align-items-center(titulo="Eliminación de organismos maléficos").p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/1/12.png' alt='Eliminación de organismos maléficos').mb-4
          .col-lg-7
            h4 Eliminación de organismos maléficos
            p Eliminar los organismos que atentan contra el desarrollo de los cultivos y especies animales, es una tarea ardua y que, a la vez, se torna bastante difícil, ya que para hacerlo eficientemente es necesario el uso de pesticidas químicos que, a su vez, generan otro problema en el medio ambiente. 

        .row.align-items-center(titulo="Control preventivo").p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/1/13.png' alt='Control preventivo').mb-4
          .col-lg-7
            h4 Control preventivo
            p Por todo ello, es recomendable optar por métodos más amigables con los ecosistemas, como el control preventivo, lo que, a la larga, se traduce en economía porque no se tiene que invertir en insumos químicos para contrarrestar la situación.

        .row.align-items-center(titulo="Planificación de asociaciones de diversas especies").p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/1/14.png' alt='Planificación de asociaciones de diversas especies').mb-4
          .col-lg-7
            h4 Planificación de asociaciones de diversas especies
            p Para realizar un control preventivo, se debe partir de conocer que los monocultivos generalmente conllevan a ataques constantes por las plagas y las enfermedades, y que la solución a esta problemática parte de la planificación de asociaciones de diversas especies para el sistema silvopastoril, en otras palabras, la diversidad de las especies implementadas minimiza el accionar de estos actores.

        .row.align-items-center(titulo="Extensión de la diversificación de especies").p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/1/15.png' alt='Extensión de la diversificación de especies').mb-4
          .col-lg-7
            h4 Extensión de la diversificación de especies
            p Esta asociación de especies, a menudo, resulta provechoso para algunos organismos benéficos que actúan como foco de control a algunas plagas, tal como las avispas, la mantis religiosa, algunos artrópodos, entre otros.

        .row.align-items-center(titulo="Ventajas del control de plagas").p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/1/16.png' alt='Ventajas del control de plagas').mb-4
          .col-lg-7
            h4 Ventajas del control de plagas
            p Una de las ventajas del control de plagas, por medio de la diversidad de especies, es que las plantas, al crecer en condiciones más favorables, se vuelven más resistentes a las enfermedades y las plagas. 

        .row.align-items-center(titulo="Mejorando la calidad de los suelos").p-4
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/1/17.png' alt='Mejorando la calidad de los suelos').mb-4
          .col-lg-8
            h4 Mejorando la calidad de los suelos
            p Para garantizar el crecimiento de la asociación de especies es necesario mejorar la calidad del suelo para que este aporte los nutrientes necesarios a las plantas del sistema silvopastoril. Una manera de potenciar los suelos es el uso de abonos verdes como el “mulch” orgánico (“organic mulch”).

        .row.align-items-center(titulo="¿Qué es el “mulch” orgánico?").p-4
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/1/18.png' alt='¿Qué es el “mulch” orgánico?').mb-4
          .col-lg-8
            h4 ¿Qué es el “mulch” orgánico?
            p Cubierta natural que protege el suelo; es muy fácil de realizarla ya que se compone de materiales residuales de las podas, talas, cortezas, hojas, los cuales se descomponen en una compostela. Son fuente perfecta de nutrientes para los suelos. Dentro de las funciones que tiene el “mulch” orgánico esta regular la temperatura de los suelos, conservar la humedad, reducir el crecimiento de malezas, y regular la escorrentía superficial.

    p.mb-5 Estudie la tabla que, a continuación, se muestra y conozca aspectos importantes sobre las plagas más comunes:

    .row.align-items-center.mb-5.col-lg-12.m-auto  
      .col-sm-12.col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-1
          p.mb-0 #[b Tabla 2.] 
            i Plagas comunes en los sistemas silvopastoriles 

    .tabla-b.color-acento-contenido.col-lg-12.m-auto.mb-5  
      .tabla-b__header
        th Plagas
        td Acciones
      table
        caption Sistemas silvopastoriles.
        tr
          th Hormigas (arrieras en su mayoría)  
          td Realizan el corte a las hojas provocando la defoliación de las plantas.
        tr
          th Gusanos (alambre o gallina ciega)
          td Son larvas de diferentes escarabajos que se instalan en los suelos y se alimentan de las raíces de las plantas.
        tr
          th Gorgojos
          td Son larvas que carcomen la pulpa de los troncos y tallos provocando degeneración y pudrición.
        tr
          th Ácaros
          td Son arácnidos muy pequeños, casi imperceptibles que pican las hojas y los frutos provocando manchas.
        tr
          th Chinches 
          td Absorben la sabia presente en las plantas y son foco de transmisión de enfermedades virales.
        tr
          th Piojo
          td Absorben la sabia y provocan manchas harinosas en las hojas.
        tr
          th Gusanos (enrollador o perforador)
          td Son las larvas de lagunas mariposas que carcomen las hojas y los frutos.
        tr
          th Pulgones o afidios 
          td Absorben la sabia de las hojas, tallos y frutos provocando un debilitamiento de la planta.
        tr
          th Minadores  
          td Son larvas de moscas que afectan los tejidos de las hojas y de los frutos 
        tr
          th Palomillas 
          td Son mariposas nocturnas, su aspecto es peludo y afectan los frutos provocando su pudrición y posterior caída. 
        tr
          th Minadores  
          td Son insectos del orden Thysanoptera, los adultos afectan la superficie de las hojas y de los frutos 

    .row.align-items-center.my-5.col-lg-8.m-auto  
        .cajon.color-primario.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#E3E7DF;")
          h4 Atención
          p.mb-0.py-3(data-aos="fade-up") La regulación de la luz solar en los suelos, ayuda a disminuir los ataques de insectos y de los hongos.

    .col.align-items-center.my-5.col-lg-12.m-auto  
      span.etiqueta.px-5(style="background-color: #1B3F5E") 
        b Importante

    p.mb-5 Otro método de control de plagas es la introducción de plantas que atraen algunos insectos depredadores naturales de estas, que se pueden instalar en asociación con las barreras vivas o las cortinas rompe vientos. También existen plantas repelentes a algunas plagas, una gran mayoría de estas están en la clasificación de platas aromáticas como las relacionadas en esta tabla:   

    .row.align-items-center.mb-5.col-lg-10.m-auto  
      .col-sm-12.col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-1
          p.mb-0 #[b Tabla 3.] 
            i Especies repelentes de plagas 

    .tabla-b.color-acento-contenido.col-lg-10.m-auto.mb-5  
      .tabla-b__header
        th Planta
        td Ventajas
      table
        caption Otras plantas con injerencia en el control de plagas son las forrajeras: como el botón de oro y la canavalia; brindan una muy buena fuente de nutrición a los animales. 
        tr
          th Ajo  
          td El ajo ayuda en control de gusanos, ácaros y pulgones. 
        tr
          th Manzanilla
          td Es un atrayente natural de enemigos naturales de las plagas, controla los pulgones.
        tr
          th Ruda
          td Es un repelente de los gusanos trozadores y medidores, de pulgones y controla la acción de las hormigas.
        tr
          th Orégano
          td Repelente natural de gusanos medidores y trozadores y de los pulgones.
        tr
          th Flor de muerto
          td Repela la mosca blanca o palomilla, controla los nematodos del suelo y es una trampa natural de los pulgones. 
        tr
          th Albahaca
          td Es una trampa natural de los pulgones y repelente de insectos como el chinche.
        tr
          th Romero
          td Atrae enemigos naturales de las plagas y repela insectos.

    .cont_1_3.pt-3(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_1_3 1.3.	Poda de las especies arbóreas     

    p La inclusión de especies arbóreas en los sistemas silvopastoriles es una actividad doble propósito, ya que pueden proporcionar sombra y protección por medio de las cercas vivas y también ser fuente de alimento a los animales; esta última actividad se torna un poco compleja cuando los árboles crecen y superan los 2 metros de altura, ya que después de ese nivel los animales no pueden alcanzar sus ramas.
    p.mb-5 En el proceso de poda de especies arbóreas, tenga presentes los aspectos que se detallan a continuación:     

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/1/19.svg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario.p-3(x="11.9%" y="13.7%" numero="+")
        .h5.mb-2 Beneficio animales
        p La inclusión de la poda, como sistema de control de alturas, beneficiará tanto a los animales que consumen la biomasa como al sistema en general, debido a que el control de alturas ya sea, uniforme o aleatoria (por las sombras).

      .tarjeta.color-secundario.p-3(x="37.5%" y="88.5%" numero="+")
        .h5.mb-2 Beneficio suelos
        p Además de generar alimento a animales, también trae beneficios a suelos, por la producción de hojarasca que provee de nutrientes a los suelos mejorando los niveles de nutrición a los pastos y plantas arbustivas, dispuestas en los potreros.

      .tarjeta.color-secundario.p-3(x="62.9%" y="13.2%" numero="+")
        .h5.mb-2 Criterios de poda
        p La definición de los criterios de las podas va directamente relacionada con las especies presentes en el sistema, ya que cada caso en particular deberá tener un proceso de implementación, acorde a periodos de crecimiento y necesidades nutricionales para los animales.

      .tarjeta.color-secundario.p-3(x="88.2%" y="88.5%" numero="+")
        .h5.mb-2 Buenas prácticas agricolas
        p Las actividades antrópicas deben realizarse según las buenas prácticas agrícolas, para que las actividades de podas no sean perjudiciales para las especies arbóreas, el personal que realiza la actividad deberá estar capacitado con curso de alturas, conocimientos previos en podas y manejo de herramientas, utilizando la indumentaria de seguridad (EPP’s).

    .cont_1_4.pt-3(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_1_4 1.4.	Rotación de potreros  


    .row.align-items-center.my-3.col-lg-12.m-0        
        p.mb-2.py-1(style="overflow-x: hidden !important") Hablar de pastoreo rotacional es, así mismo, hablar de la división de toda un área en pequeñas partes o potreros. De esta manera, mientras se está ocupando alguna de esas partes, las demás están en descanso.
        p.mb-2.py-1(style="overflow-x: hidden !important") En el siguiente recurso, profundice en los aspectos cruciales que determinan, o no, un buen proceso de rotación de potreros; procure llevar registro de lo más destacado en su libreta personal de apuntes:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com//embed/Wp5qbTODkuQ" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
