import logoTegra from '../assets/logos/tegra-negro.png'

export const encabezado = () => {
  return `

    <header class="encabezado">

      <div class="encabezado__contenedor">

        <a href="#" class="encabezado__logo">
          <img src="${logoTegra}" alt="TEGRA">
        </a>

        <button
          class="encabezado__hamburguesa"
          id="hamburguesa"
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <nav class="encabezado__menu" id="menu">

          <a href="#metodo">
            Método TEGRA
          </a>

          <a href="#contacto">
            Contacto
          </a>

          <a href="#nosotros">
            Nosotros
          </a>

        </nav>

      </div>

    </header>

  `
}