import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/Loader";
import MyProduct from "../pages/MyProduct";
import Shope from "../pages/Shope";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        HydrateFallback: Loader,
      },
      {
        path: "/shop",
        element: <Shope></Shope>,
        HydrateFallback: Loader,
      },

      {
        path: "/blog",
        element: <Blogs />,
        HydrateFallback: Loader,
      },
      {
        path: "/my-booking",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/contact",
        element: <Contact />,
        HydrateFallback: Loader,
      },
      {
        path: "/about",
        element: <About></About>,
        HydrateFallback: Loader,
      },
    ],
  },
]);

export default router;
