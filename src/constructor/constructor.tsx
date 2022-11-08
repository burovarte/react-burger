import React, {useState} from "react";
import style from './constructor.module.css';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import OrderDetails from "../components/order-details/order-details";
import Modal from '../components/modal/modal'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "../utils/hooks";
import {DELETE_DETAILS, LOAD_DETAILS} from "../services/action";
import {useLocation} from "react-router-dom";

interface IOpenModal {
    typeOfModal: string;
    Id?: string
}

function Constructor() {
    const ingredientsForBurger= useSelector((store) => store.mainReducer.ingredients)
    console.log(ingredientsForBurger)
    const dispatch = useDispatch();
    const auth = useSelector((store) => store.authReducer.isAuthorized);
    console.log("главная страница: ", auth)

    const [modalIngedients, setModalIngredients] = useState<null>(null);
    const [isOpenModalIngedients, setIsOpenModalIngedients] = useState<boolean>(false);
    const [isOpenModalOrder, setIsOpenModalOrder] = useState<boolean>(false)

    function openModal({typeOfModal, Id}: IOpenModal) {
        if (typeOfModal === "details") {
            setIsOpenModalIngedients(true);
            // dispatch({
            //     type: LOAD_DETAILS,
            //     item: ingredientsForBurger.find((i: { _id: string; }) => i._id === Id),
            // });
            setModalIngredients: void(ingredientsForBurger.find((i: { _id: string; }) => i._id === Id))
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