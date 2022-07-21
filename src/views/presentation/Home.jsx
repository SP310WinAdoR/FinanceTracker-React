import React from 'react'
import "../../stylesSheets/homeStyle.css"

export default function Home() {
  return (
    <div>
        <div className='headerCssFalse'> Header App </div>

        <section className='home-first-section'>

            <img className="home-bloblLefImage" src="../assets/HomeBlob.png" alt=""/>
            <div className='home-first-section_flex_col1'>
                <h1 className='home-first-section_title'> Asistencia financiera en todas partes </h1>
                <p className='home-first-section_p'> Maneja tus fiannzas y planea mejor tus ingresos </p>
                <div className='home-first-section_flex-row1'>
                    <button className='home-first-section_btn-register'> Registrarse </button>
                    <button className='home-first-section_btn-inf'>  Más información </button>
                  </div>

            </div>
            <div className='home-first-section_images-rigth'>
             <img className="home-blobMckp" src="../assets/blobsPhone.png" alt=""/>
             <img className="home-phoneMckp" src="../assets/phoneMockup.png" alt=""/>


            </div>

        </section>

    </div>


  )
}
