import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Root } from "./lib/Root";
const router = createBrowserRouter(createRoutesFromElements(Root));

function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={<>Loading....</>}>
        <ToastContainer position="top-center" />
        <RouterProvider router={router}/>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
