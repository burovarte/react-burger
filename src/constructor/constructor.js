import React, {useState} from "react";
import style from './constructor.module.css';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import OrderDetails from "../components/order-details/order-details";
import Modal from '../components/modal/modal'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_DETAILS, LOAD_DETAILS} from "../services/action";
import {useLocation, useNavigate} from "react-router-dom";


function Constructor() {
    const ingredientsForBurger = useSelector((store) => store.mainReducer.ingredients)

    const dispatch = useDispatch();

    const [modalIngedients, setModalIngredients] = useState(null);
    const [isOpenModalIngedients, setIsOpenModalIngedients] = useState(false);
    const [isOpenModalOrder, setIsOpenModalOrder] = useState(false)

    function openModal({typeOfModal, Id}) {
        if (typeOfModal === "details") {
            setIsOpenModalIngedients(true);
            dispatch({
                type: LOAD_DETAILS,
                item: ingredientsForBurger.find((i) => i._id === Id),
            });
            setModalIngredients(ingredientsForBurger.find((i) => i._id === Id))
        } else {
            setIsOpenModalOrder(true)
        }
    }

    const location = useLocation();

    function closeModal() {
        dispatch({
            type: DELETE_DETAILS
        });
        setIsOpenModalIngedients(false);
        setIsOpenModalOrder(false)

    }

    return (<DndProvider backend={HTML5Backend}>
        <div className={style.items}>
            <BurgerIngredients openModal={openModal}/>
            <BurgerConstructor openModal={openModal}/>
        </div>

        {isOpenModalOrder && (<Modal onClose={closeModal}><OrderDetails/></Modal>)}
    </DndProvider>)
}

export default Constructor;