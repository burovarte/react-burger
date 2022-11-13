import React, { FC, ReactNode } from 'react';
import style from './allOrders.module.css';
import {TOrders} from "../../services/action/wsAction";
import OrderDetails from "../order-details/order-details";
import Order from '../order/order'
import IngredientDetail from "../ingredient-details/ingredien-details";
import Modal from "../modal/modal";


interface AllOrdersProps {
    dataAllOrders: TOrders
}



const AllOrders: FC<AllOrdersProps> = ({dataAllOrders}) => {
    return(
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