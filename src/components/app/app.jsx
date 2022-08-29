import React, {useState, useEffect, useContext} from "react";
import style from './app.module.css';
import Appheader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal'
import IngredientDetail from '../ingredient-details/ingredien-details';
import OrderDetails from "../order-details/order-details";
import {DataApp, OrderNumber} from '../../app-context/app-context';
import {baseUrl} from "../../utils/base-url";
import {checkResponse} from "../../utils/check-response";
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_INGREDIENTS, LOAD_DETAILS, DELETE_DETAILS, ORDER_CLEAR} from "../../services/action";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    const [state, setState] = useState({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })
    const ingredientsForBurger = useSelector((store) => store.mainReducer.ingredients)
    const [orderNumber, setOrderNumber] = useState();

    const url = `${baseUrl}ingredients`;

    const dispatch = useDispatch();

    useEffect(() => {
        fetch(url)
            .then(checkResponse)
            .then((res) => {
                dispatch({
                    type: LOAD_INGREDIENTS,
                    data: res.data,
                });
            })
            .catch((error) => {
                console.log(error)
                setState((state) => ({
                    ...state,
                    isLoading: false,
                    hasError: true,
                }));
            });
    }, []);

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

    return (
        <div className={style.App}>
            <DndProvider backend={HTML5Backend} >
            {/*<OrderNumber.Provider value={{orderNumber, setOrderNumber}}>*/}
            {/*    <DataApp.Provider value={state.ingredientsForBurger}>*/}
                    <Appheader/>
                    <main className={style.items}>
                        <BurgerIngredients openModal={openModal}/>
                        <BurgerConstructor openModal={openModal}/>
                    </main>
                {/*</DataApp.Provider>*/}
                {isOpenModalIngedients && (
                    <Modal onClose={closeModal} title={'Детали ингредиента'}>
                        <IngredientDetail ingredient={modalIngedients}/>
                    </Modal>
                )}
                {isOpenModalOrder && (<Modal onClose={closeModal}><OrderDetails/></Modal>)}
            {/*</OrderNumber.Provider>*/}
            </DndProvider>
        </div>
    )
}

export default App;