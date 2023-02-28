import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./allPages/Home/homepage";
import Add from "./allPages/Add/addPage";
import Gig from "./allPages/Gig/gigPage";
import Gigs from "./allPages/Gigs/gigsPage";
import Login from "./allPages/Login/loginpage";
import Messages from "./allPages/Messages/messagesPage";
import Message from "./allPages/Message/messagePage";
import Mygigs from "./allPages/MyGigs/myGigsPage";
import Orders from "./allPages/Orders/ordersPage";
import Register from "./allPages/Register/registerpage";

import "./app.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/login",
          element: <Login />
        }, 
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/mygigs",
          element: <Mygigs />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}
export default App;

