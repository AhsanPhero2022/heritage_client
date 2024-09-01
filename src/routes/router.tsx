import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import BuyScreen from "../pages/BuyScreen";
import PropertyDetails from "../pages/PropertyDetails";

import AllProperties from "../pages/AllProperties";
import SignInPage from "../auth/SignInPage";
import SignUpPage from "../auth/SignUpPage";
import ManageRenLayout from "../components/layout/ManageRenLayout";

import CreateProperty from "../components/ManageRentals/CreateProperty";
import AllProperty from "../components/ManageRentals/AllProperty";
import UserProfilePage from "../components/ManageRentals/UserProfilePage";
import PropertyWin from "../components/ManageRentals/PropertyWin";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/buyScreen",
        element: <BuyScreen />,
      },
      {
        path: "/propertyDetails",
        element: <PropertyDetails />,
      },
      {
        path: "/allProperties",
        element: <AllProperties />,
      },
    ],
  },
  {
    path: "manage-rentals",
    element: <ManageRenLayout />,
    children: [
      {
        index: true,

        element: <UserProfilePage />,
      },
      {
        path: "property-win",
        element: <PropertyWin />,
      },
      {
        path: "create-property",
        element: <CreateProperty />,
      },
      {
        path: "all-property",
        element: <AllProperty />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
];

const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);

export default router;
