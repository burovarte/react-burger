import React, {useState, useEffect} from "react";
import style from './app.module.css';
import Appheader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal'
import IngredientDetail from '../ingredient-details/ingredien-details';
import OrderDetails from "../order-details/order-details";

function App() {
    const [state, setState] = useState({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })

    const url = 'https://norma.nomoreparties.space/api/ingredients ';

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`);
            })
            .then((res) => {
                setState((state) => ({
                    ...state,
                    isLoading: true,
                    ingredientsForBurger: res.data,
                }));
            })
            .catch(() => {
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
        console.log(modalIngedients)
    }

    function closeModal() {
        setIsOpenModalIngedients(false);
        setIsOpenModalOrder(false)
    }

    console.log(state)
    console.log("kuk" + modalIngedients)

    return (
        <div className={style.App}>
            <Appheader/>
            <div className={style.items}>
                <BurgerIngredients dataBurgers={state.ingredientsForBurger} openModal={openModal}/>
                <BurgerConstructor dataBurgers={state.ingredientsForBurger} openModal={openModal}/>
            </div>
            {isOpenModalIngedients && (
                <Modal onClose={closeModal} title={'Детали ингредиента'}>
                    <IngredientDetail ingredient={modalIngedients} />
                </Modal>
            )}
            {isOpenModalOrder && (<Modal onClose={closeModal}><OrderDetails/></Modal>)}
        </div>
    )

}

export default App;