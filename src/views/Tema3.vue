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
