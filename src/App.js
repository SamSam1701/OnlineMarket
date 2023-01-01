import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import Shop from './pages/Shop/Shop';
import ProductDetai from './pages/ProductDetail/ProductDetail';
import Admin from './pages/Admin/Admin';

import {createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';

import { AuthContext } from "./context/AuthContext";
import {useContext} from 'react';
import CheckOut from './pages/CheckOut/CheckOut';

function App() {
  // const {currentUser} = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        //   {/* <Layout /> */}
        // </ProtectedRoute>
        <Home/>
      ),

      children: [
        {
          path: "/",
          element: <Home />,
        },

      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/productdetail",
      element: <ProductDetai />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },

  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
