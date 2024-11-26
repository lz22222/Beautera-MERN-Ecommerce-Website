import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react';
import Home from '../pages/home/Home';
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import Login from '../components/Login'
import Register from '../components/Register'
import PaymentSuccess from '../components/PaymentSuccess'
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import PrivateRoute from './PrivateRoute'
import UserDMain from '../pages/dashboard/user/dashboard/UserDMain'
import UserOrders from '../pages/dashboard/user/UserOrders'
import OrderDetails from '../pages/dashboard/user/OrderDetails'
import UserPayments from '../pages/dashboard/user/UserPayments'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:categoryName", element: <CategoryPage />  },
      { path: "/search", element: <Search /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:id", element: <SingleProduct /> },
      {
				path: '/success',
				element: <PaymentSuccess />,
			},
      {
				path: '/orders/:orderId',
				element: <OrderDetails />,
			},
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
		path: '/register',
		element: <Register />,
	},
  {
    path: '/dashboard',
    element: <DashboardLayout />, // TODO: user private routes here
    children: [
      // user routes
      { path: '', element: <UserDMain /> },
      { path: 'orders', element: <UserOrders /> },
      { path: 'payments', element: <UserPayments /> },
      { path: 'profile', element: <div>User Profile</div> },
      { path: 'reviews', element: <div>User Reviews</div> },

      // admin routes
      {
        path: "admin",
        element: (
          <PrivateRoute role="admin">
            <div>Admin Main</div>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <PrivateRoute role="admin">
            <div>Manage Products</div>
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute role="admin">
            <div>Add Product</div>
          </PrivateRoute>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRoute role="admin">
            <div>Update Product</div>
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute role="admin">
            <div>All Users</div>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <PrivateRoute role="admin">
            <div>Manage Orders</div>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;