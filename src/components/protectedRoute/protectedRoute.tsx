import {useSelector} from "../../utils/hooks";
import {Navigate, Outlet, useLocation} from 'react-router-dom';


export function ProtectedRoute() {
    const location = useLocation();
    const auth = useSelector((store) => store.authReducer.isAuthorized);

    return (auth ? <Outlet/> : <Navigate to={"/login"} state={{from: location}}/>)
}