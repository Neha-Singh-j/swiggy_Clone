import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx';
import Offer from './components/Offer.jsx';
import About from './components/About.jsx';
import SignIn from './components/SignIn.jsx';
import Cart from './components/Cart.jsx';
import Help from "./components/Help.jsx";
import Error from "./components/Error.jsx";
import RestaurantDetails from "./components/RestaurantDetails.jsx";

const appRouter=createBrowserRouter([
 
  {
    path:'/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path:'/',
        element: <Body/>
      },
      {
        path:'/about',
        element: <About/>
      },
     
      {
        path:'/signin',
        element: <SignIn />
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path:'/help',
        element: <Help />
      },
      {
        path:'/offer',
        element: <Offer />
      },
      {
        path:'/restaurant/:id',
        element: <RestaurantDetails />
      }
    ]
  }
  
]); // have multiple object inside this error we tell about on which path whihc elemnt goes to appear

createRoot(document.getElementById('root')).render(
 <RouterProvider router={ appRouter} >
  <App />
 </RouterProvider>
)

