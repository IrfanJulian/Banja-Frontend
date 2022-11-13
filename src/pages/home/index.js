import React, { useEffect, useState } from 'react'
import NavbarBefore from '../../components/module/navbar/NavbarBefore'
import NavbarAfter from '../../components/module/navbar/NavbarAfter'
import FirstCarousel from '../../components/module/carousel/firstCarousel'
import CategoryCarousel from '../../components/module/carousel/categoryCarousel'
import styles from './index.module.css'
import productpict from '../../assets/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'
import axios from 'axios'
import shirt from '../../assets/Category/tshirt.png'

const Home = () => {

  const [data, setData] = useState([])
  const product = 'https://rose-fantastic-squirrel.cyclic.app/v1/products'
  
  useEffect(()=>{
    const getdata = async()=>{
      try {
        let result = await axios.get(product)
        setData(result.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getdata()
  }, [])
  
  console.log(data)
  
  // console.log(category)

  return (
    <div>
      <NavbarAfter />

      <FirstCarousel />
      {/* category  */}
      <section>
        <div className="container title my-5">
          <h1 className='fw-bold'>Category</h1>
          <p className='text-secondary'>What are you currently looking for</p>
        </div>

        <div className="container">
          <CategoryCarousel />
        </div>

      </section>
      {/* content  */}
      <section>
        <div className="container mt-5">
          <div className="title">
            <h1 className='fw-bold'>New</h1>
            <p className='text-secondary'>You've never seen it before</p>
          </div>
          <div className="row row-cols-lg-5 row-cols-sm-1">
          
          {data ? data.map((item)=>(
            <div className="col-lg col-sm-8">
              <div className="card shadow-lg my-5">
                <div className="wrapperimg border-bottom d-grid justify-content-center">
                  <img src={item.images[0]} className={styles.productpict} alt="" />
                  {/* {console.log(item.images[0])} */}
                </div>
                <h5 className='mt-3 mx-3'>{item.name}</h5>
                <h5 className='text-danger mx-3'>{item.price}</h5>
                <p className='text-secondary mx-3'>{item.brand}</p>
                <div className="rating d-flex mx-3 my-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <p className='ms-1'>(10)</p>
                </div>
              </div>
            </div>
          )) : <h1>...Loading</h1>}

          </div>
        </div>
      </section>
      {/* popular products  */}
      <section>
        <div className="container">
          <div className="title">
            <h1>Popular</h1>
            <p className='text-secondary'>Find clothes that are trending recently</p>
          </div>

          <div className="row row-cols-lg-6">

            <div className="col">
              <div className="card shadow-lg my-5">
                <div className="wrapperimg d-grid justify-content-center">
                  <img src={productpict} className={styles.productpict} alt="" />
                </div>
                <h5 className='mt-3 mx-2'>Product Name</h5>
                <h5 className='text-danger mx-2'>$Price</h5>
                <p className='text-secondary mx-2'>Brand</p>
                <div className="rating d-flex mx-2 my-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <p className='ms-1'>(10)</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Home


