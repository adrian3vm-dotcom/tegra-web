
import logoTegra from '../assets/logos/tegra-negro.png'

export const encabezado = () => {
  return `

    <header class="encabezado">

      <div class="encabezado__contenedor">

        <a
          href="#inicio"
          class="encabezado__logo"
          aria-label="Volver al inicio de TEGRA"
        >
          <img
            src="${logoTegra}"
            alt="TEGRA Bienes Raíces"
          >
        </a>

        <button
          class="encabezado__hamburguesa"
          id="hamburguesa"
          type="button"
          aria-label="Abrir menú"
          aria-controls="menu"
          aria-expanded="false"
        >
          ☰
        </button>

        <nav
          class="encabezado__menu"
          id="menu"
          aria-label="Navegación principal"
        >

          <a href="#metodo">
            Método TEGRA
          </a>

          <a href="#como-podemos-ayudarte">
            Servicios
          </a>

          <a href="#nosotros">
            Nosotros
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </nav>

      </div>

    </header>

  `
}
