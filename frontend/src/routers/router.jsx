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
import UserReviews from '../pages/dashboard/user/UserReviews'
import UserProfile from '../pages/dashboard/user/UserProfile'
import AdminDMain from '../pages/dashboard/admin/dashboard/AdminDMain'
import AddProduct from "../pages/dashboard/admin/addProduct/AddProduct";
import ManageProduct from '../pages/dashboard/admin/manageProduct/ManageProduct'
import UpdateProduct from '../pages/dashboard/admin/manageProduct/UpdateProduct'
import ManageUser from '../pages/dashboard/admin/users/ManageUser'

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
      { path: 'reviews', element: <UserReviews /> },
      { path: 'profile', element: <UserProfile /> },

      // admin routes
			{
				path: 'admin',
				element: (
					<PrivateRoute role='admin'>
						<AdminDMain />
					</PrivateRoute>
				),
			},
			{
				path: 'manage-products',
				element: (
					<PrivateRoute role='admin'>
						<ManageProduct />
					</PrivateRoute>
				),
			},
      {
        path: "add-new-product",
        element: <PrivateRoute role="admin"><AddProduct/></PrivateRoute>
    },
    {
      path: 'update-product/:id',
      element: (
        <PrivateRoute role='admin'>
          <UpdateProduct />
        </PrivateRoute>
      ),
    },
      {
        path: "manage-users",
        element: (
          <PrivateRoute role="admin">
            <ManageUser />
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