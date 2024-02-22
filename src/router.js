import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/user/homepage';
import {ROUTER} from './utils/router'
import Profilepage from './pages/user/profilepage';
import MasterLayout from './pages/user/theme/masterLayout';
const renderUserRouter = () =>{
    const userRouters = [
        {
            path:ROUTER.USER.HOME,
            component: <Homepage/>
        },
        {
            path:ROUTER.USER.PROFILE,
            component: <Profilepage/>
        }
    ]
    return (
      <MasterLayout>
        <Routes>
            {
                userRouters.map((item,key)=>( <Route key={key} path={item.path} element={item.component}/>))
            }
        </Routes>
        </MasterLayout>
    
    );
}
const RouterCustom = ()=>{
    return renderUserRouter();
}
export  default RouterCustom;