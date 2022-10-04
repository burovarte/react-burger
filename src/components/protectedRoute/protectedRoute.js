import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {Route, Navigate, Outlet} from 'react-router-dom';
import {getUser} from '../../services/action/authAction';

// export function ProtectedRoute({children, ...rest}) {
export function ProtectedRoute() {
    const dispatch = useDispatch();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const auth = useSelector((store) => store.authReducer.isAuthorized);



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
        auth ? <Outlet /> : <Navigate to="/login" replace/>
    )


    // return (
    //     <Route
    //         {...rest}
    //         render={({location}) =>
    //             auth ? (
    //                 children
    //             ) : (<Route path='/login' element={<Navigate to='/login' replace/>}/>
    //                 // <Redirect
    //                 //     to={{
    //                 //         pathname: '/login',
    //                 //         state: {from: location},
    //                 //     }}
    //                 // />
    //             )
    //         }
    //     />
    // );
}