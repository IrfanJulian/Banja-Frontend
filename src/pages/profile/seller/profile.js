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
        <div className="container shadow-lg p-5 my-5">
            <p className='h2'>My profile store</p>
            <p className='text-secondary mt-4'>Manage your profile information</p>
            <hr className='mt-5' />
            <div className="row">
                <div className="col-7">
                    <div className="form">
                        <div className="wrapperchild d-flex mt-4">
                            <div className="text w-25">
                                <p className='h5 text-secondary mt-2 text-end me-4'>Store name</p>
                            </div>
                            <div className="forminp w-75 border">
                                <input type="text" value={''} className={"w-100 "+ styles.inp} />
                            </div>
                        </div>
                        <div className="wrapperchild d-flex mt-4">
                            <div className="text w-25">
                                <p className='h5 text-secondary mt-2 text-end me-4'>Email</p>
                            </div>
                            <div className="forminp w-75 border">
                                <input type="email" value={''} className={"w-100 "+ styles.inp} />
                            </div>
                        </div>
                        <div className="wrapperchild d-flex mt-4">
                            <div className="text w-25">
                                <p className='h5 text-secondary mt-2 text-end me-4'>Phone number</p>
                            </div>
                            <div className="forminp w-75 border">
                                <input type="number" value={''} className={"w-100 "+ styles.inp} />
                            </div>
                        </div>
                        <div className="wrapperchild d-flex my-4">
                            <div className="text w-25">
                                <p className='h5 text-secondary mt-2 text-end me-4'>Description</p>
                            </div>
                            <div className="forminp w-75 border">
                                <input type="text" value={''} className={"w-100 "+ styles.inpDesc} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex me-5 mt-4">
                    <div className={"border mx-5 "+styles.border}></div>
                        <div className="wrappercontent ms-5 w-100 d-grid justify-content-center">
                            <div className={"wrapperimg d-grid justify-content-center overflow-hidden ms-2 "+ styles.wrapperimg}>
                                <img src={profpict} className={styles.profpict} alt="" />
                            </div>
                            <input hidden type="file" id='file' />
                            <button className={'btn btn-outline-secondary rounded-pill '+styles.btnchange}>
                                <label htmlFor="file">Select Image</label>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSeller