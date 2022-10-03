import React, {useState, useEffect, useContext, Fragment} from "react";
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
import {
    BrowserRouter,
    Routes,
    Route,
    Router,
    useLocation,
    useNavigate
} from "react-router-dom";
import Login from '../../pages/login/login'
import Register from '../../pages/register/register';
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import Profile from "../../pages/profile/profile";
import {ProtectedRoute} from "../protectedRoute/protectedRoute";
import ResetPassword from "../../pages/reset-password/reset-password";
import Constructor from "../../constructor/constructor";

function App() {
    const [state, setState] = useState({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })
    // const ingredientsForBurger = useSelector((store) => store.mainReducer.ingredients)
    // const [orderNumber, setOrderNumber] = useState();


    const dispatch = useDispatch();

    useEffect(() => {
        const url = `${baseUrl}ingredients`;
        // Отправляем экшен-функцию
        dispatch(loadIngredients(url, setState, dispatch))
    }, [])

    //
    // const [modalIngedients, setModalIngredients] = useState(null);
    // const [isOpenModalIngedients, setIsOpenModalIngedients] = useState(false);
    // const [isOpenModalOrder, setIsOpenModalOrder] = useState(false)

    // function openModal({typeOfModal, Id}) {
    //     if (typeOfModal === "details") {
    //         setIsOpenModalIngedients(true);
    //         dispatch({
    //             type: LOAD_DETAILS,
    //             item: ingredientsForBurger.find((i) => i._id === Id),
    //         });
    //         setModalIngredients(ingredientsForBurger.find((i) => i._id === Id))
    //     } else {
    //         setIsOpenModalOrder(true)
    //     }
    // }

    // function closeModal() {
    //     dispatch({
    //         type: DELETE_DETAILS
    //     });
    //     setIsOpenModalIngedients(false);
    //     setIsOpenModalOrder(false)
    // }
    const location = useLocation();
    const navigate = useNavigate();
    let locationState = location.state;

    const closeModal = () => {
        navigate(-1);
    };

    return (
        <div className={style.App}>
            {/*<DndProvider backend={HTML5Backend}>*/}
            <Appheader />
            <Routes location={locationState?.background || location}>
                <Route path="/" element={<Constructor />}></Route>

                <Route path="/ingridient/:id" element={<IngredientDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route element={<ProtectedRoute />}>
                    <Route element={<Profile />} path="/profile" exact />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route element={<Modal onClose={closeModal}>
                        <OrderDetails />
                    </Modal>} path="/order-details" exact />
                </Route>
                <Route path="*" element={<div> Упс, ошибка</div>} />
            </Routes>
            {locationState?.background && (
                <Routes>
                    <Route
                        path="/order-details"
                        element={

                                <Modal onClose={closeModal}>
                                    <OrderDetails />
                                </Modal>
                        }
                        exact
                    ></Route>
                    <Route
                        path="/ingridient/:id"
                        element={
                            <Modal onClose={closeModal} title={'Детали ингредиента'}>
                                <IngredientDetail />
                            </Modal>
                        }
                    ></Route>
                </Routes>
            )}
        </div>
    );

    // const location = useLocation();
    // const navigate = useNavigate();
    // let background = location.state && location.state.background;
    //
    // const closeModal = () => {
    //     navigate(-1);
    // };
    //
    // return (
    //     <div className={style.App}>
    //         {/*<DndProvider backend={HTML5Backend}>*/}
    //         <Appheader/>
    //         <Routes location={background || location}>
    //             <Route path="/" element={<Constructor/>}>
    //                 {background && (
    //                     <Route
    //                         path="order-details"
    //                         element={
    //                             <ProtectedRoute>
    //                                 <Modal onClose={closeModal}>
    //                                     <OrderDetails/>
    //                                 </Modal>
    //                             </ProtectedRoute>
    //                         } exact
    //                     ></Route>
    //                 )}
    //
    //                 {background && (
    //                     <Route
    //                         path="/ingridient/:id"
    //                         element={
    //                             <Modal onClose={closeModal} title={'Детали ингредиента'}>
    //                                 <IngredientDetail/>
    //                             </Modal>}
    //
    //                         exact></Route>
    //                 )}
    //             </Route>
    //
    //             <Route path="ingridient/:id" element={<IngredientDetail/>}></Route>
    //             <Route path="/login" element={<Login/>}/>
    //             <Route path="/register" element={<Register/>}/>
    //             <Route path="/forgot-password" element={<ForgotPassword/>}/>
    //             <Route path="/reset-password" element={<ResetPassword/>}/>
    //             <Route element={<ProtectedRoute/>}>
    //                 <Route element={<Profile/>} path='/profile' exact/>
    //             </Route>
    //             <Route path="/login" element={<Login/>}/>
    //             <Route path="*" element={<div> Упс, ошибка</div>}/>
    //         </Routes>
    //     </div>
    // )
}

export default App;