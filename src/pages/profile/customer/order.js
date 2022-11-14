import React from 'react'
import NavbarAfter from '../../../components/module/navbar/NavbarAfter'
import SideBar from '../../../components/module/sideBar'
import styles from './order.css'

const Order = () => {
  return (
    <div>
        <NavbarAfter />
        <SideBar />
        <div className="container p-5 shadow-lg">
            <div className="title">
                <p className='h2'>My Order</p>
                <div className="buttons my-5">
                    <button className={"btn "+styles.btns}>
                        All Items
                    </button>
                    <button className={"btn "+styles.btns}>
                        Not yet paid
                    </button>
                    <button className={"btn "+styles.btns}>
                        Packed
                    </button>
                    <button className={"btn "+styles.btns}>
                        Sent
                    </button>
                    <button className={"btn "+styles.btns}>
                        Completed
                    </button>
                    <button className={"btn "+styles.btns}>
                        Order cancel
                    </button>
                    <hr className={'text '+styles.line} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order