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
            Cuéntanos tu objetivo y te ayudaremos a
            encontrar la mejor oportunidad.
          </p>

        </div>

        <form class="que-buscas__formulario">

          <div class="dropdown">

            <label>
              ¿Cuál es tu objetivo principal?
            </label>

            <div class="dropdown__header">
              Invertir
              <span>+</span>
            </div>

            <div class="dropdown__menu">

              <div class="dropdown__item">Invertir</div>
              <div class="dropdown__item">Habitar</div>
              <div class="dropdown__item">Desarrollar</div>

            </div>

          </div>

          <div class="campo">

            <label>
              ¿En qué ubicación?
            </label>

            <input
              type="text"
              placeholder="Ej. Hermosillo, Sonora"
            >

          </div>

          <div class="dropdown">

            <label>
              Presupuesto aproximado
            </label>

            <div class="dropdown__header">
              $1 a $5 MDP
              <span>+</span>
            </div>

            <div class="dropdown__menu">

              <div class="dropdown__item">Menos de $1 MDP</div>
              <div class="dropdown__item">$1 a $5 MDP</div>
              <div class="dropdown__item">$5 a $10 MDP</div>
              <div class="dropdown__item">Más de $10 MDP</div>

            </div>

          </div>

          <div class="dropdown">

            <label>
              ¿Qué tipo de propiedad buscas?
            </label>

            <div class="dropdown__header">
              Terreno
              <span>+</span>
            </div>

            <div class="dropdown__menu">

              <div class="dropdown__item">Terreno</div>
              <div class="dropdown__item">Casa</div>
              <div class="dropdown__item">Departamento</div>
              <div class="dropdown__item">Comercial / Industrial</div>
              <div class="dropdown__item">Ya cuento con propiedad</div>
              <div class="dropdown__item">No estoy seguro</div>

            </div>

          </div>

          <div class="campo">

            <label>
              Cuéntanos más
            </label>

            <textarea
              rows="4"
              placeholder="Describe brevemente lo que buscas..."
            ></textarea>

          </div>

          <button
            class="que-buscas__submit"
            type="submit"
          >
            Enviar información
          </button>

        </form>

      </div>

    </section>

  `
}