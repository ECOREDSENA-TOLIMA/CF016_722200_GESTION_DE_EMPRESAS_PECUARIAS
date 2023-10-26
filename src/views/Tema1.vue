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

    p.align-items-center.my-1.col-lg-12.m-auto.mb-2.py-5 Al analizar la siguiente tabla se puede ampliar los conocimientos sobre la normatividad relacionada con la SG-SST. (ver tabla 1).

    .row.align-items-center.mb-5.col-lg-10.m-auto  
      .col-sm-12.col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-1
          p.mb-0 #[b Tabla 1.] 
            i Normatividad SG-SST

    .tabla-b.color-acento-contenido.col-lg-10.m-auto.mb-5  
      .tabla-b__header
        td Tipo de Norma
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
        trSlyder
          th Resolución 0312 de 2019
          td Tiene por objeto establecer los estándares mínimos del sistema de gestión de seguridad y salud en el trabajo SG-SST para las personas naturales y jurídicas. 
        
    .cont_1_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_1 1.1  Requerimientos hídricos   

    p.align-items-center.my-1.col-lg-12.m-auto.mb-3 El requerimiento hídrico en un sistema silvopastoril va a depender de la influencia directa del clima en la finca; los aspectos a tener en cuenta son: temperatura, humedad relativa, viento.

    p.align-items-center.my-1.col-lg-12.m-auto.mb-5 Se deben tener en cuenta las generalidades sobre estos tres aspectos y otros elementos importantes que se mencionan a continuación, relativos a los requerimientos hídricos; se debe llevar registro de ello en una libreta personal de apuntes:

    SlyderC.pr-4.mb-2(:datos="datosSlyder" style="background:#DBF9BD;")


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
  
    ModalA(:abrir-modal.sync="modal2")
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
    
       
  
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center.p-5(style="border-radius: 15px; background-color: #E3E7DF")
        .col-md-8.mb-4.mb-md-0
          h4 Coeficientes de cultivo

          p Coeficientes experimentales, llamados Coeficientes del Cultivo 
            b (Kc)
            |, son usados para relacionar la 
            b ETc 
            | con la 
            b ETo 
            | ya que  <br> 
          .row.align-items-center.my-5.col-lg-6.m-auto  
            p.mx-5  
              b ETc 
              | = 
              b ETo 
              | x 
              b Kc
          p El 
            b Kc 
            | cambia según el estadio de la planta, es usualmente menor que 1; pero alcanza valores de hasta 1.2 cuando está en floración.
      
        .col-md-4
          figure
            img(src='@/assets/curso/temas/1/10.svg', alt='Texto que describa la imagen')

    .cont_1_2.pt-3(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_1_2 1.2.	Manejo integrado de plagas, enfermedades y malezas 

    p Las plagas, enfermedades y malezas son una evidente amenaza a los sistemas silvopastoriles, debido a que estos actores influyen, directamente, en los beneficios que las plantas brindan a los animales y en su propio desarrollo; por eso es necesario visualizar una solución ecológica para el equilibrio y manejo general del sistema silvopastoril.
    p.mb-5 Se debe prestar atención a las particularidades del manejo de plagas y malezas que se mencionan a continuación:    

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

    p.mb-5 Se deben estudiar las tablas 2 y 3 que a continuación se muestran, y que permiten reconocer aspectos importantes sobre las plagas más comunes:

    .row.align-items-center.mb-5.col-lg-12.m-auto  
      .col-sm-12.col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-1
          p.mb-0 #[b Tabla 2.] 
            i Plagas comunes en los sistemas silvopastoriles 

    .tabla-b.color-acento-contenido.col-lg-12.m-auto.mb-5  
      .tabla-b__header.px-5
        td Plagas 
        td Acciones
      table
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
          th “Trips”  
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
      .tabla-b__header.px-5
        td Planta
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

    figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
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

    figure.movil.mt-0
      .row.justify-content-center.d-lg-none.d-md-none        
        img(src="@/assets/curso/temas/1/33.svg" data-aos="zoom-in-up")      
  
    .cont_1_4.pt-3(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_1_4 1.4.	Rotación de potreros  
  
    .row.align-items-center.my-3.col-lg-12.m-0        
        p.mb-2.py-1(style="overflow-x: hidden !important") Hablar de pastoreo rotacional es, así mismo, hablar de la división de toda un área en pequeñas partes o potreros. De esta manera, mientras se está ocupando alguna de esas partes, las demás están en descanso.
        p.mb-2.py-1(style="overflow-x: hidden !important") En la siguiente información, se puede profundizar en los aspectos cruciales que determinan, o no, un buen proceso de rotación de potreros; se debe llevar registro de lo más destacado en una libreta personal de apuntes:
    
    a.anexo.my-5.mb-lg-0(href="https://www.youtube.com//embed/Wp5qbTODkuQ" target="_blank")
      .anexo__icono
        img(src="@/assets/template/icono-link.svg")
      .anexo__texto
        p Manejo de Suelos y Pastos en Explotaciones Ganaderas (Silvopastoril)
 

    p.mt-5 Las siguientes, son algunas ventajas y desventajas del pastoreo rotacional. Analice, con atención, cada una de ellas:

    .row.align-items-center.my-5.col-lg-12.m-auto  
      .col-sm-12.col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-1
          p.mb-0 #[b Tabla 4.] 
            i Ventajas y desventajas del pastoreo rotacional  

    .tabla-a.color-acento-botones 
      table
        caption Ventajas y desventajas del pastoreo rotacional  
        thead
          tr
            th Ventajas
            th Desventajas
            
        tbody
          tr
            td Se facilita la fertilización 
            td Mayor inversión en la construcción de los potreros  
            
          tr
            td Los potreros son pastoreados uniformemente  
            td Mayor inversión en mantenimiento de cercas   
            
          tr
            td Hay presencia de zonas sobre pastoreadas en conjunto con pastos tupidos  
            td Requiere un mayor número de bebederos y comederos    
          tr
            td Mayor tasa de engorde de los animales cuando se utilizan pastos perennes 
            td Mayor área para dividir    
            
          tr
            td Se puede dar un adecuado manejo a cultivos de pastos asociados con leguminosas
            td Personal de traslado   
            
          tr
            td La producción de forraje aumenta   
            td Mayor número de inspecciones a los animales y a los pastos      
          tr
            td De acuerdo a la clasificación por etapa fisiológica de los animales (estratificación), se puede llevar a cabo un adecuado manejo
            td 
            
          tr
            td Los ciclos de desarrollo de parásitos, plagas y/o enfermedades se pueden quebrar o interrumpir 
            td 
            
          tr
            td Hay un control de malezas    
            td  
          tr
            td De acuerdo a la época de lluvias se aumenta el material para producción de heno 
            td   

    Separador.mt-0        

    .cont_1_5(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_5 1.5.	Manejo y disposición de residuos   

    p Los residuos generados en un sistema silvopastoril, aplicado desde la perspectiva orgánica, prácticamente son nulos, ya que los procesos de poda, tala y mantenimientos, producirán materias orgánicas que son propias para la elaboración de otros subproductos como el abono orgánico.
    p Se presenta una serie de factores, que se debe tener en cuenta, para procesos efectivos de manejo y disposición de residuos:

    figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/1/20.svg', alt='Texto que describa la imagen')

        .tarjeta.color-secundario.p-3(x="34.5%" y="9%" numero="+")
          .h5.mb-2 Uso de abono
          p La compostela se enfría a temperatura ambiente y se inicia su uso (aprox. 2 kg/ árbol).

        .tarjeta.color-secundario.p-3(x="64.5%" y="9%" numero="+")
          .h5.mb-2 Almacenamiento
          p Por ser un abono orgánico se puede almacenar por largos periodos de tiempo, siempre y cuando no esté a la acción del sol y de la lluvia.

        .tarjeta.color-secundario.p-3(x="82.9%" y="30%" numero="+")
          .h5.mb-2 Materia prima
          p Estiércol, hojarasca, troncos, ramas, otros.

        .tarjeta.color-secundario.p-3(x="75%" y="60%" numero="+")
          .h5.mb-2 Sitio de compostaje
          p Debe ser amplio y con acceso a una fuente hídrica.

        .tarjeta.color-secundario.p-3(x="50%" y="71%" numero="+")
          .h5.mb-2 Materiales y equipos
          p Palas, carretas, máquinas, etc.

        .tarjeta.color-secundario.p-3(x="25.3%" y="61%" numero="+")
          .h5.mb-2 Agregado de ingredientes
          p Colocar capas de 15 cm de cada ingrediente, más agua. 

        .tarjeta.color-secundario.p-3(x="17.5%" y="31%" numero="+")
          .h5.mb-2 Mezcla
          p El movimiento es clave para la calidad del compost (una vez al día para evitar que se suba la temperatura y se queme).

    figure.movil.mt-0
      .row.justify-content-center.d-lg-none.d-md-none        
        img(src="@/assets/curso/temas/1/34.svg" data-aos="zoom-in-up")      
  

    p.my-5 A continuación, se debe profundizar en algunos aspectos relativos al manejo de excretas en el marco del sistema silvopastoril:

    LineaTiempoE.color-primario(style="padding-right: 100px !important")
      .row(titulo="Manejo de excretas")
        .col-lg-6.mb-4.mb-lg-0
          p El manejo de excretas (excremento y orines), en las fincas ganaderas, ha permitido que los residuos generados por los animales se aprovechen para la elaboración de abonos orgánicos que se usan en la misma finca, como fertilizante para los potreros. Esto reduce, en muy buena proporción, cantidades necesarias de insumos químicos externos y la liberación de metano a la atmósfera.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/1/21.png', alt='Texto que describa la imagen')

      .row(titulo="Malos manejos")
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/1/22.png', alt='Texto que describa la imagen')
        .col-lg-6.mb-4.mb-lg-0
          p El mal manejo de las excretas en la ganadería ha contribuido a la contaminación de fuentes de agua disponibles para el consumo humano y de otras especies. Esto constituye un serio problema porque algunos parásitos que afectan la salud humana y animal contaminan las aguas de donde se abastece el ganado y la comunidad.
      
      .row(titulo="Compostaje")
        .col-lg-6.mb-4.mb-lg-0
          p Una de las formas más apropiadas de manejo de las excretas es el compostaje, la descomposición o degradación de los materiales orgánicos de desecho, que se generan de un proceso humano, animal, industrial, etc. En un ambiente cálido, húmedo y aireado, los microorganismos (microbios) contribuyen a la descomposición de estos desechos que se convierten en abono orgánico.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/1/23.png', alt='Texto que describa la imagen')

      .row(titulo="Materiales orgánicos de desecho")
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/1/24.png', alt='Texto que describa la imagen')
        .col-lg-6.mb-4.mb-lg-0
          p El abono orgánico permite maximizar el uso de materiales orgánicos de desecho, disponibles por la ganadería y la agricultura. Este abono es fuente de nutrientes que son liberados, gradualmente, según necesidades de las plantas, en este caso, los pastos. 
      
      .row(titulo="Mejoras del suelo")
        .col-lg-6.mb-4.mb-lg-0
          p Además de lo mencionado, el abono mejora el contenido de materia orgánica y las características del suelo, la retención de agua y evita la erosión; debido a la diversidad de desechos orgánicos que se tienen en una finca, es posible preparar una gran variedad de abonos orgánicos.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/1/25.png', alt='Texto que describa la imagen')

    Separador.mt-5        


    .cont_1_6.pt-1(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_1_6 1.6.	Suplementación alimenticia  

    .row.align-items-center.my-1.col-lg-12.m-auto.mt-5        
      .col-lg-5.col-sm-12.col-m-12.col-md-12
        figure
          img.mb-1(src='@/assets/curso/temas/1/26.png').m-auto(data-aos="fade-right")
      .col-lg-7.col-sm-12.col-m-12.col-md-12
        p(data-aos="fade-up" style="overflow-x: hidden !important") La alimentación de los animales es base primordial para una buena producción, por esta razón el sistema deberá garantizar que la combinación de pasturas, forrajes y árboles, brinden una alimentación balanceada que aporte los nutrientes necesarios para la cría, la ceba o el doble propósito, en la ganadería colombiana.
        .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#DBF9BD; overflow-x: hidden !important")
          p.mb-2.py-2(style="overflow-x: hidden !important") La suplementación estratégica se basa en el análisis de la calidad nutricional de los alimentos, la estimación de los requerimientos nutricionales de los bovinos, el conocimiento de las condiciones climáticas de la zona de implementación, el suministro de cantidades recomendadas y el uso de un programa de balanceo de raciones. 

    


    p.my-5 Se debe tener presente estos aspectos de la suplementación alimenticia; se debe procurar tomar nota de lo más relevante, en la libreta personal de apuntes: 
    a.anexo.mb-5.mb-lg-0(href="https://www.youtube.com/watch?v=y3OtPIcvsUM" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Manejo de suelos y pastos en explotaciones ganaderas (Silvopastoril)

    
 

    .row.my-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/1/27.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DBF9BD")
            .text-black.p-4
              h2.text-center Suplementación estratégica
              p.text-center Mecanismo para realizar una corrección a la carencia o deficiencia de nutrientes en las asociaciones del sistema silvopastoril, del ganado en pastoreo.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/1/28.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DBF9BD")
            .p-4
              h2.text-center Plan nutricional
              p.text-center Un plan nutricional con subproductos agroindustriales y ensilajes, se verán reflejados en un incremento en la producción de leche y de carne, y disminución del déficit de nutrientes.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/1/29.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DBF9BD")
            .p-4
              h2.text-center Escogencia de alimentos suplementarios
              p.text-center Se deberá tener en cuenta la demanda, los costos, la cercanía y la composición nutricional, entre otros. 

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/1/30.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DBF9BD")
            .text-black.p-4
              h2.text-center Pruebas de laboratorio
              p.text-center Estos alimentos deberán someterse a pruebas de laboratorio en las cuales se evaluarán las composiciones de cada uno; cuando arrojen los resultados se evaluará y se formulará la dieta a implementar, a partir de ello.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/1/31.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DBF9BD")
            .p-4
              h2.text-center Pastos y ensilajes
              p.text-center Los pastos más comunes son del género “Brachiaria”, y los ensilajes que más se utilizan son de maíz y sorgo forrajero. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/1/32.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DBF9BD")
            .p-4
              h2.text-center Subproductos energéticos
              p.text-center Los subproductos energéticos disponibles son las harinas de arroz y maíz, las tortas de palmiste alta y baja en grasa, el glicerol y la melaza, los subproductos proteicos, las tortas de soya y algodón y los granos secos de destilería. Como fuente mineral se utilizan premezclas o sales mineralizadas.


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
          'Cantidad de agua que se necesita para compensar la pérdida por evapotranspiración de un campo cultivado. Aun cuando los valores para evapotranspiración del cultivo (ETc) y el requerimiento de agua del cultivo son iguales, el requerimiento de agua del cultivo hace referencia a aquella cantidad de agua por suplir y la Etc (evapotranspiración del cultivo) se refiere a la cantidad de agua perdida por evapotranspiración.  </br> </br> Generalmente, el requerimiento de agua de riego hace referencia a la diferencia existente entre el requerimiento del cultivo y la precipitación efectiva. El requerimiento de agua de riego también incluye agua adicional, para el lavado de sales y para la compensación por la no uniformidad de la aplicación del agua.',
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
