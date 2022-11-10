import ErrorPage from "elements/layout/Error/ErrorPage";
import ItemPage from "elements/layout/Main/Item/ItemPage";
import Catalog from "elements/layout/Main/Catalog/Catalog";
import Home from "elements/layout/Main/Home/Home";
import RootLayout from "elements/layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "elements/layout/Main/Cart/Cart";
import Checkout from "elements/layout/Main/Cart/Checkout/Checkout";
import Success from "elements/layout/Main/Cart/Checkout/Success/Success";
import { useSelector } from "react-redux";
import { getListOfProducts } from "data/redux/slice";




export default function Router() {
    return <RouterProvider router={createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <RootLayout><ErrorPage /></RootLayout>,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/catalog",
                    element: <Catalog />
                },
                {
                    path: "/catalog/:id",
                    loader: ({ params }) => Number(params.id),
                    element: <ItemPage />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/cart/checkout",
                    element: <Checkout />
                },
                {
                    path: "/cart/success",
                    element: <Success />
                }

            ]
        }


    ])} />;
}