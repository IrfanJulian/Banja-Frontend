import React from 'react'
import styles from './sidebar.module.css'
import img from '../../../assets/hitler.jfif'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
        <a className={"btn btn-outline-danger mt-2 ms-2 "+ styles.btn} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <i className={"bi bi-justify text-danger "+styles.toggler}></i>
        </a>

        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <div className="wrapper-user d-flex mt-5 me-5 w-100 justify-content-end">
                    <div className={"img-wrapper rounded-circle me-4 "+ styles.imgwrapper}>
                        <img src={img} className={styles.imgProfile} alt="" />
                    </div>
                    <div className="wrapper-text">
                        <p className='h4'>User Name</p>
                        <p className='h6 text-secondary'><i className="bi bi-pencil-square me-2"></i>Change Profile</p>
                    </div>
                </div>

                <button type="button" className="btn-close me-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        <div className="offcanvas-body">
                <div className="content-wrapper mt-3">
                    <Link to={'/profileCustomer'} className='text-dark text-decoration-none'>
                        <div className="wrapper-myaccount d-flex">
                            <div className="w-25 me-2 d-flex justify-content-end">
                                <div className={"rounded-circle bg-primary d-flex justify-content-center "+styles.wrappericon}>
                                    <i className=" text-light bi bi-person-fill my-auto"></i>
                                </div>
                            </div>
                            <div className="text w-75 mt-1 ms-2">
                                <p className='h6'>My Account</p>
                            </div>
                        </div>
                    </Link>
                    <div className="wrapper-shippingAdress mt-3 d-flex">
                        <div className="w-25 me-2 d-flex justify-content-end">
                            <div className={"rounded-circle d-flex justify-content-center "+styles.wrappericon2}>
                                <i className=" text-light bi bi-geo-alt my-auto"></i>
                            </div>
                        </div>
                        <div className="text w-75 mt-1 ms-2">
                            <p className='h6'>Shipping Adress</p>
                        </div>
                    </div>
                    <div className="wrapper-shippingAdress mt-3 d-flex">
                        <div className="w-25 me-2 d-flex justify-content-end">
                            <div className={"rounded-circle d-flex justify-content-center "+styles.wrappericon3}>
                                <i className=" text-light bi bi-clipboard-check my-auto"></i>
                            </div>
                        </div>
                        <div className="text w-75 mt-1 ms-2">
                            <p className='h6'>My Order</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default SideBar