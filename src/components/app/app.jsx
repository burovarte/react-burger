import React, {useState, useEffect} from "react";
import style from './app.module.css';
import Appheader from "../app-header/app-header";
import Modal from '../modal/modal'
import IngredientDetail from '../ingredient-details/ingredien-details';
import {baseUrl} from "../../utils/base-url";
import {useDispatch} from 'react-redux';
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

function App() {
    const [state, setState] = useState({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })

    const dispatch = useDispatch();

    useEffect(() => {
        const url = `${baseUrl}ingredients`;
        dispatch(loadIngredients(url, setState, dispatch))
    }, [dispatch])


    const location = useLocation();
    const navigate = useNavigate();
    let locationState = location.state;

    const closeModal = () => {
        navigate(-1);
    };

    return (
        <div className={style}>
            <Appheader/>
            <Routes location={locationState?.background || location}>
                <Route path="/" element={<Constructor/>}/>
                <Route path="/ingridient/:id" element={<IngredientDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route element={<Profile/>} path="/profile" exact/>
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
                </Routes>
            )}
        </div>
    );
}

export default App;