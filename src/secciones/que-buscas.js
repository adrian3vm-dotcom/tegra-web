
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

          <!-- OBJETIVO -->

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

          <!-- UBICACION -->

          <div class="campo">

            <label for="ubicacion-tegra">
              ¿En qué ubicación?
            </label>

            <input
              id="ubicacion-tegra"
              name="ubicacion"
              type="text"
              placeholder="Ej. Hermosillo, Sonora"
              maxlength="150"
              required
            >

          </div>

          <!-- DESCRIPCION -->

          <div class="campo">

            <label for="mensaje-tegra">
              Cuéntanos qué necesitas
            </label>

            <textarea
              id="mensaje-tegra"
              name="mensaje"
              rows="3"
              maxlength="2000"
              placeholder="Describe brevemente qué buscas..."
              required
            ></textarea>

          </div>

          <!-- NOMBRE Y TELEFONO -->

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
                maxlength="100"
                placeholder="Nombre completo"
                required
              >

            </div>

            <div class="campo">

              <label for="telefono-tegra">
                Teléfono / WhatsApp
              </label>

              <input
                id="telefono-tegra"
                name="telefono"
                type="tel"
                autocomplete="tel"
                maxlength="25"
                placeholder="Número de contacto"
              >

            </div>

          </div>

          <!-- CORREO ELECTRONICO -->

          <div class="campo">

            <label for="email-tegra">
              Correo electrónico
            </label>

            <input
              id="email-tegra"
              name="email"
              type="email"
              autocomplete="email"
              maxlength="254"
              placeholder="tu@correo.com"
              required
            >

          </div>

          <!-- ENVIO -->

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
            role="status"
          ></p>

        </form>

      </div>

    </section>

  `
}
