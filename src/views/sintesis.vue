<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-adicional-2.mb-3
      h2 Gestión de empresas pecuarias

    p.mb-5 Se recapitula del componente formativo 
      b Mantenimiento y evaluación del sistema silvopastoril
      | , en cuanto a los temas como el manejo de los sistemas, con los requerimientos hídricos, el manejo integrado de plagas, enfermedades y malezas, como también la importancia de la poda de especies arbóreas, rotación de potreros, manejo, disposición de residuos y suplementación alimenticia, igualmente, se trató el tema sobre manejo de información en sistema silvopastoril, en el cual se resalta el “Software” Ganadero, como también las diferentes aplicaciones para manejo agropecuario, para finalizar se incluyó la mejora de procesos con la evaluación del sistema silvopastoril, en cuanto a los parámetros técnicos, la identificación del riesgo con el plan de contingencia, y el logro de metas con el plan de mejora.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="Síntesis en donde se recapítula el componente formativo Mantenimiento y evaluación del sistema silvopastoril ")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
