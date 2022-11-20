import React, {FC, ReactNode} from 'react';
import style from './allOrders.module.css';
import {TOrders} from "../../services/action/wsAction";
import Order from '../order/order'

interface AllOrdersProps {
    dataAllOrders: TOrders
}

const AllOrders: FC<AllOrdersProps> = ({dataAllOrders}) => {
    return (
        <div className={style.orders}>
            <div className={style.order}>
                {dataAllOrders.orders.map((order) => (
                    <Order
                        data={order}
                        key={order._id}/>
                ))}
            </div>
        </div>
    )
}

export default AllOrders;