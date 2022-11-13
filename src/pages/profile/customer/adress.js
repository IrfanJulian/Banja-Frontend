import React from 'react'
import NavbarAfter from '../../../components/module/navbar/NavbarAfter'
import SideBar from '../../../components/module/sideBar'
import styles from './adress.css'
import { Link } from 'react-router-dom'
import Modal from '../../../components/module/modal'

const Adress = () => {
  return (
    <div>
        <div className="container-utama">
            <NavbarAfter />
            <SideBar />
            <div className="container border rounded bg-light shadow-lg p-5">
                <h2 className='text'>Choose another address</h2>
                <p className='text-secondary mt-3'>Manage your shipping address</p>
                <hr className='my-5' />
                <Modal />
                {/* <Link to={'#home'} className="text-decoration-none">
                    <div className='m-5 border border-secondary border-opacity-25 border-2 rounded d-flex justify-content-center'>
                        <h5 className='text-secondary text-opacity-50 my-5'>Add new Address</h5>
                    </div>
                </Link> */}
                <div className="m-5 border border-danger border-2 rounded p-4">
                    <p className='h5 fw-bold'>Irfan Julian</p>
                    <p className='mt-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, possimus voluptatibus blanditiis quasi, porro non explicabo 
                        soluta numquam tempore dolores tenetur odit placeat voluptas. Exercitationem incidunt nesciunt quas temporibus voluptas!
                    </p>
                    <Link to={'/changeaddress'} className="text-decoration-none">
                        <p className='text-danger fw-bold mt-4'>Change Address</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adress