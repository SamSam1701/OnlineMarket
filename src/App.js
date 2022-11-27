import {Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import Shop from './pages/Shop/Shop';
import ProductDetai from './pages/ProductDetail/ProductDetail';

function App() {

  // const ProtectedRoute = ({ children }) => {
  //   // if (!currentUser) {
  //   //   return <Navigate to="/login" />;
  //   // }

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
        // {
        //   path: "/profile/:id",
        //   element: <Profile />,
        // },
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
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
