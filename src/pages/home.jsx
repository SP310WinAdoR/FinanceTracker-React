import React from 'react';
import "../stylesSheets/homeStyle.css";
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <div>
    <NavBar/> 
 
        <section className='home-first-section'> 

            <img className="home-bloblLefImage" src="../assets/HomeBlob.png" alt=""/>
            <div className='home-first-section_flex_col1'> 
                <h1 className='home-first-section_title'> Asistencia financiera en todas partes </h1>
                <p className='home-first-section_p'> Maneja tus fiannzas y planea mejor tus ingresos </p>
                <div className='home-first-section_flex-row1'>  
                  <button className="cssbuttons-io-button"> ¡Registrate!
                    <div class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                      </div>
                  </button>
                  <a href="#" className="btn"> Más información </a>
                  </div>    
            </div>
            <div className='home-first-section_images-rigth'>
             <img className="home-blobMckp" src="../assets/blobsPhone.png" alt=""/>
             <img className="home-phoneMckp" src="../assets/phoneMockup.png" alt=""/>
            </div> 
        </section>

{/* Inicio de la segunda sección  */}

        <section className='home-second-section'> 

          <img className="home-second-section_blobImage" src="../assets/HomeBlobBigger.png" alt=""/>
          <h2 className='home-second-sectio_title'> ¡Explora nuestros servicios!</h2>
          <p className='home-second-sectio_description'>Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>
          <div class="parent">

            <div className="div1 card-second-section"> 
              <h7 className="card-second-section_title">Invetment Training</h7>
              <p className="card-second-section_paragraph" >the quick fox jumps over the lazy dog</p> 
            </div>

            <div className="div2 card-second-section"> 
              <h7 className="card-second-section_title">Invetment Training</h7>
              <p className="card-second-section_paragraph" >the quick fox jumps over the lazy dog</p> 
            </div>

            <div className="div3 card-second-section"> 
               <h7 className="card-second-section_title">Invetment Training</h7>
                 <p className="card-second-section_paragraph" >the quick fox jumps over the lazy dog</p> 
            </div>

            <div className="div4 card-second-section">
              <h7 className="card-second-section_title">Invetment Training</h7>
              <p className="card-second-section_paragraph" >the quick fox jumps over the lazy dog</p> 
             </div>

            <div className="div5 card-second-section">
               <h7 className="card-second-section_title">Invetment Training</h7>
              <p className="card-second-section_paragraph" >the quick fox jumps over the lazy dog</p> 
             </div>

            <div className="div6 card-second-section"> 
               <h7 className="card-second-section_title">Invetment Training</h7>
              <p className="card-second-section_paragraph" >the quick fox jumps over the lazy dog</p> 
            </div>

          </div> 

        </section>
        
    </div>
    

  )
}
