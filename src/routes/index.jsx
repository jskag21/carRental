import React, { useRef } from 'react';
import {Navigate} from "react-router-dom";
import Enviroment from '../pages/Environment';
import Home from '../pages/Home';
import Privacy from '../pages/Privacy';

export default [
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'',
      element:<Navigate to ="/home"/>
    },
    {
      path:'/privacy',
      element:<Privacy />
    },
    {
      path:'/environment',
      element:<Enviroment />
    },
    
    
    // {
    //     path:'/about',
    //     element:<About/>
    //   },
 

]