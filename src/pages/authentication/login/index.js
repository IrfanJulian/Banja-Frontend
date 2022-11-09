import React from 'react'
import logo from '../../../assets/Logo.png'
import styles from './login.module.css'

const Login = () => {
  return (
    <div>
        <div className="container border d-grid justify-content-center py-5">
                <div className="logo d-flex justify-content-center w-100 my-5">
                    <img src={logo} className={styles.logo} alt="" />
                    <p className={'text-danger fw-bold mt-2 ms-2 '+ styles.fontlogo}>Blanja</p>
                </div>
                <div className="text-login w-100 d-flex justify-content-center">
                    <h5 className='fw-bold'>Please Login With Your Account</h5>
                </div>
                <div className="wrapperbtn w-100 d-flex justify-content-center my-5">
                    <button className={'btn btn-outline-secondary '+ styles.btn}>Customer</button>
                    <button className={'btn btn-danger '+ styles.btn}>Seller</button>
                </div>
                <form action="" className='w-100 d-grid'>
                    <input type="text" className={"form-control my-4 "+ styles.forminp} placeholder='E-mail' />
                    <input type="password" className={"form-control mb-4 "+ styles.forminp} placeholder='Password' />
                    <a href="#forgot" className='text-danger text-decoration-none ms-auto'>Forgot Password?</a>
                    <button className='btn btn-danger rounded-pill w-100 my-4'>Login</button>
                </form>
                <div className="wrapperRegister w-100 d-flex justify-content-center">
                    <p>Don't have Blanja account?</p>
                    <a href="/registerSeller" className='text-decoration-none text-danger ms-2'>Register</a>
                </div>
        </div>
    </div>
  )
}

export default Login