import heroImagen from "../assets/hero/hero.png";

export const hero = () => {
  return `

    <section
      class="hero"
      style="background-image: url('${heroImagen}')"
    >

      <div class="hero__contenido">

        <h1>
          Encontramos oportunidades.
          <br>
          Creamos estrategia.
        </h1>

      </div>

    </section>

  `;
}