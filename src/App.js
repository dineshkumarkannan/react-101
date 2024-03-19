import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// Components
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
        </div>
    );
};

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

async function importOrReload(dynamicImportFn) {
    try {
        return dynamicImportFn();
    } catch (e) {
        window.location.reload();
    }
}

const appRouter = createBrowserRouter([
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
                ),
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:resid",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const app = ReactDOM.createRoot(document.getElementById("root"));
// app.render(<AppLayout />);

app.render(<RouterProvider router={appRouter} />);
