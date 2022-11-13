import React from 'react'
import logo from '../../../assets/Logo.png'
import styles from './NavbarAfter.module.css'
import profilePict from '../../../assets/Profile/Avatar-Profile-Vector-PNG-File.png'
import { Link } from 'react-router-dom'

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
                <Link className='text-decoration-none' to={'/home'}><p className={"fw-bold text-decoration-none mt-1 ms-2 "+ styles.textlogo}>Blanja</p></Link>
              </div>
              <div className={"col-6 position-relative d-flex align-items-center "+ styles.wrapperinput}>
                <input type="text" className={"form-control rounded-pill "+ styles.input_search} />
                <div className="wrapper position-absolute end-0 me-2">
                  <Link to={'#search text-decoration-none'}>
                    <i className="bi bi-search text-dark me-4" />
                  </Link>
                </div>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-end">
                <a href="#cart" className={'text-decoration-none mx-4 '+ styles.icon}><i className="text-secondary bi bi-cart2"></i></a>
                <a href="#notification" className={'text-decoration-none mx-4 '+ styles.icon}><i className="text-secondary bi bi-bell"></i></a>
                <a href="#message" className={'text-decoration-none mx-4 '+ styles.icon}><i className="text-secondary bi bi-envelope"></i></a>
                <Link to={'/profileCustomer'}><div className={"wrapperimg overflow-hidden mx-4 "+ styles.wrapperimg}><img src={profilePict} className={styles.imgprofile} alt="" /></div></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default NavbarAfter