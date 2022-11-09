import React from 'react'
import logo from '../../../assets/Logo.png'
import styles from './NavbarAfter.module.css'
import home from '../../../pages/home/index'
import profilePict from '../../../assets/Profile/Avatar-Profile-Vector-PNG-File.png'

const NavbarAfter = () => {
  return (
    <div>
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
              <div className="col-4 d-flex align-items-center justify-content-end">
                <a href="#cart" className={'text-decoration-none mx-4 '+ styles.icon}><i class="text-secondary bi bi-cart2"></i></a>
                <a href="#notification" className={'text-decoration-none mx-4 '+ styles.icon}><i class="text-secondary bi bi-bell"></i></a>
                <a href="#message" className={'text-decoration-none mx-4 '+ styles.icon}><i class="text-secondary bi bi-envelope"></i></a>
                <a href="#profile"><div className={"wrapperimg overflow-hidden mx-4 "+ styles.wrapperimg}><img src={profilePict} className={styles.imgprofile} alt="" /></div></a>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default NavbarAfter