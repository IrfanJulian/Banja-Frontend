import React from 'react'
import logo from '../../../assets/Logo.png'
import styles from './forgot.css'

const resetPassword = () => {
  return (
    <div>
        <div className="container border d-grid justify-content-center py-5">
                <div className="logo d-flex justify-content-center w-100 my-5">
                    <img src={logo} className={styles.logo} alt="" />
                    <p className={'text-danger fw-bold mt-2 ms-2 '+ styles.fontlogo}>Blanja</p>
                </div>
                <div className="text-login w-100 d-flex justify-content-center">
                    <h5 className='fw-bold'>Reset Password</h5>
                </div>
                <form action="" className='w-100 d-grid'>
                    <input type="text" className={"form-control mt-4 "+ styles.forminp} placeholder='E-mail' />
                    <button className='btn btn-danger rounded-pill w-100 my-4'>Confirm</button>
                </form>
                <div className="wrapperRegister w-100 d-flex justify-content-center">
                    <p>Already Blanja account?</p>
                    <a href="/login" className='text-decoration-none text-danger ms-2'>Login</a>
                </div>
        </div>
    </div>
  )
}

export default resetPassword