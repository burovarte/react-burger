import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {Route, Navigate} from 'react-router-dom';
import {getUser} from '../../services/action/authAction';

export function ProtectedRoute({children, ...rest}) {

    const dispatch = useDispatch();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const auth = useSelector((store) => store.authReducer.isAuthorized);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        await dispatch(getUser());
        setUserLoaded(true);
    };

    if (!isUserLoaded) {
        return null;
    }



    return (
        <Route
            {...rest}
            render={({location}) =>
                auth ? (
                    children
                ) : (<Route path='*' element={<Navigate to='/login' replace/>}/>
                    // <Redirect
                    //     to={{
                    //         pathname: '/login',
                    //         state: {from: location},
                    //     }}
                    // />
                )
            }
        />
    );
}