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

function App() {
    const [state, setState] = useState({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })

    const [orderNumber, setOrderNumber] = useState();

    const url = `${baseUrl}ingredients`;

    useEffect(() => {
        fetch(url)
            .then(checkResponse)
            .then((res) => {
                setState((state) => ({
                    ...state,
                    isLoading: true,
                    ingredientsForBurger: res.data,
                }));
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
            setModalIngredients(state.ingredientsForBurger.find((i) => i._id === Id))
        } else {
            setIsOpenModalOrder(true)
        }
    }

    function closeModal() {
        setIsOpenModalIngedients(false);
        setIsOpenModalOrder(false)
    }

    return (
        <div className={style.App}>
            <OrderNumber.Provider value={{orderNumber, setOrderNumber}}>
                <DataApp.Provider value={state.ingredientsForBurger}>
                    <Appheader/>
                    <main className={style.items}>
                        <BurgerIngredients openModal={openModal}/>
                        <BurgerConstructor openModal={openModal}/>
                    </main>
                </DataApp.Provider>
                {isOpenModalIngedients && (
                    <Modal onClose={closeModal} title={'Детали ингредиента'}>
                        <IngredientDetail ingredient={modalIngedients}/>
                    </Modal>
                )}
                {isOpenModalOrder && (<Modal onClose={closeModal}><OrderDetails/></Modal>)}
            </OrderNumber.Provider>
        </div>
    )
}

export default App;