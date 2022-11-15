import React, {FC} from "react";
import style from './ordersInfo.module.css';
import {TOrders} from "../../services/action/wsAction";

interface IOrderListProps {
    dataAllOrders: TOrders;
}

const OrderInfo: FC<IOrderListProps> = ({dataAllOrders}) => {
    console.log(dataAllOrders)
    return (
        <div className={`${style.list}  mt-25 mb-4 pr-4`}>
            <div className={style.columns}>
                <div className={style.done}>
                    <p className={`${style.link}  mb-4 text text_type_main-medium`}>
                        Готовы:
                    </p>
                    <div className={style.doneList}>
                        {dataAllOrders.orders.map((item) => {
                            if (item.status === 'done') {
                                return (
                                    <p key={item._id} className="text text_type_digits-default text_color_inactive">
                                        {String(item.number).padStart(6, '0')}
                                    </p>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
                <div className={style.work}>
                    <p className={`${style.link}  mb-4 text text_type_main-medium`}>
                        В работе:
                    </p>
                    {dataAllOrders.orders.map((item) => {
                        if (item.status !== 'done') {
                            return (
                                <p key={item._id} className="text text_type_digits-default">
                                    {String(item.number).padStart(6, '0')}
                                </p>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <p className="text text_type_main-medium mt-15">
                Выполнено за все время:
            </p>
            <p className="text text_type_digits-large">{dataAllOrders.total}</p>
            <p className="text text_type_main-medium mt-15">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large">{dataAllOrders.totalToday}</p>
        </div>
    );
};

export default OrderInfo;