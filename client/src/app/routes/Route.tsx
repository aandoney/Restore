import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import LoginForm from "../../features/account/LoginForm";
import RegisterForm from "../../features/account/registerForm";
import RequreAuth from "./RequreAuth";
import CheckoutSuccess from "../../features/checkout/CheckoutSuccess";
import OrderDetailedPage from "../../features/orders/OrderDetailedPage";
import OrdersPage from "../../features/orders/OrdersPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <RequreAuth />, children: [
                    {
                        path: 'checkout', element: <CheckoutPage />
                    },
                    {
                        path: 'checkout/success', element: <CheckoutSuccess />
                    },
                    {
                        path: 'orders', element: <OrdersPage />
                    },
                    {
                        path: 'orders/:id', element: <OrderDetailedPage />
                    },
                ]
            },
            {
                path: '', element: <HomePage />
            },
            {
                path: 'catalog', element: <Catalog />
            },
            {
                path: 'catalog/:id', element: <ProductDetails />
            },
            {
                path: 'about', element: <AboutPage />
            },
            {
                path: 'contact', element: <ContactPage />
            },
            {
                path: 'basket', element: <BasketPage />
            },
            {
                path: 'server-error', element: <ServerError />
            },
            {
                path: 'login', element: <LoginForm />
            },
            {
                path: 'register', element: <RegisterForm />
            },
            {
                path: 'not-found', element: <NotFound />
            },
            {
                path: '*', element: <Navigate replace to='/not-found' />
            }
        ]
    }
])