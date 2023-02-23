import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import test1 from "./test/test1/test1";
import Home from "./pages/home/Home";
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

