import './estilos/global.css'

import './estilos/encabezado.css'
import './estilos/hero.css'
import './estilos/separador01.css'
import './estilos/metodo-tegra.css'
import './estilos/separador02.css'
import './estilos/que-buscas.css'
import './estilos/separador03.css'
import './estilos/nosotros.css'
import './estilos/pie-pagina.css'

import { encabezado } from './secciones/encabezado'
import { hero } from './secciones/hero'
import { separador01 } from './secciones/separador01'
import { metodoTegra } from './secciones/metodo-tegra'
import { separador02 } from './secciones/separador02'
import { queBuscas } from './secciones/que-buscas'
import { separador03 } from './secciones/separador03'
import { nosotros } from './secciones/nosotros'
import { piePagina } from './secciones/pie-pagina'

import logoNegro from './assets/logos/tegra-negro.png'
import logoBlanco from './assets/logos/tegra-blanco.png'

document.querySelector('#app').innerHTML = `
  ${encabezado()}
  ${hero()}
  ${separador01()}
  ${metodoTegra()}
  ${separador02()}
  ${queBuscas()}
  ${separador03()}
  ${nosotros()}
  ${piePagina()}
`

/* =========================================
   HEADER BLANCO EN MÉTODO TEGRA
========================================= */

const header = document.querySelector('.encabezado')
const metodo = document.querySelector('#metodo')
const separador03Section = document.querySelector('#separador03')
const logo = document.querySelector('.encabezado__logo img')

let logoActual = 'negro'

function cambiarLogo(nuevoLogo, tipo) {

  if (logoActual === tipo) return

  logoActual = tipo

  logo.style.opacity = '0'

  setTimeout(() => {
    logo.src = nuevoLogo
    logo.style.opacity = '1'
  }, 180)

}

function actualizarHeader() {

  const rectMetodo = metodo.getBoundingClientRect()

  const dentroDeMetodo =
    rectMetodo.top <= 50 &&
    rectMetodo.bottom >= 50

  let dentroDeSeparador03 = false

  if (separador03Section) {

    const rectSeparador03 =
      separador03Section.getBoundingClientRect()

    dentroDeSeparador03 =
      rectSeparador03.top <= 50 &&
      rectSeparador03.bottom >= 50

  }

  if (
    dentroDeMetodo ||
    dentroDeSeparador03
  ) {

    header.classList.add('encabezado--blanco')

    cambiarLogo(
      logoBlanco,
      'blanco'
    )

  } else {

    header.classList.remove('encabezado--blanco')

    cambiarLogo(
      logoNegro,
      'negro'
    )

  }

}

window.addEventListener('scroll', actualizarHeader)

actualizarHeader()

/* =========================================
   MENÚ MÓVIL
========================================= */

const hamburguesa =
  document.getElementById('hamburguesa')

const menu =
  document.getElementById('menu')

if (hamburguesa && menu) {

  hamburguesa.addEventListener('click', () => {

    menu.classList.toggle('activo')

    hamburguesa.textContent =
      menu.classList.contains('activo')
        ? '✕'
        : '☰'

  })

  menu.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      menu.classList.remove('activo')

      hamburguesa.textContent = '☰'

    })

  })

}

/* =========================================
   DROPDOWNS
========================================= */

document.addEventListener('click', (e) => {

  const header = e.target.closest('.dropdown__header')

  if(header){

    const dropdown = header.parentElement

    document
      .querySelectorAll('.dropdown')
      .forEach(item => {

        if(item !== dropdown){
          item.classList.remove('activo')
        }

      })

    dropdown.classList.toggle('activo')
  }

  const item = e.target.closest('.dropdown__item')

  if(item){

    const dropdown = item.closest('.dropdown')

    dropdown.querySelector('.dropdown__header').innerHTML = `
      ${item.textContent}
      <span>+</span>
    `

    dropdown.classList.remove('activo')
  }

})