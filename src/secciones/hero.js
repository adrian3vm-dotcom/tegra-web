
import heroImagen from "../assets/hero/hero.png";

export const hero = () => {
  return `

    <section
      class="hero"
      id="inicio"
      style="background-image: url('${heroImagen}')"
    >

      <div class="hero__contenido">

        <h1>
          Encontramos oportunidades.
          <br>
          Creamos estrategia.
        </h1>

        <div class="hero__linea"></div>

        <p class="hero__descripcion">
          Identificamos y evaluamos oportunidades
          inmobiliarias para ayudarte a comprar,
          invertir o aprovechar mejor tu patrimonio.
        </p>

      </div>

    </section>

  `;
};
