import React from 'react'
import styles from './myBag.css'
import NavbarAfter from '../../components/module/navbar/NavbarAfter'
import { Link } from 'react-router-dom'
import img1 from '../../assets/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'

const MyBag = () => {
  return (
    <div>
        <NavbarAfter />
            <section>
              <div className="container border mt-5 p-3">
                <h2 className='fw-bold my-5 ms-3'>My Bag</h2>
                <div className="row">
                  <div className="col-7">
                    <div className="wrapper w-100 border d-flex px-3 py-3">
                      <div class="form-check ms-3">
                        <input class="form-check-input bg-danger me-2" type="checkbox" value="" id="flexCheckDefault"/>
                      </div>
                      <h5 className='text ms-3'><strong className='me-1'>Select all items</strong>(2 Items selected)</h5>
                      <div className="wrprbtn ms-auto me-3">
                        <Link to={'#Delete'} className="text-decoration-none text-danger text-end">
                          <h5>Delete</h5>
                        </Link>
                      </div>
                    </div>
                    <div className="wrapper w-100 border d-flex mt-4 px-3 py-3">
                      <div class="form-check ms-3">
                        <input class="form-check-input bg-danger me-2" type="checkbox" value="" id="flexCheckDefault"/>
                      </div>
                      <div className={"wrapperimg rounded overflow-hidden "+ styles.wrapperimg}>
                        <img src={img1} className={''} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default MyBag


{/* <Link className='text-decoration-none d-flex w-75 ms-auto'><p className='fw-bold text-danger my-auto ms-auto'>Delete</p></Link> */}