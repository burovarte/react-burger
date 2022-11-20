import React, {FC} from 'react';
import style from './personalOrders.module.css';
import {TOrders} from "../../services/action/wsAction";
import Order from '../personalOrder/personalOrder';

interface IFeedContentProps {
    data: TOrders
}

const PersonalOrders: FC<IFeedContentProps> = ({data}) => {
    return (
        <section>
            <div className={style.orders}>
                <div className={`${style.order}   mt-6`}>
                    {data.orders.map((item) => (
                        <Order
                            data={item}
                            key={item._id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalOrders;