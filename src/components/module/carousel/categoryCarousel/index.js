import React, {useState, useEffect} from "react";
import axios from 'axios';
import Slider from "react-slick";
import styles from './categoryCarousel.module.css';
import shirt from '../../../../assets/Category/tshirt.png';
import short from '../../../../assets/Category/short.png';
import jacket from '../../../../assets/Category/jacket.png';
import pants from '../../../../assets/Category/pants.png';
import shoes from '../../../../assets/Category/shoes.png';
import highheels from '../../../../assets/Category/highheels.png';
import watch from '../../../../assets/Category/watch.png';
import handbag from '../../../../assets/Category/handbag.png';
import ransel from '../../../../assets/Category/ransel.png';
import glasses from '../../../../assets/Category/glasses.png';
import cap from '../../../../assets/Category/cap.png';
import tie from '../../../../assets/Category/tie.png';
import dress from '../../../../assets/Category/dress.png';
import suit from '../../../../assets/Category/suit.png';
import accessories from '../../../../assets/Category/accessories.png';



const CategoryCarousel = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
}

return (
    <div className="container ps-5">
        <div>
            <Slider {...settings}>         
                <div>      
                  <div className={"card position-relative bg-danger "+ styles.card}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={shirt} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card1}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={short} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">Short</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card2}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={jacket} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card3}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={pants} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card4}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={shoes} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card5}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={highheels} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card6}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={watch} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card7}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={handbag} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card8}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={ransel} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card9}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={glasses} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card10}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={cap} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card11}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={tie} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card12}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={dress} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>
                <div>      
                  <div className={"card position-relative "+ styles.card13}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={suit} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>             
                <div>      
                  <div className={"card position-relative "+ styles.card14}>
                    <div className={"wrapper-img border d-grid h-100 align-items-center justify-content-center "+ styles.wrapperimg}>
                        <img src={accessories} className={styles.img} alt="" />
                    </div>
                    <div className={"text position-absolute w-100 h-100 d-grid justify-content-center align-items-center "+ styles.text}>
                        <p className="h1 text-light">T-Shirt</p>
                    </div>
                  </div>
                </div>             
            </Slider>
        </div>
    </div>
          )
}

export default CategoryCarousel