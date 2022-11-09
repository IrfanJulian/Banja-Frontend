import React from 'react'
import logo from '../../../../assets/Logo.png'
import styles from '../customer/register.module.css'

const RegisterSeller = () => {
  return (
    <div>
        <div className="container border d-grid justify-content-center py-5">
                <div className="logo d-flex justify-content-center w-100 my-5">
                    <img src={logo} className={styles.logo} alt="" />
                    <p className={'text-danger fw-bold mt-2 ms-2 '+ styles.fontlogo}>Blanja</p>
                </div>
                <div className="text-login w-100 d-flex justify-content-center">
                    <h5 className='fw-bold'>Please Register Here</h5>
                </div>
                <div className="wrapperbtn w-100 d-flex justify-content-center my-5">
                    <button className={'btn btn-danger '+ styles.btn}>Customer</button>
                    <button className={'btn btn-outline-secondary '+ styles.btn}>Seller</button>
                </div>
                <form action="" className='w-100 d-grid'>
                    <input type="text" className={"form-control mt-4 "+ styles.forminp} placeholder='Name' />
                    <input type="email" className={"form-control mt-4 "+ styles.forminp} placeholder='E-mail' />
                    <input type="number" className={"form-control mt-4 "+ styles.forminp} placeholder='Phone Number' />
                    <input type="text" className={"form-control mt-4 "+ styles.forminp} placeholder='Store Name' />
                    <input type="password" className={"form-control my-4 "+ styles.forminp} placeholder='Password' />
                    <button className='btn btn-danger rounded-pill w-100 my-4'>Register</button>
                </form>
                <div className="wrapperRegister w-100 d-flex justify-content-center">
                    <p>Already Blanja account?</p>
                    <a href="/login" className='text-decoration-none text-danger ms-2'>Login</a>
                </div>
        </div>
    </div>
  )
}

export default RegisterSeller