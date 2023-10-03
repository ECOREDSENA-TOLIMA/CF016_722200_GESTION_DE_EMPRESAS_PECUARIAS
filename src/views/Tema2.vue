<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de información en el sistema silvopastoril 



    .row.align-items-center.my-3.col-lg-12.m-0        
      .col-auto
        figure
          img(src='@/assets/curso/temas/introduccion/introduccion.svg').m-auto(data-aos="fade-right")
      .col
        p.mb-2.py-1(style="overflow-x: hidden !important") Las fincas ganaderas con un sistema silvopastoril intensivo y de gran escala, manejan mucha información sobre sus actividades productivas, por esta razón es importante la introducción de herramientas ofimáticas que faciliten y aseguren el control, desarrollo y proyección de estas actividades.
        p.mb-2.py-1(style="overflow-x: hidden !important") Ahonde en las formas de manejo de información en una finca agropecuaria, bajo el acompañamiento de herramientas ofimáticas. Tome nota de los aspectos más relevantes en su libreta personal de apuntes:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com//embed/y3OtPIcvsUM" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    

</template>

<script>
export default {
  name: 'Tema2',
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
