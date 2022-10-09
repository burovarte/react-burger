import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {Route, Navigate, Outlet, useLocation} from 'react-router-dom';
import {getUser} from '../../services/action/authAction';
import Profile from "../../pages/profile/profile";

export function ProtectedRoute(anonymous = false ) {
    const dispatch = useDispatch();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const location = useLocation();
    const auth = useSelector((store) => store.authReducer.isAuthorized);
    const from = location.state?.from || "/";
    const init = async () => {
        await dispatch(getUser());
        setUserLoaded(true);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        auth ? <Profile/> :  <Navigate to={{ pathname: "/login", state: { from: location } }} />
    )
}