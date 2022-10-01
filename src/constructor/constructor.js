import React, {useState, useEffect, useContext, Fragment} from "react";
import style from '../components/app/app.module.css';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import IngredientDetail from '../components/ingredient-details/ingredien-details';
import OrderDetails from "../components/order-details/order-details";
import Modal from '../components/modal/modal'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {baseUrl} from "../utils/base-url";
import {loadIngredients} from "../services/action/main";
import {DELETE_DETAILS, LOAD_DETAILS} from "../services/action";


function Constructor() {
    const [state, setState] = useState({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })
    const ingredientsForBurger = useSelector((store) => store.mainReducer.ingredients)
    const [orderNumber, setOrderNumber] = useState();


    const dispatch = useDispatch();

    useEffect(() => {
        const url = `${baseUrl}ingredients`;
        // Отправляем экшен-функцию
        dispatch(loadIngredients(url, setState, dispatch))
    }, [])


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

    function closeModal() {
        dispatch({
            type: DELETE_DETAILS
        });
        setIsOpenModalIngedients(false);
        setIsOpenModalOrder(false)
    }
    return(<DndProvider backend={HTML5Backend}>
        <main className={style.items}>
            <BurgerIngredients openModal={openModal}/>
            <BurgerConstructor openModal={openModal}/>
        </main>
        {isOpenModalIngedients && (
            <Modal onClose={closeModal} title={'Детали ингредиента'}>
                <IngredientDetail ingredient={modalIngedients}/>
            </Modal>
        )}
        {isOpenModalOrder && (<Modal onClose={closeModal}><OrderDetails/></Modal>)}
    </DndProvider>)
}

export default Constructor;