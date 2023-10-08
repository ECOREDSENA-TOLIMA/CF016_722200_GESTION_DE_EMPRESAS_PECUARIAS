<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.my-3.col-lg-12.m-0        
      .col-auto
        figure
          img(src='@/assets/curso/temas/introduccion/introduccion.svg').m-auto(data-aos="fade-right")
      .col
        p.mb-2.py-1(style="overflow-x: hidden !important") Históricamente el ser humano ha tenido, consecuentemente, la necesidad de buscar sus alimentos: esto le ha conducido a explotar sus recursos cada vez más rápidamente, complicando la renovación de los mismos de manera natural. Con el aumento de la población mundial se evidencia que suministrar alimentos a toda la población es un tema álgido y que tiene a la comunidad internacional en continuas discusiones desde hace décadas.
        p.mb-2.py-1(style="overflow-x: hidden !important") Le damos la bienvenida al estudio del componente 16 “
          b Mantenimiento y evaluación del sistema silvopastoril
          |  ”, adéntrese en los contenidos de este material formativo y tenga una experiencia satisfactoria. Para comenzar con éxito, visualice el recurso que se muestra a continuación:
           


    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com//embed/PXnK5hzeSiM" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
