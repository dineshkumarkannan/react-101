import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// Components
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Dinesh Kumar K",
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div id="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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
