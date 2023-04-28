import { createBrowserRouter } from "react-router-dom";
// import Main from "../layouts/Main";
// import Home from "../pages/Home";
// import Hotel from "../pages/Hotel";
import { Suspense, lazy } from "react";

const Main = lazy(() => import("../layouts/Main"));
const Home = lazy(() => import("../pages/Home"));
const Hotel = lazy(() => import("../pages/Hotel"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div>Loadding...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "hotel",
                element: (
                    <Suspense fallback={<div>Hotel Loadding...</div>}>
                        <Hotel />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default router;
