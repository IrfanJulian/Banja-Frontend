import React from 'react'
import NavbarAfter from '../../../components/module/navbar/NavbarAfter'
import SidebarSeller from '../../../components/module/sideBar/indexV2'
import styles from './profile.module.css'
import profpict from '../../../assets/Profile/Avatar-Profile-Vector-PNG-File.png'

const ProfileSeller = () => {
  return (
<div>
        <NavbarAfter />
        <SidebarSeller />
            <div className={"continer-fluid "+ styles.containerFluid}>
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
                                        <h5 className='text-secondary mt-2 text-end me-4'>Store Description</h5>
                                    </div>
                                    <div className={"input w-75"}>
                                        <input type="text" value={''} className={"w-100 "+ styles.inpdesc} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-4">
                            <div className="wrapperuser">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-1 border-start border-3 mx-3"></div>
                                    <div className="col-9 d-grid justify-content-center">
                                        <img src={profpict} className={"border border-3 rounded-circle "+styles.imguser} alt="" />
                                        <input type="file" hidden class="form-control" id="inputGroupFile01" />
                                            <button type="button" className='btn btn-outline-secondary rounded-pill mt-3' id="inputGroupFile01">
                                                <label htmlFor="file" for="inputGroupFile01">Select Image</label>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default ProfileSeller