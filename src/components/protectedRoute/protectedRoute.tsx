import {useDispatch, useSelector} from "../../utils/hooks";
import {useEffect, useState} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {getUser} from '../../services/action/authAction';



export function ProtectedRoute() {
    const dispatch = useDispatch();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const location = useLocation();
    const auth = useSelector((store) => store.authReducer.isAuthorized);
    const init = async () => {
        await dispatch(getUser());
        setUserLoaded(true);
    };

    useEffect(() => {
        init();
    }, []);


    return (
         // @ts-ignore
        auth ? <Outlet/> : <Navigate to={{pathname: "/login", state: {from: location}}}/>
    )
}