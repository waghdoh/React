import React , {lazy, Suspense}from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu, { restaurantMenuLoader } from "./components/RestaurantsMenu";
// import Groceries from "./components/Groceries";


// lazy loading
// chunckinh
// dynamic loading
// ondemand import
const Groceries = lazy(() => import("./components/Groceries"))
const About = lazy(() => import("./components/About"))
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                   <Suspense fallback={<h1>Loading...</h1>}>
                       <About />
                   </Suspense>
                )
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/groceries",
                element:(
                   <Suspense fallback={<h1>Loading...</h1>}>
                       <Groceries />
                   </Suspense>
                )
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
                loader: restaurantMenuLoader,
            }
        ],
        errorElement: <Error />,
    },
]);


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);