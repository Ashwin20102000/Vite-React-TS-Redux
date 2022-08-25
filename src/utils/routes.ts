// import { RouteMatch } from "react-router-dom";

import AshForm from "../components/AshForm/AshForm";
import Counter from "../components/Counter/Counter";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

const routes:any = [
  {
    path: '/home',
    element: Home,
  },
   {
    path: '/',
    element:Home
  },
  {
    path:'/home/counter',
    element:Counter
  },
   {
    path:'/home/counter/async',
    element:Counter,
    props:{isAsync:true}
  },
   {
    path:"/home/ashform",
    element:AshForm,
  },
  {
    path:'/home/layout',
    element:Layout,
  }
]

export default routes;