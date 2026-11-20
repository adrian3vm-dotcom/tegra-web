import fondoNosotros from '../assets/nosotros/nosotros.png'

export const nosotros = () => {
  return `

    <section class="nosotros" id="nosotros">

      <img
        src="${fondoNosotros}"
        alt="TEGRA"
        class="nosotros__fondo"
      >

      <div class="nosotros__overlay">

        <div class="nosotros__contenido">

          <h2>
            Más que una inmobiliaria.
          </h2>

          <p>
            TEGRA nace para ayudar a las
            personas a entender qué hacer 
            con una oportunidad inmobiliaria 
            antes de tomar una decisión.
          </p>

        </div>

      </div>

    </section>

  `
}