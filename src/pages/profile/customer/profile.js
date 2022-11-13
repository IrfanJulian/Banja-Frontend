import React from 'react'
import NavbarAfter from '../../../components/module/navbar/NavbarAfter'
import styles from './profile.module.css'
import profpict from '../../../assets/Profile/Avatar-Profile-Vector-PNG-File.png'
import SideBar from '../../../components/module/sideBar'

const ProfileCustomer = () => {
  return (
    <div>
        <NavbarAfter />
        <SideBar />
            <div className={"continer-fluid "+ styles.containerFluid}>
            {/* <div className="sidebar" id={styles.sidebar}>
                <div className="header-box">
                    <h1>side bar</h1>
                </div>
            </div> */}
                <div className={"container bg-white shadow-lg my-5 p-5 "+ styles.container}>
                    <h2>My Profile</h2>
                    <h5 className='text-secondary mt-4'>Manage your profile information</h5>
                    <hr className='my-5' />
                    <div className="row">
                        <div className={"col-8 "+ styles.form}>
                            <form action="">
                                <div className="d-flex">
                                    <div className="text w-25">
                                        <h5 className='text-secondary mt-2 text-end me-4'>Name</h5>
                                    </div>
                                    <div className="input w-75">
                                        <input type="text" value={''} className={"w-100 "+ styles.inp} />
                                    </div>
                                </div>
                                <div className="d-flex mt-4">
                                    <div className="text w-25">
                                        <h5 className='text-secondary mt-2 text-end me-4'>Email</h5>
                                    </div>
                                    <div className="input w-75">
                                        <input type="email" value={''} className={"w-100 "+ styles.inp} />
                                    </div>
                                </div>
                                <div className="d-flex mt-4">
                                    <div className="text w-25">
                                        <h5 className='text-secondary mt-2 text-end me-4'>Phone Number</h5>
                                    </div>
                                    <div className="input w-75">
                                        <input type="number" value={''} className={"w-100 "+ styles.inp} />
                                    </div>
                                </div>
                                <div className="d-flex mt-4">
                                    <div className="text w-25">
                                        <h5 className='text-secondary mt-2 text-end me-4'>Gender</h5>
                                    </div>
                                    <div className="d-flex mt-2 w-75 ms-4">
                                        <div class="form-check">
                                            <input class="form-check-input bg-danger" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">Male</label>
                                        </div>
                                        <div class="form-check ms-5">
                                            <input class="form-check-input bg-danger" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                            <label class="form-check-label" for="flexRadioDefault2">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mt-4">
                                    <div className="text w-25">
                                        <h5 className='text-secondary mt-2 text-end me-4'>Date of Birth</h5>
                                    </div>
                                    <div className="input w-75">
                                        <input type="date" value={''} className={"w-100 "+ styles.inp} />
                                        <button className={'btn btn-danger rounded-pill mt-4 '+ styles.btnsave}>Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 d-flex pe-5">
                            <div className={"border mx-5 "+ styles.border}></div>
                            <div className="wrappercontent ms-5 w-100 d-grid justify-content-center">
                                <div className={"wrapperimg d-grid justify-content-center overflow-hidden ms-2 "+ styles.wrapperimg}>
                                    <img src={profpict} className={styles.profpict} alt="" />
                                </div>
                                    <input hidden type="file" id='file' />
                                    <buttxon className={'btn btn-outline-secondary rounded-pill '+styles.btnchange}>
                                        <label htmlFor="file">Select Image</label>
                                    </buttxon>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default ProfileCustomer