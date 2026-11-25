
export const areasTegra = () => {

  const areas = [
    {
      nombre: "Comercial",
      descripcion: "Analizamos el mercado, la demanda y el potencial comercial de cada oportunidad inmobiliaria."
    },
    {
      nombre: "Arquitectónica",
      descripcion: "Exploramos las posibilidades de uso, diseño y aprovechamiento de los espacios."
    },
    {
      nombre: "Técnica",
      descripcion: "Evaluamos las condiciones físicas y la viabilidad técnica de los proyectos inmobiliarios."
    },
    {
      nombre: "Legal",
      descripcion: "Consideramos los aspectos jurídicos y normativos relevantes para cada operación o proyecto."
    }
  ];

  return `

    <section class="areas-tegra" id="areas">

      <div class="areas-tegra__contenedor">

        <div class="areas-tegra__encabezado">

          <h2>
            Una visión integral
            <br>
            de cada oportunidad.
          </h2>

          <p>
            Cuatro especialidades que nos permiten
            analizar cada proyecto desde distintas
            perspectivas.
          </p>

        </div>

        <div class="areas-tegra__lista">

          ${areas.map(area => `

            <details class="areas-tegra__item" name="especialidad">

              <summary class="areas-tegra__pregunta">

                <span class="areas-tegra__nombre">
                  ${area.nombre}
                </span>

                <span
                  class="areas-tegra__simbolo"
                  aria-hidden="true"
                ></span>

              </summary>

              <div class="areas-tegra__respuesta">

                <p>${area.descripcion}</p>

              </div>

            </details>

          `).join('')}

        </div>

      </div>

    </section>

  `;
};
