
/* =========================================
   EMAILJS
========================================= */

import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_ll3aahc'

const EMAILJS_TEMPLATE_ID = 'template_z3a2crc'

const EMAILJS_PUBLIC_KEY = 'ISyZGkGWgMwXHNSBy'

/* =========================================
   ESTILOS
========================================= */

import './estilos/global.css'

import './estilos/encabezado.css'
import './estilos/hero.css'
import './estilos/separador01.css'
import './estilos/metodo-tegra.css'
import './estilos/separador02.css'
import './estilos/areas-tegra.css'
import './estilos/separador03.css'
import './estilos/que-buscas.css'
import './estilos/portafolio-institucional.css'
import './estilos/nosotros.css'
import './estilos/pie-pagina.css'

/* =========================================
   SECCIONES
========================================= */

import { encabezado } from './secciones/encabezado'
import { hero } from './secciones/hero'
import { separador01 } from './secciones/separador01'
import { metodoTegra } from './secciones/metodo-tegra'
import { separador02 } from './secciones/separador02'
import { areasTegra } from './secciones/areas-tegra'
import { separador03 } from './secciones/separador03'
import { queBuscas } from './secciones/que-buscas'
import { portafolioInstitucional } from './secciones/portafolio-institucional'
import { nosotros } from './secciones/nosotros'
import { piePagina } from './secciones/pie-pagina'

/* =========================================
   LOGOTIPOS
========================================= */

import logoNegro from './assets/logos/tegra-negro.png'
import logoBlanco from './assets/logos/tegra-blanco.png'

/* =========================================
   ESTRUCTURA DE LA PAGINA
========================================= */

document.querySelector('#app').innerHTML = `

  ${encabezado()}

  ${hero()}

  ${separador01()}

  ${metodoTegra()}

  ${separador02()}

  ${areasTegra()}

  ${separador03()}

  ${queBuscas()}

  ${portafolioInstitucional()}

  ${nosotros()}

  ${piePagina()}

`

/* =========================================
   HEADER Y CAMBIO DE LOGOTIPO
========================================= */

const header = document.querySelector('.encabezado')
const metodo = document.querySelector('#metodo')
const separador03Section = document.querySelector('#separador03')
const logo = document.querySelector('.encabezado__logo img')

let logoActual = 'negro'
let cambioLogoTimeout = null

function cambiarLogo(nuevoLogo, tipo) {

  if (!logo || logoActual === tipo) return

  logoActual = tipo

  if (cambioLogoTimeout) {
    clearTimeout(cambioLogoTimeout)
  }

  logo.style.opacity = '0'

  cambioLogoTimeout = setTimeout(() => {

    logo.src = nuevoLogo
    logo.style.opacity = '1'

    cambioLogoTimeout = null

  }, 180)

}

function estaEnSeccion(seccion) {

  if (!seccion) return false

  const rect = seccion.getBoundingClientRect()

  return (
    rect.top <= 50 &&
    rect.bottom >= 50
  )

}

function actualizarHeader() {

  if (!header || !logo) return

  const dentroDeMetodo = estaEnSeccion(metodo)

  const dentroDeSeparador03 =
    estaEnSeccion(separador03Section)

  if (dentroDeMetodo || dentroDeSeparador03) {

    header.classList.add('encabezado--blanco')

    cambiarLogo(logoBlanco, 'blanco')

  } else {

    header.classList.remove('encabezado--blanco')

    cambiarLogo(logoNegro, 'negro')

  }

}

window.addEventListener(
  'scroll',
  actualizarHeader,
  { passive: true }
)

actualizarHeader()

/* =========================================
   MENU MOVIL
========================================= */

const hamburguesa =
  document.getElementById('hamburguesa')

const menu =
  document.getElementById('menu')

if (hamburguesa && menu) {

  hamburguesa.setAttribute('aria-expanded', 'false')

  hamburguesa.addEventListener('click', () => {

    menu.classList.toggle('activo')

    const menuAbierto =
      menu.classList.contains('activo')

    hamburguesa.textContent =
      menuAbierto ? '✕' : '☰'

    hamburguesa.setAttribute(
      'aria-expanded',
      String(menuAbierto)
    )

  })

  menu.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      menu.classList.remove('activo')

      hamburguesa.textContent = '☰'

      hamburguesa.setAttribute(
        'aria-expanded',
        'false'
      )

    })

  })

}

/* =========================================
   DROPDOWNS DEL FORMULARIO
========================================= */

document.addEventListener('click', (e) => {

  const opcion = e.target.closest('.dropdown__item')

  if (opcion) {

    const dropdown = opcion.closest('.dropdown')

    const encabezadoDropdown =
      dropdown.querySelector('.dropdown__header')

    const campoOculto =
      dropdown.querySelector('input[type="hidden"]')

    const valor = opcion.textContent.trim()

    encabezadoDropdown.textContent = valor

    const simbolo = document.createElement('span')

    simbolo.textContent = '+'
    simbolo.setAttribute('aria-hidden', 'true')

    encabezadoDropdown.appendChild(simbolo)

    if (campoOculto) {
      campoOculto.value = valor
    }

    dropdown.classList.remove('activo')

    encabezadoDropdown.setAttribute(
      'aria-expanded',
      'false'
    )

    return
  }

  const encabezadoDropdown =
    e.target.closest('.dropdown__header')

  if (encabezadoDropdown) {

    const dropdown =
      encabezadoDropdown.closest('.dropdown')

    const abrir =
      !dropdown.classList.contains('activo')

    document
      .querySelectorAll('.dropdown')
      .forEach(item => {

        item.classList.remove('activo')

        const boton =
          item.querySelector('.dropdown__header')

        if (boton) {
          boton.setAttribute('aria-expanded', 'false')
        }

      })

    if (abrir) {

      dropdown.classList.add('activo')

      encabezadoDropdown.setAttribute(
        'aria-expanded',
        'true'
      )

    }

    return
  }

  if (!e.target.closest('.dropdown')) {

    document
      .querySelectorAll('.dropdown')
      .forEach(dropdown => {

        dropdown.classList.remove('activo')

        const boton =
          dropdown.querySelector('.dropdown__header')

        if (boton) {
          boton.setAttribute('aria-expanded', 'false')
        }

      })

  }

})

/* =========================================
   CERRAR DROPDOWNS CON ESCAPE
========================================= */

document.addEventListener('keydown', (e) => {

  if (e.key !== 'Escape') return

  document
    .querySelectorAll('.dropdown')
    .forEach(dropdown => {

      dropdown.classList.remove('activo')

      const boton =
        dropdown.querySelector('.dropdown__header')

      if (boton) {
        boton.setAttribute('aria-expanded', 'false')
      }

    })

})

/* =========================================
   ENVIO DEL FORMULARIO CON EMAILJS
========================================= */

const formularioTegra =
  document.getElementById('formulario-tegra')

if (formularioTegra) {

  const botonEnviar =
    formularioTegra.querySelector('.que-buscas__submit')

  const estado =
    document.getElementById('estado-formulario')

  let enviando = false

  formularioTegra.addEventListener('submit', async (e) => {

    e.preventDefault()

    if (enviando) return

    /* VERIFICAR CONFIGURACION */

    if (
      EMAILJS_TEMPLATE_ID === 'TU_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'TU_PUBLIC_KEY'
    ) {

      if (estado) {
        estado.textContent =
          'El formulario aún está en configuración. Intenta más tarde.'
      }

      return
    }

    /* VALIDACION DEL FORMULARIO */

    if (!formularioTegra.reportValidity()) return

    const datos = new FormData(formularioTegra)

    const parametros = {
      objetivo: String(datos.get('objetivo') || '').trim(),
      ubicacion: String(datos.get('ubicacion') || '').trim(),
      mensaje: String(datos.get('mensaje') || '').trim(),
      nombre: String(datos.get('nombre') || '').trim(),
      telefono: String(datos.get('telefono') || '').trim(),
      email: String(datos.get('email') || '').trim()
    }

    if (
      !parametros.objetivo ||
      !parametros.ubicacion ||
      !parametros.mensaje ||
      !parametros.nombre ||
      !parametros.email
    ) {

      if (estado) {
        estado.textContent =
          'Completa los campos obligatorios.'
      }

      return
    }

    /* BLOQUEAR ENVIOS DUPLICADOS */

    enviando = true

    botonEnviar.disabled = true
    botonEnviar.textContent = 'Enviando...'

    if (estado) {
      estado.textContent = ''
    }

    try {

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        parametros,
        {
          publicKey: EMAILJS_PUBLIC_KEY
        }
      )

      /* CONFIRMACION EN PANTALLA */

      if (estado) {

        estado.textContent =
          'Hemos recibido tu solicitud. Nos pondremos en contacto contigo a la brevedad.'

      }

      formularioTegra.reset()

      /* RESTABLECER EL OBJETIVO */

      const dropdown =
        formularioTegra.querySelector('.dropdown')

      if (dropdown) {

        const encabezado =
          dropdown.querySelector('.dropdown__header')

        const campoOculto =
          dropdown.querySelector('input[name="objetivo"]')

        if (encabezado) {

          encabezado.textContent = 'Invertir'

          const simbolo = document.createElement('span')

          simbolo.textContent = '+'
          simbolo.setAttribute('aria-hidden', 'true')

          encabezado.appendChild(simbolo)

          encabezado.setAttribute('aria-expanded', 'false')

        }

        if (campoOculto) {
          campoOculto.value = 'Invertir'
        }

        dropdown.classList.remove('activo')

      }

    } catch (error) {

      console.error('Error al enviar formulario TEGRA:', error)

      if (estado) {

        estado.textContent =
          'No pudimos enviar tu solicitud. Intenta nuevamente o escríbenos a admin@grupovaley.com.'

      }

    } finally {

      enviando = false

      botonEnviar.disabled = false
      botonEnviar.textContent = 'Enviar información'

    }

  })

}
