import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {Route, Navigate, Outlet, useLocation} from 'react-router-dom';
import {getUser} from '../../services/action/authAction';

export function ProtectedRoute() {
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

    if (!isUserLoaded) {
        return null;
    }

    return (
        auth ? <Outlet/> : <Navigate to={'/login'} />
    )
}