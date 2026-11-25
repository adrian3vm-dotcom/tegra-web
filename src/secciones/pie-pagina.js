
import logoTegra from '../assets/logos/tegra-blanco.png'

export const piePagina = () => {
  return `

    <footer class="pie-pagina">

      <div class="pie-pagina__contenedor">

        <div class="pie-pagina__marca">

          <a
            href="#inicio"
            class="pie-pagina__logo-enlace"
            aria-label="Volver al inicio de TEGRA"
          >

            <img
              src="${logoTegra}"
              alt="TEGRA Bienes Raíces"
            >

          </a>

          <p>
            Identificamos oportunidades.<br>
            Creamos estrategia.
          </p>

        </div>

        <nav
          class="pie-pagina__enlaces"
          aria-label="Enlaces del pie de página"
        >

          <a href="#metodo">
            Método TEGRA
          </a>

          <a href="#como-podemos-ayudarte">
            ¿Cómo podemos ayudarte?
          </a>

          <a href="#nosotros">
            Nosotros
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </nav>

        <div class="pie-pagina__info">

          <span class="pie-pagina__ubicacion">
            Hermosillo, Sonora
          </span>

          <a href="mailto:admin@grupovaley.com">
            admin@grupovaley.com
          </a>

          <a
            class="pie-pagina__instagram"
            href="https://www.instagram.com/tegra.mx/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de TEGRA"
          >

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >

              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
              ></rect>

              <circle
                cx="12"
                cy="12"
                r="4"
              ></circle>

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              ></circle>

            </svg>

            <span>@tegra.mx</span>

          </a>

        </div>

      </div>

      <div class="pie-pagina__bottom">

        <span>
          © ${new Date().getFullYear()} TEGRA.
          Todos los derechos reservados.
        </span>

      </div>

    </footer>

  `
}
