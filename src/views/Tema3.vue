<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación del sistema silvopastoril 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10          
        .row 
          .bloque-texto-g.color-primario.p-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/3/1.png')})`}"
            )
            .bloque-texto-g__texto.p-4.my-3
              p.pt-1.pb-3(data-aos="fade-up") La producción agropecuaria necesita de una evaluación constante con el objetivo de mejorar las situaciones o procesos en los que se presentan novedades o falencias; los seguimientos periódicos a las plantas, animales e infraestructura brindarán los datos en tiempo real para hacer las correcciones necesarias, en caso de encontrar anomalías.
                   

    Separador.mt-5        

    .cont_3_1.pt-1(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_3_1 3.1.	Parámetros técnicos para la evaluación del sistema silvopastoril 

    p Se deben establecer los pasos a seguir para una evaluación técnica e integral a los sistemas silvopastoriles, esta evaluación debe estar dirigida por personas con conocimientos amplios sobre especies vegetales y, por supuesto, de los animales.     

    .row.align-items-center.my-5.col-lg-10.m-auto  
        .cajon.color-primario.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#E3E7DF;")
          p.mb-0.py-3(data-aos="fade-up") Como primera medida se deben evaluar las cifras, previo a las visitas en campo, para así darse una idea frente al balance general del sistema.  

    p.mb-5 Para el proceso de evaluación del sistema silvopastoril, deben tenerse en cuenta algunos aspectos que se detallan a continuación:
    

    .row(style="padding-right: 200px !important")
      .col-12
        LineaTiempoE.color-acento-contenido.mb-5
          .row(titulo="1")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/3/2.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Evaluación de los tiempos rotacionales
              p En esta actividad se deben observar las características físicas de los porteros de rotación, así como los tiempos destinados a las pasteadoras, de esta manera se tabulan los consumos de los pastos y forrajes para verificar si los animales están consumiendo por encima o por debajo de su programa alimenticio.
          .row(titulo="2")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/3/3.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Identificación de especies
              p Verificar si en los potreros se han establecido plantas invasoras que estén interviniendo con las plantas establecidas inicialmente, para realizar su evacuación oportuna.
          .row(titulo="3")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/3/4.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Salud de los animales
              p En los chequeos periódicos a los animales se pueden establecer posibles quebrantos de salud que pueden afectar a los demás individuos del sistema.
          .row(titulo="4")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/3/5.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Etapas de producción
              p En la evaluación de los tiempos, se verifican los estados de cada especie de acuerdo a los tiempos teóricos planificados. Esta comparación permitirá verificar si las acciones realizadas van por buen camino o, de lo contrario, necesitan acciones correctivas para garantizar la producción.
          .row(titulo="5")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/3/6.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Alimentos y nutrientes
              p Establecer si la demanda de nutrientes es apta para cada etapa de proceso.
          .row(titulo="6")
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/3/7.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-4.mb-lg-0
              h4 Periodos de crecimiento
              p Evaluar si se cumplen los tiempos de crecimiento para garantizar los compromisos que se tengan con los clientes.
    Separador.mt-5        

    .cont_3_2.pt-1(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_3_2 3.2.	Plan de contingencia 

    p Para establecer un plan de contingencia y de gestión, se identificarán y calificarán los riesgos. Estas reservas se incluirán en la estimación de costos y en el presupuesto.  Mes a mes, se deberá llevar una revisión y actualización de los gastos y del presupuesto.
    p.pb-5 Se deberán establecer los objetivos del plan, los cuales deben estar direccionados a:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/3/8.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#E3E7DF")
            .text-black.p-4
              p.text-center Identificar, valorar y clasificar los riesgos potenciales, ya sean antrópicos o naturales.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/3/9.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#E3E7DF")
            .p-4
              p.text-center Tales riesgos potenciales pueden presentarse en las áreas de trabajo y puedan, incluso, catalogarse como emergencias.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/3/10.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#E3E7DF")
            .p-4
              p.text-center Es importante establecer acciones de educación y organización con el fin de convertir en hábito las medidas que deben adoptarse, para así proceder en forma segura en el momento de una posible evacuación.
    
    .row.align-items-center.my-5.col-lg-10.m-auto  
      .col-sm-12.col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-1
          p.mb-0 #[b Tabla 5.] 
            i Eventos que generan contingencias  

    .tabla-a.color-acento-botones.my-5.col-lg-10.m-auto  
      table
        thead
          tr
            th Origen
            th Situación
            
        tbody
          tr
            td Eventos naturales o ajenos al sistema   
            td Inundaciones <br> <br>  Vendavales <br> <br>  Tornados <br> <br>  Movimientos sísmicos <br> <br> 
            
          tr
            td Antrópicos   
            td Derrame de agroquímicos <br> <br> Incendios y explosiones <br> <br> Accidentes laborales <br> <br> Orden público <br> <br>  
            
    p.text-center Se deberán establecer los objetivos del plan, los cuales deben estar direccionados a:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Impactos a prevenir y mitigar")
        .col-md-6.mb-4.mb-md-0
          p El administrador y/o gerente, en el diseño del Plan de Contingencia, deberá planificar las actividades de prevención y preparación de la mano de obra, con el objeto de mitigar los efectos producidos por un accidente o una emergencia que comprometa la integridad física del personal, las comunidades vecinas, la finca y el ecosistema conjunto al sistema silvopastoril. 
      
        .col-md-6
          .row.align-items-center.my-5.col-lg-10.m-auto  
            .col-sm-12.col-lg-12
              .titulo-sexto.mb-0.color-acento-contenido.mb-1
                p.mb-0 #[b Figura 1.] 
                  i Impactos a prevenir y mitigar 
          figure
            img(src='@/assets/curso/temas/3/11.png', alt='Figura 5 Impactos a prevenir y mitigar, en la figura se observan como impactos a prevenir y mitigar la contaminación ambiental, accidentes de trabajo, pérdidas humanas y materiales.' )
      
      .row(titulo="Riesgos a prevenir y mitigar")
        .col-md-6.mb-4.mb-md-0
          p Luego de identificar la naturaleza de las amenazas del proyecto, los riesgos y la vulnerabilidad a los que se encuentra el personal encargado de la producción, se trazará la organización de los recursos humanos y técnicos necesarios para la respuesta oportuna y la disminución de las consecuencias de los eventos de emergencia que se puedan generar durante la ejecución del proyecto.
      
        .col-md-6
          .row.align-items-center.my-5.col-lg-10.m-auto  
            .col-sm-12.col-lg-12
              .titulo-sexto.mb-0.color-acento-contenido.mb-1
                p.mb-0 #[b Figura 2.] 
                  i Riesgos a prevenir y mitigar 
          figure
            img(src='@/assets/curso/temas/3/12.png', alt='En la figura se representa como riesgos los sismos que afectan muros, cubiertas, personal, igualmente como riesgo están las inundaciones que afectan cultivos, animales, instalaciones y personal, para finalizar se incluyen los riesgos de contaminación por derrames de agrofertilizantes, como también inadecuado manejo de residuos sólidos y RESPEL.' )
      
      .row(titulo="Comisiones del comité de emergencias")
        .col-md-6.mb-4.mb-md-0
          p Se debe establecer el comité de emergencias, el cual debe estar liderado por el gerente o administrador del sistema silvopastoril. Este comité será el que tomará las decisiones en caso de emergencia. Este comité lo integraran dos comisiones: comisión técnica y comisión operativa.
      
        .col-md-6
          .row.align-items-center.my-5.col-lg-10.m-auto  
              .col-sm-12.col-lg-12
                .titulo-sexto.mb-0.color-acento-contenido.mb-1
                  p.mb-0 #[b Figura 3.] 
                    i Riesgos a prevenir y mitigar 
          figure
            img(src='@/assets/curso/temas/3/13.png', alt='En la figura se representa los comités de emergencia como el de técnica, educativa y de comunicaciones, igualmente la comisión operativa.')

      .row(titulo="Procedimiento general para el control de emergencias ")
        .col-md-6.mb-4.mb-md-0
          p Es pertinente elaborar un procedimiento para emergencias el cual siempre que ocurra un evento se deberá seguir. Este procedimiento deberá ser revisado y ajustado periódicamente por el gerente del sistema.
      
        .col-md-6
          .row.align-items-center.my-5.col-lg-10.m-auto  
                .col-sm-12.col-lg-12
                  .titulo-sexto.mb-0.color-acento-contenido.mb-1
                    p.mb-0 #[b Figura 4.] 
                      i Procedimiento general para el control de emergencias
          figure
            img(src='@/assets/curso/temas/3/14.png', alt='En la figura se representa que el procedimiento inicia con la notificación de emergencia, sigue el encargado de las emergencias, se llega a una decisión: ¿manejo interno?, si la respuesta es si entonces se activa la brigada de emergencias, sigue el plan de evacuación y finaliza con el mantenimiento y vigilancia, si la respuesta es no entonces sigue notificar a grupos externos.')
    Separador.mt-5        

    .cont_3_3.pt-1(style="position:relative;")
      .titulo-segundo.color-primario(style="position:relative")
        h2#t_3_3 3.3.	Plan de mejoramiento  
              
    .row 
     
      .col-lg-8.order-2.order-lg-1
        p.mb-5 Los diseños silvopastoriles elaborados para una finca en particular dependen de sus condiciones particulares, son estas mismas condiciones que, durante los procesos de producción, pueden variar levemente o significativamente, afectando la planificación del sistema silvopastoril. Es por esta razón que se debe establecer un plan de mejoramiento en caso de que las metas propuestas, desde la planificación del sistema, no vayan por el mejor camino.
        p.mb-5 En cuanto a los planes de mejoramiento, es muy importante tener en cuenta los siguientes aspectos:     
        TabsA.color-acento-botones.mb-5
          .tarjeta.clr-paleYellow.p-4(titulo="Nuevas características")
            h4 Nuevas características
            p Desde la parte directiva se evaluarán las nuevas características presentadas durante la operación que afecten la programación u otros procesos relacionados con el sistema y propondrán un plan de mejoramiento.

          .tarjeta.clr-paleYellow.p-4(titulo="Soluciones efectivas")
            h4 Soluciones efectivas
            p El plan de mejoramiento pretenderá dar soluciones efectivas a las problemáticas encontradas para mantener el equilibrio en las líneas productivas, para no entrar en sobrecostos y/o posibles pérdidas para el agricultor – ganadero. 

          .tarjeta.clr-paleYellow.p-4(titulo="Correcciones al sistema de producción")
            h4 Correcciones al sistema de producción
            p Otro uso de los planes de mejoramiento es, precisamente, realizar correcciones en los sistemas de producción. En muchos casos, los planes de mejoramiento se diseñan para el crecimiento del negocio agroganadero propendiendo por el crecimiento en la producción, generando más empleo y garantizando estándares de calidad.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/3/15.png", alt="alt", style="width:450px;").m-auto
    


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
