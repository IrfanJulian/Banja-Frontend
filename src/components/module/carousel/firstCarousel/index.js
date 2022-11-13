import React from "react";
import carousel1 from '../../../../assets/carousel.jfif'
import carousel2 from '../../../../assets/carousel2.png'
import carousel3 from '../../../../assets/carousel3.png'
import carousel4 from '../../../../assets/carousel4.jpg'
import styles from './firstCarousel.module.css'

const FirstCarousel = () => {
  return (
      <section>
        <div className={"container overflow-hidden mt-5 "+ styles.containercarousel}>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active d-flex justify-content-center">
                <img src={carousel1} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                <img src={carousel2} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                <img src={carousel3} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                <img src={carousel4} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
              </div>
              <div className="carousel-item d-flex justify-content-center">
                <img src={carousel1} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                <img src={carousel2} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                <img src={carousel3} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                <img src={carousel4} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
  )
}

export default FirstCarousel