
import fondoQueBuscas from '../assets/que-buscas/que-buscas.png'

export const queBuscas = () => {
  return `

    <section class="que-buscas" id="contacto">

      <img
        class="que-buscas__fondo"
        src="${fondoQueBuscas}"
        alt=""
      >

      <div class="que-buscas__overlay"></div>

      <div class="que-buscas__contenedor">

        <div class="que-buscas__izquierda">

          <h2>
            ¿Qué estás<br>
            buscando?
          </h2>

          <p>
            Cuéntanos qué quieres lograr.
            En TEGRA comenzamos por entender
            tus objetivos para encontrar
            la estrategia adecuada.
          </p>

        </div>

        <form
          class="que-buscas__formulario"
          id="formulario-tegra"
        >

          <div class="dropdown">

            <label id="objetivo-label">
              ¿Cuál es tu objetivo?
            </label>

            <button
              type="button"
              class="dropdown__header"
              aria-labelledby="objetivo-label"
              aria-expanded="false"
            >
              Invertir
              <span aria-hidden="true">+</span>
            </button>

            <div class="dropdown__menu">

              <button type="button" class="dropdown__item">
                Comprar
              </button>

              <button type="button" class="dropdown__item">
                Invertir
              </button>

              <button type="button" class="dropdown__item">
                Desarrollar
              </button>

              <button type="button" class="dropdown__item">
                Tengo una propiedad
              </button>

            </div>

            <input
              type="hidden"
              name="objetivo"
              value="Invertir"
            >

          </div>

          <div class="campo">

            <label for="ubicacion-tegra">
              ¿En qué ubicación?
            </label>

            <input
              id="ubicacion-tegra"
              name="ubicacion"
              type="text"
              placeholder="Ej. Hermosillo, Sonora"
              required
            >

          </div>

          <div class="campo">

            <label for="mensaje-tegra">
              Cuéntanos qué necesitas
            </label>

            <textarea
              id="mensaje-tegra"
              name="mensaje"
              rows="3"
              placeholder="Describe brevemente qué buscas..."
              required
            ></textarea>

          </div>

          <div class="que-buscas__datos">

            <div class="campo">

              <label for="nombre-tegra">
                Tu nombre
              </label>

              <input
                id="nombre-tegra"
                name="nombre"
                type="text"
                autocomplete="name"
                placeholder="Nombre completo"
                required
              >

            </div>

            <div class="campo">

              <label for="contacto-tegra">
                Teléfono / Correo electrónico
              </label>

              <input
                id="contacto-tegra"
                name="contacto"
                type="text"
                placeholder="Tu número o correo"
                required
              >

            </div>

          </div>

          <button
            class="que-buscas__submit"
            type="submit"
          >
            Enviar información
          </button>

          <p
            class="que-buscas__estado"
            id="estado-formulario"
            aria-live="polite"
          ></p>

        </form>

      </div>

    </section>

  `
}
