import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const es = {
  contact: 'Contáctanos',
  interest: 'Links de Interés',
  portability: 'Portabilidad Numérica',
  portabilityLink: 'https://share.hsforms.com/1pok4JUd9SR2koQlSC2725A5awgn',
  transparency: 'Lineamientos de Transparencia',
  security: 'Colaboración en Seguridad y Justicia',
  rights: 'Carta de Derechos Mínimos de los Usuarios',
  practices: 'Código de Prácticas Comerciales',
  profeco: 'Oficio Aprobatorio PROFECO',
  wab: 'Whatsapp',
  wabLink: 'https://api.whatsapp.com/send?text=Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n.%20&phone=523350042255',
  infographic: 'Ruta de Emprendimiento',
  moreInfo: '¿Deseas más información?',
  buttonA: 'Hablemos',
  buttonALink: 'https://blog.cleverideas.com.mx/soluciones-en-la-nube',
  buttonB: 'Soporte',
  buttonBLink: 'https://share.hsforms.com/19nHfcLBETzCxmmO_MJ9fbA5awgn',
  terms: 'Términos de venta',
  privacity: 'Aviso de privacidad'
}
const en = {
  contact: 'Contact us',
  interest: 'Interest Links',
  portability: 'Number Portability',
  portabilityLink: 'https://share.hsforms.com/1pok4JUd9SR2koQlSC2725A5awgn',
  transparency: 'Transparency Guidelines',
  security: 'Security and Justice Collaboration',
  rights: 'Minimum Rights of Users Charter',
  practices: 'Commercial Practices Code',
  profeco: 'PROFECO Approval Office',
  wab: 'Whatsapp',
  wabLink: 'https://api.whatsapp.com/send?text=Hi,%20I%20would%20like%20to%20receive%20information.%20&phone=13056776828',
  infographic: 'Enterpreuniship route',
  moreInfo: 'Need more information?',
  buttonA: 'Let\'s talk',
  buttonALink: 'https://blog.cleverideas.com.mx/cloud-solutions',
  buttonB: 'Support',
  buttonBLink: 'https://share.hsforms.com/1QnDSbt5ARxOwDHYROi7KlA5awgn',
  terms: 'Terms of service',
  privacity: 'Privacity policy'
}

function Footer() {
  const router = useRouter()
  const { locale } = router

  const t = locale === 'es' ? es : en

  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLayout}>

        {/* <div> */}
          <div className={styles.infoLayout}>
            <h4 className={styles.title}>{t.interest}</h4>
            <div className={styles.links}>
              <p><a className={styles.link} href={t.portabilityLink} target='_blank'>{t.portability}</a></p>
              <Link className={styles.link} href='/ruta'>{t.infographic}</Link>
              <p><a className={styles.link} href='https://hubs.ly/Q020LCq20' target='_blank'>{t.transparency}</a></p>
              <p><a className={styles.link} href='https://hubs.ly/Q020QKp_0' target='_blank'>{t.security}</a></p>
              <p><a className={styles.link} href='https://hubs.ly/Q020YG-s0' target='_blank'>{t.rights}</a></p>
              <p><a className={styles.link} href='https://hubs.ly/Q020YFcy0' target='_blank'>{t.practices}</a></p>
              <p><a className={styles.link} href='https://hubs.ly/Q028Jd8y0' target='_blank'>{t.profeco}</a></p>
            </div>
          </div>

          <div className={`${styles.infoLayout} ${styles.directionsLayout}`}>
            <h4 className={styles.title}>{t.contact}</h4>
            <div className={styles.directions}>
              <div>
                <h4>México</h4>
                <div className={styles.itemInfo}>
                  <img src="/5.svg" alt="" width={20} />
                  <p>Calle Pegaso #3692 Int. 201 Colonia La Calma <br /> C.P. 45070 <br /> Zapopan, Jalisco, México</p>
                </div>
                <div className={styles.itemInfo}>
                  <img src="/6.svg" alt="" width={20} />
                  <p>+ 52 (33) 5004 2255</p>
                </div>
                <div className={styles.itemInfo} style={{alignItems:'center'}}>
                  <img src="/mail.svg" alt="" width={15} />
                  <p>info@cleverideas.com.mx</p>
                </div>

              </div>
              <div>
                <h4>USA</h4>
                <div className={styles.itemInfo}>
                  <img src="/5.svg" alt="" width={20} />
                  <p>950 SW 57th Ave. Suite 330 West Miami, FL <br /> C.P. 33144.</p>
                </div>
                <div className={styles.itemInfo}>
                  <img src="/6.svg" alt="" width={20} />
                  <p>+1 (305) 677 6828</p>
                </div>
              </div>

            </div>
          </div>
        {/* </div> */}

        <div className={styles.infoLayout}>
          <h4>{t.moreInfo}</h4>
          <div className={styles.buttons}>
            <a className={styles.buttonLink} href={t.buttonALink} target="_blank" rel="noopener noreferrer">{t.buttonA}</a>
            <a className={styles.buttonLink} href={t.buttonBLink} target="_blank" rel="noopener noreferrer">{t.buttonB}</a>
          </div>
          <div className={styles.social}>
            <a href="https://facebook.com/cleverideasMX" target="_blank"><img src="/facebook.svg" width={40} alt="" /></a>
            <a href={t.wabLink} target="_blank"><img src="/whatsapp.svg" width={40} alt="" /></a>
            <a href="https://www.linkedin.com/company/clever.ideas./" target="_blank"><img src="/linkedin.svg" width={40} alt="" /></a>
            <a href="https://youtube.com/channel/UCAtYcWPgywnrY74ujukxlqg" target="_blank"><img src="/youtube.svg" width={40} alt="" /></a>
            <a href="https://twitter.com/CleverIdeas3" target="_blank"><img src="/twitter.svg" width={40} alt="" /></a>
          </div>
        </div>


      </div>


      <div className={styles.legalBackground}>
        <span>Copyright {year} - Clever IDEAS ©</span>
        <div className={styles.legal}>
          <Link href='/pua' className={styles.link}>PUA</Link>
          <Link href='/terminos-de-venta' className={styles.link}>{t.terms}</Link>
          <Link href='/privacidad' className={styles.link}>{t.privacity}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

