import {useSelector} from "../../utils/hooks";
import {Navigate, Outlet, useLocation, useNavigate} from 'react-router-dom';


export function ProtectedRoute() {
    const location = useLocation();
    const auth = useSelector((store) => store.authReducer.isAuthorized);

    return (
        // @ts-ignore
        auth ? <Outlet/> : <Navigate to={"/login"} state={{from: location}}/>)
}