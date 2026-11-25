
import nombreTegra from '../assets/logos/nombretegra.png'

export const portafolioInstitucional = () => {
  return `

    <section
      class="portafolio-institucional"
      id="portafolio"
    >

      <div class="portafolio-institucional__contenedor">

        <div
          class="portafolio-institucional__documento"
          aria-hidden="true"
        >

          <div class="portafolio-institucional__portada">

            <img
              src="/favicon3.png"
              alt=""
              class="portafolio-institucional__marca"
            >

            <div class="portafolio-institucional__portada-texto">
              <span>PORTAFOLIO</span>
              <span>INSTITUCIONAL</span>
            </div>

          </div>

        </div>

        <div class="portafolio-institucional__contenido">

          <h2 class="portafolio-institucional__titulo">

            <span class="portafolio-institucional__titulo-linea">

              <span>Conoce</span>

              <img
                src="${nombreTegra}"
                alt="TEGRA"
                class="portafolio-institucional__nombre"
              >

            </span>

            <span class="portafolio-institucional__titulo-segunda">
              más de cerca.
            </span>

          </h2>

          <p>
            Descubre nuestra visión, especialidades
            y forma de trabajar.
          </p>

          <a
            class="portafolio-institucional__boton"
            href="/portafolio-tegra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver portafolio institucional de TEGRA"
          >

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <path d="M14 2v6h6"></path>
              <path d="M8 13h8"></path>
              <path d="M8 17h8"></path>
            </svg>

            <span>Ver portafolio institucional</span>

          </a>

        </div>

      </div>

    </section>

  `;
};
