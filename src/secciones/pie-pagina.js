import logoTegra from '../assets/logos/tegra-negro.png'

export const piePagina = () => {
  return `

    <footer class="pie-pagina">

      <div class="pie-pagina__contenedor">

        <div class="pie-pagina__marca">

          <img
            src="${logoTegra}"
            alt="TEGRA"
          >

          <p>
            Identificamos oportunidades inmobiliarias
            con visión estratégica y enfoque patrimonial.
          </p>

        </div>

        <div class="pie-pagina__enlaces">

          <a href="#metodo">
            Método TEGRA
          </a>

          <a href="#nosotros">
            Nosotros
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </div>

        <div class="pie-pagina__info">

          <span>
            Hermosillo, Sonora
          </span>

          <a href="mailto:contacto@tegra.mx">
            contacto@tegra.mx
          </a>

        </div>

      </div>

      <div class="pie-pagina__bottom">

        © 2026 TEGRA.
        Todos los derechos reservados.

      </div>

    </footer>

  `
}