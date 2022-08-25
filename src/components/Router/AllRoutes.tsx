import { Suspense } from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Loader from '../Loader/Loader';
import routes from '../../utils/routes';
import { RouterInterface } from '../../interfaces/routes.interface';


const AllRoutes = () => {
  return (
    //  <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
         {
           routes?.map((route:RouterInterface,idx:number)=>{
             const {path,element:Component,props} = route;
             return <>
                 <Route key={idx} path={path} element={<Component {...props} />}  />
             </>
           })
         }
        </Routes>
      </Suspense>
    // </Router>
  )
} 

export default AllRoutes;


