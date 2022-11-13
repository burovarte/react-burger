import React, {useState, useEffect} from "react";
import style from './app.module.css';
import Appheader from "../app-header/app-header";
import Modal from '../modal/modal'
import IngredientDetail from '../ingredient-details/ingredien-details';
import {baseUrl} from "../../utils/base-url";
import {loadIngredients} from "../../services/action/main";
import {
    Routes,
    Route,
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
import {useDispatch} from '../../utils/hooks'
import Feed from "../../pages/feed/feed";
import Order from "../order/order";
import OrderDetails from "../orderDetails/orderDetails";

function App() {
    const [state, setState] = useState<{ ingredientsForBurger: never[], isLoading: boolean, hasError: boolean }>({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })

    const dispatch = useDispatch();

    useEffect(() => {
        const url = `${baseUrl}ingredients`;
        dispatch(loadIngredients(url))
    }, [dispatch])


    const location = useLocation();
    const navigate = useNavigate();
    let locationState = location.state;

    const closeModal = () => {
        navigate(-1);
    };



    return (
        <div className={style.app}>
            <Appheader/>
            <Routes location={locationState?.background || location}>
                <Route path="/" element={<Constructor/>}/>
                <Route path="/ingridient/:id" element={<IngredientDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/feed/:id' element={<OrderDetails></OrderDetails>} />
                <Route path='/feed' element={<Feed/>}/>
                <Route element={<Register/>} path="/register"/>
                <Route element={<ForgotPassword/>} path="/forgot-password"/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route element={<Profile/>} path="/profile"/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<div> Упс, ошибка</div>}/>
            </Routes>
            {locationState?.background && (
                <Routes>
                    <Route
                        path="/ingridient/:id"
                        element={
                            <Modal onClose={closeModal} title={'Детали ингредиента'}>
                                <IngredientDetail/>
                            </Modal>
                        }
                    />
                    <Route
                        path="/feed/:id"
                        element={
                            <Modal onClose={closeModal} >
                                <OrderDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </div>
    );
}

export default App;