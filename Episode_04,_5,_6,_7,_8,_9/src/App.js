import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Cart from "../components/Cart";
import RestaurantMenu from "../components/RestaurantMenu";
import UserClass from "../components/UserClass";
import Login from "../components/Login";
import Register from "../components/Register";
import ProtectedRoutes from "./services/ProtectedRoutes";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
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
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
          },

        ],
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
