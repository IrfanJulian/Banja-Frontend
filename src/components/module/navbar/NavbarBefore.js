import React from 'react'
import logo from '../../../assets/Logo.png'
import styles from './NavbarBefore.module.css'
import home from '../../../pages/home/index'
// import Input from '../../base/input'

const NavbarBefore = () => {
  return (
    <div>
        <div className="container-fluid shadow-lg">
          <div className="container d-flex">
            <div className="row w-100 py-4">
            {/* <!-- Logo  --> */}
              <div className="col-2 d-flex">
                <img src={logo} className={styles.logo} alt='logo'/>
                <a className={"fw-bold text-decoration-none mt-1 ms-2 "+ styles.textlogo} href={home}>Blanja</a>
              </div>
              <div className={"col-6 position-relative d-flex align-items-center "+ styles.wrapperinput}>
                <input type="text" className={"form-control rounded-pill "+ styles.input_search} />
                {/* <a href="#filter" className='position-absolute border end-0 me-4 mt-4'><i className="bi bi-search" /></a> */}
                <button className="btn btn-none position-absolute end-0 me-4"><i className="bi bi-search" /></button>
              </div>
              <div className="col-4 d-flex align-items-center">
                <div className={"btn btn-none "+ styles.btnfilter}><i class="bi bi-funnel"/></div>
                <div className="wrapperbtn ms-auto">
                  <button className="btn btn-none"><i className={"bi bi-cart2 "+ styles.cart} /></button>
                  <button className={"btn btn-danger rounded-pill mx-4 "+ styles.btnauth}>login</button>
                  <button className={"btn btn-outline-secondary rounded-pill "+ styles.btnauth}>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavbarBefore