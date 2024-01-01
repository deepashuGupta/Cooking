import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu/ResMenu";
import stateStore from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import SearchRes from "./components/SearchRes/SearchRes";
import Footer from "./components/Footer";

const GroceryStore = lazy(() => import("./components/GroceryStore"));

const App = () => {
  console.log(stateStore);
  return (
    <div className="app">
      <Provider store={stateStore}>
        <Header />
        <div style={{ minHeight: "calc(100vh - 320px)" }}>
          <Outlet />
        </div>
        <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <SearchRes />,
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
        path: "/insta_mart",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <GroceryStore />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
