import React from 'react'
import logo from '../../../assets/Logo.png'
import styles from './forgot.module.css'

const Relogin = () => {
  return (
    <div>
        <div className="container d-grid justify-content-center py-5">
                <div className="logo d-flex justify-content-center w-100 my-5">
                    <img src={logo} className={styles.logo} alt="" />
                    <p className={'text-danger fw-bold mt-2 ms-2 '+ styles.fontlogo}>Blanja</p>
                </div>
                <div className="text-login w-100 d-flex justify-content-center">
                    <h5 className='fw-bold'>Please Login With Your Account</h5>
                </div>
                <form action="" className='w-100 d-grid'>
                    <input type="email" className={"form-control mt-4 "+ styles.forminp} placeholder='E-mail' />
                    <input type="password" className={"form-control my-4 "+ styles.forminp} placeholder='Password' />
                    <button className='btn btn-danger rounded-pill w-100 my-4'>Login</button>
                </form>
        </div>
    </div>
  )
}

export default Relogin