import React from 'react'
import styles from './modal.css'
import {Link} from 'react-router-dom'

const Modal = () => {
  return (
    <div>
        {/* <!-- trigger modal --> */}
        <Link to={'#home'} className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className='m-5 border border-secondary border-opacity-25 border-2 rounded d-flex justify-content-center'>
                <h5 className='text-secondary text-opacity-50 my-5'>Add new Address</h5>
            </div>
        </Link>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="wrapper w-100 d-flex justify-content-center">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add new address</h1>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label text-secondary">Save address as (ex : home address, office address)</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label text-secondary">Recepient's Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label text-secondary">Recepient's Phone Number</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label text-secondary">Address</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label text-secondary">Postal Code</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label text-secondary">City or Subdistrict</label>
                                        <input type="number" className="form-control w-50" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input class="form-check-input bg-danger me-2" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">Make it as Primary Address</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={"btn btn-outline-secondary rounded-pill "+ styles.btn} data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className={"btn btn-danger rounded-pill "+ styles.btn}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal