import React from 'react';
import "../../stylesSheets/homeStyle.css";
import NavBar from "../../components/NavBar";
import FooterComp from "../../components/FooterComp"
export default function Home() {
  return (
    <main bg='white'>
    <div>
    <NavBar/>

        <section className='home-first-section'>
            <div className='home-first-section_flex_col1'>
                <h1 className='home-first-section_title'> Asistencia financiera en todas partes </h1>
                <p className='home-first-section_p'> Maneja tus fiannzas y planea mejor tus ingresos </p>
                <div className='home-first-section_flex-row1'>
                  <button className="cssbuttons-io-button"> ¡Registrate!
                    <div class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                      </div>
                  </button>
                  <button className='botonInfo'> Información </button>
                  </div>
            </div>
            <div className='home-first-section_images-rigth'>
             <img className="home-blobMckp" src="../assets/blobsPhone.png" alt=""/>
             <img className="home-phoneMckp" src="../assets/PhoneFsection.png" alt=""/>
            </div>
        </section>

{/* Inicio de la segunda sección  */}
<img className="home-second-section_blobImage" src="../assets/HomeBlobBigger.png" width='100%' top="20rem" alt=""/>
        <section className='home-second-section'>


          <h2 className='home-second-sectio_title'> ¡Explora nuestros servicios!</h2>
          <p className='home-second-sectio_description'>Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>

          {/*TODO Crear un componente para los cards de la segunda seccioón   */}
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

{/* Inicio de la tercera sección  */ }
        <section className='home-third-section'>

            <div className='home-third-section_first-row'>

              <h2 className='home-third-section_first-row_title titleFixMarign'> ¿Cómo funcionamos?  </h2>
              <p className='home-third-section_first-row_p pFixMargin'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
              <div className='home-third-section_first-row_card'>

                <img  src="../assets/graphCard.png" alt=""/>
                <h2 className='home-third-section_first-row_title'> Lorem Ipsum</h2>
                <p className='home-third-section_first-row_p descriptionCard'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's</p>

              </div>
            </div>

            <div className='home-third-section_second-row'>
              <div className='home-third-section_second-row_1card'>
                <img  src="../assets/imageCard2row.png" alt=""/>
                <h2 className='home-third-section_first-row_title'>  Lorem Ipsum</h2>
                <p className='home-third-section_first-row_p descriptionCard'> orem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's</p>
              </div>
              <div className='home-third-section_second-row_2card' >
                <img src="../assets/tabDesign.png" alt=""/>
                <article className='carTab_graph'>
                  <h6> Lorem Ipsum </h6>
                  <img src="./assets/Chart.png" alt="" width="120px"/>
                </article>
                <article className='cardTab_circle'>
                    <div class="div1-section3"> -150 $</div>
                    <div class="div2-section3"> +600$ </div>
                    <div class="div3-section3"> Gastos </div>
                    <div class="div4-section3">  Ganancias </div>
                    <div class="div5-section3"> <img src="../assets/CircleImgCard.png" alt=""/> </div>
                    <div class="div7-section3"> +1450$ </div>
                    <div class="div9-section3"> Total semanal</div>
                </article>
                <article className='cardTab_large'>
                  <h5> Lorem Ipsum </h5>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's</p>
                 </article>
              </div>
            </div>
        </section>
        <FooterComp/>
    </div>
    </main>
  )
}

/* // TODO: Pasar estos componentes a la carpetas de "Components" */

function CardPrice(props) {
  return (
    <div>
      <section className='card_price'>
        <div className='flex_card_price_col1'>
          <h3 className='TituloCardPrice'> {props.tipe}</h3>
          <p className='descriptionCardPrice'> {props.description}</p>
        </div>
        <div className='flex_card_price_col2'>
          <h2 className='PriceNumber'> {props.price}</h2>
          <div className='flex_card_price_col2_prices'>
            <span className='priceSign'>$</span>
            <p className='priceSign'> Por mes </p>
            <button className='PriceButton'> Comprar
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </div>

        </div>
      </section>
    </div>

  )
}
