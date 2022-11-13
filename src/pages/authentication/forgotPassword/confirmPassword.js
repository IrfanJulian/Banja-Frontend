import React from 'react'
import logo from '../../../assets/Logo.png'
import styles from './forgot.module.css'

const ConfirmPassword = () => {
  return (
    <div>
        <div className="container d-grid justify-content-center py-5">
                <div className="logo d-flex justify-content-center w-100 my-5">
                    <img src={logo} className={styles.logo} alt="" />
                    <p className={'text-danger fw-bold mt-2 ms-2 '+ styles.fontlogo}>Blanja</p>
                </div>
                <div className="text-login w-100 d-flex justify-content-center">
                    <h5 className='fw-bold'>Reset Password</h5>
                </div>
                <h6 className='text-danger text-center my-4'>You Need to Change Your Password to Acivate Your Account</h6>
                <form action="" className='w-100 d-grid'>
                    <input type="password" className={"form-control mt-4 "+ styles.forminp} placeholder='New Password' />
                    <input type="password" className={"form-control my-4 "+ styles.forminp} placeholder='Confirm New Password' />
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

export default ConfirmPassword