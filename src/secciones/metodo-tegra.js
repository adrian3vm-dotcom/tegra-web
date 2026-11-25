
import nombreTegra from '../assets/logos/nombretegra.png'

export const metodoTegra = () => {
  return `

    <section class="metodo-tegra" id="metodo">

      <div class="metodo-tegra__contenedor">

        <div class="metodo-tegra__izquierda">

          <h2 class="metodo-tegra__titulo">
            <span>El método</span>
            <img
              src="${nombreTegra}"
              alt="TEGRA"
              class="metodo-tegra__nombre"
            >
          </h2>

          <p>
            Cada decisión tiene una estrategia.
          </p>

          <div class="metodo-tegra__pasos">

            <div class="metodo-tegra__paso">
              <span>T</span>
              <p>Trazamos tu objetivo</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>E</span>
              <p>Evaluamos las oportunidades</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>G</span>
              <p>Gestionamos las alternativas</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>R</span>
              <p>Refinamos la estrategia</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>A</span>
              <p>Aterrizamos la decisión</p>
            </div>

          </div>

        </div>

        <div class="metodo-tegra__imagen"></div>

      </div>

    </section>

  `
}
