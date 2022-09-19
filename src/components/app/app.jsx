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
import {loadIngredients} from "../../services/action/main";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../../pages/login/login'
import Register from '../../pages/register/register';
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import Profile from "../../pages/profile/profile";
import {ProtectedRoute} from "../protectedRoute/protectedRoute";
import ResetPassword from "../../pages/reset-password/reset-password";

function App() {
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

    return (
        <div className={style.App}>
            <Router>
            <Switch>
                <DndProvider backend={HTML5Backend}>
                    <Route path="/" exact={true}>
                        <Appheader/>
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
                    </Route>

                    <Route path="/login">
                        <Appheader />
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Appheader />
                        <Register />
                    </Route>
                    <Route path="/forgot-password">
                        <Appheader />
                        <ForgotPassword />
                    </Route>
                    <Route path="/reset-password">
                        <Appheader />
                        <ResetPassword />
                    </Route>
                    <ProtectedRoute path="/profile">
                        <Appheader />
                        <Profile />
                    </ProtectedRoute>
                </DndProvider>
            </Switch>
        </Router>
        </div>

    )
}

export default App;