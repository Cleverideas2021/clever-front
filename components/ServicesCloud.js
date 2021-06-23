import React, { useState } from 'react'
import styles from '../styles/ServicesCloud.module.css'



function ServicesCloud() {
  // const services = {
  //   one: {
  //     name: 'Oficina Virtual',
  //     description: 'Esta familia de soluciones está propuesta para asistir a las necesidades propias de las empresas con oficinas regulares y aquellas con promoción de oficinas virtuales. La solución es completa; Consiste en el servicio de telefonía, conmutador en la nube, y conferencias.',
  //     items: ['Telefonía IP', 'Conferencia', 'PBX Virtual', 'Show']
  //   },
  //   two: {
  //     name: 'Contact Centers',
  //     description: 'Familia de contact centers',
  //     items: ['uContact', 'Chat', 'Avisos']
  //   },
  //   three: {
  //     name: 'IoT',
  //     description: 'Tercer servicios',
  //     items: ['In a Box', 'Tracking', 'Connect']
  //   },
  //   four: {
  //     name: "Smart App's",
  //     description: 'tercer servicios',
  //     items: ['Evidence', 'PTT', 'Wallet']
  //   }
  // }
  const services = [
    {
      name: 'Oficina Virtual',
      description: 'Familia de servicios',
      items: ['Telefonía IP', 'Conferencia']
    },
    {
      name: 'Contact Center',
      description: 'Segundo servicios',
      items: ['uContact', 'Chat', 'Avisos']
    },
    {
      name: 'IoT',
      description: 'Tercer servicios',
      items: ['In a Box', 'Tracking', 'Connect']
    },
    {
      name: "Smart App's",
      description: 'tercer servicios',
      items: ['Evidence', 'PTT', 'Wallet']
    }
  ]
  // console.log(services[0])

  const [select, setSelect] = useState(0)
  const changeSelect = (e) => {
    const selected = e.target.value
    setSelect(selected)
  }

  return (
    <section className={styles.background}>
      <h3 className={styles.title}>Conoce los grupos de servicios de Clever IDEAS</h3>
      <div className={styles.container}>
        <div className={styles.containerCircle}>
          <div className={styles.circle}>

          </div>
          <button onClick={changeSelect} value={0} className={`${styles.button} ${styles.one} ${select == 0 && styles.buttonSelected}`}>Oficina Virtual</button>
          <button onClick={changeSelect} value={1} className={`${styles.button} ${styles.two} ${select == 1 && styles.buttonSelected}`}>Contact Centers</button>
          <button onClick={changeSelect} value={2} className={`${styles.button} ${styles.three} ${select == 2 && styles.buttonSelected}`}>IoT</button>
          <button onClick={changeSelect} value={3} className={`${styles.button} ${styles.four} ${select == 3 && styles.buttonSelected}`}>Smart App's</button>
          {/* <button onClick={handleState} value={1}>Contact Center</button> */}
        </div>


        <div className={styles.card}>
        <h4 className={styles.cardTitle}>{services[select]?.name}</h4>
        <h5 className={styles.description}>{services[select].description}</h5>
        {
          services[select].items.map(item => (
            <div key={item} className={styles.items}><img src="/check.svg" alt="" className={styles.icon} />{item}</div>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default ServicesCloud
