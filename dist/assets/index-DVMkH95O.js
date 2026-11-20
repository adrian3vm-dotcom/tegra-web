(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/tegra-negro-DhaOjDKX.png`,t=()=>`

    <header class="encabezado">

      <div class="encabezado__contenedor">

        <a href="#" class="encabezado__logo">
          <img src="${e}" alt="TEGRA">
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

  `,n=`/assets/hero-DWY-TDa-.png`,r=()=>`

    <section
      class="hero"
      style="background-image: url('${n}')"
    >

      <div class="hero__contenido">

        <h1>
          Encontramos oportunidades.
          <br>
          Creamos estrategia.
        </h1>

      </div>

    </section>

  `,i=()=>`

    <section class="separador01">

      <div class="separador01__intro">

        <div class="separador01__texto">
          <span class="separador01__tag">
            NUESTRA FILOSOFÍA
          </span>

          <h2>
            Toda gran inversión comienza
            <br>
            con una buena decisión.
          </h2>

          <p>
            En TEGRA analizamos cada propiedad para ayudarte a comprar, invertir o desarrollar, construyendo una ruta clara detrás.
          </p>
        </div>

        <div class="separador01__numeros">

          <div class="separador01__item">
            <strong>360°</strong>
            <span>ASESORÍA INMOBILIARIA INTEGRAL</span>
          </div>

          <div class="separador01__item">
            <strong>4</strong>
            <span>ÁREAS DE ESPECIALIDAD</span>
          </div>

          <div class="separador01__item">
            <strong>+20</strong>
            <span>AÑOS DE RESPALDO</span>
          </div>

        </div>

      </div>

    </section>

  `,a=()=>`

    <section class="metodo-tegra" id="metodo">

      <div class="metodo-tegra__contenedor">

        <div class="metodo-tegra__izquierda">

          <h2>
            El método TEGRA.
          </h2>

          <p>
            La diferencia entre elegir y elegir bien.
          </p>

          <div class="metodo-tegra__pasos">

            <div class="metodo-tegra__paso">
              <span>T</span>
              <p>Trazamos el objetivo</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>E</span>
              <p>Evaluamos oportunidades</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>G</span>
              <p>Gestionamos alternativas</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>R</span>
              <p>Refinamos la dirección</p>
            </div>

            <div class="metodo-tegra__paso">
              <span>A</span>
              <p>Aterrizamos la estrategia</p>
            </div>

          </div>

        </div>

        <div class="metodo-tegra__imagen"></div>

      </div>

    </section>

  `;function o(){return`
        <section class="separador02">

            <div class="separador02__contenedor">

                <div class="separador02__encabezado">

                    <h2>
                        Cada proyecto comienza
                        en<br> un punto distinto.
                    </h2>

                </div>

                <div class="separador02__grid">

                    <div class="separador02__item">

                        <h3>
                            ¿Quieres comprar?
                        </h3>

                        <p>
                           Encontramos propiedades alineadas con tus objetivos, con el respaldo de especialistas que te ayudan a evaluar su potencial y tomar decisiones informadas.
                        </p>

                    </div>

                    <div class="separador02__item">

                        <h3>
                            ¿Quieres invertir?
                        </h3>

                        <p>
                            Nuestro equipo analiza oportunidades desde una perspectiva comercial, técnica y patrimonial para identificar alternativas con potencial de crecimiento.
                        </p>

                    </div>

                    <div class="separador02__item">

                        <h3>
                            ¿Quieres desarrollar?
                        </h3>

                        <p>
                            Nuestros arquitectos e ingenieros te asesoran para evaluar terrenos, explorar posibilidades de diseño y analizar la viabilidad de tu proyecto.
                        </p>

                    </div>

                    <div class="separador02__item">

                        <h3>
                            ¿Ya cuentas con una propiedad?
                        </h3>

                        <p>
                            Te ayudamos a descubrir su potencial mediante asesoría arquitectónica, evaluación técnica y estrategias de venta, inversión o desarrollo.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    `}var s=`/assets/que-buscas-CMRxHweQ.png`,c=()=>`

    <section class="que-buscas" id="contacto">

      <img
        class="que-buscas__fondo"
        src="${s}"
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

  `,l=()=>`

    <section
      class="separador03"
      id="separador03"
    >

      <div class="separador03__contenedor">

        <div class="separador03__texto">

          <h2>
            Más que asesoría, somos tu 
            socio estratégico en bienes raíces.
          </h2>

          <span></span>

        </div>

        <div class="separador03__logo">

          <img
            src="/favicon3.png"
            alt="TEGRA"
          >

        </div>

      </div>

    </section>

  `,u=`/assets/nosotros-vHXnl-7Z.png`,d=()=>`

    <section class="nosotros" id="nosotros">

      <img
        src="${u}"
        alt="TEGRA"
        class="nosotros__fondo"
      >

      <div class="nosotros__overlay">

        <div class="nosotros__contenido">

          <h2>
            Más que una inmobiliaria.
          </h2>

          <p>
            TEGRA nace para ayudar a las
            personas a entender qué hacer 
            con una oportunidad inmobiliaria 
            antes de tomar una decisión.
          </p>

        </div>

      </div>

    </section>

  `,f=()=>`

    <footer class="pie-pagina">

      <div class="pie-pagina__contenedor">

        <div class="pie-pagina__marca">

          <img
            src="${e}"
            alt="TEGRA"
          >

          <p>
            Identificamos oportunidades inmobiliarias
            con visión estratégica y enfoque patrimonial.
          </p>

        </div>

        <div class="pie-pagina__enlaces">

          <a href="#metodo">
            Método TEGRA
          </a>

          <a href="#nosotros">
            Nosotros
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </div>

        <div class="pie-pagina__info">

          <span>
            Hermosillo, Sonora
          </span>

          <a href="mailto:contacto@tegra.mx">
            contacto@tegra.mx
          </a>

        </div>

      </div>

      <div class="pie-pagina__bottom">

        © 2026 TEGRA.
        Todos los derechos reservados.

      </div>

    </footer>

  `,p=`/assets/tegra-blanco-C_s8XMNA.png`;document.querySelector(`#app`).innerHTML=`
  ${t()}
  ${r()}
  ${i()}
  ${a()}
  ${o()}
  ${c()}
  ${l()}
  ${d()}
  ${f()}
`;var m=document.querySelector(`.encabezado`),h=document.querySelector(`#metodo`),g=document.querySelector(`#separador03`),_=document.querySelector(`.encabezado__logo img`),v=`negro`;function y(e,t){v!==t&&(v=t,_.style.opacity=`0`,setTimeout(()=>{_.src=e,_.style.opacity=`1`},180))}function b(){let t=h.getBoundingClientRect(),n=t.top<=50&&t.bottom>=50,r=!1;if(g){let e=g.getBoundingClientRect();r=e.top<=50&&e.bottom>=50}n||r?(m.classList.add(`encabezado--blanco`),y(p,`blanco`)):(m.classList.remove(`encabezado--blanco`),y(e,`negro`))}window.addEventListener(`scroll`,b),b();var x=document.getElementById(`hamburguesa`),S=document.getElementById(`menu`);x&&S&&(x.addEventListener(`click`,()=>{S.classList.toggle(`activo`),x.textContent=S.classList.contains(`activo`)?`✕`:`☰`}),S.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{S.classList.remove(`activo`),x.textContent=`☰`})})),document.addEventListener(`click`,e=>{let t=e.target.closest(`.dropdown__header`);if(t){let e=t.parentElement;document.querySelectorAll(`.dropdown`).forEach(t=>{t!==e&&t.classList.remove(`activo`)}),e.classList.toggle(`activo`)}let n=e.target.closest(`.dropdown__item`);if(n){let e=n.closest(`.dropdown`);e.querySelector(`.dropdown__header`).innerHTML=`
      ${n.textContent}
      <span>+</span>
    `,e.classList.remove(`activo`)}});