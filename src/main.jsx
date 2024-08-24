import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Login from "./components/Login/Login.jsx";
import Getstarted from "./components/Getstarted/Getstarted.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Getstarted" element={<Getstarted />} />
      <Route path="/contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="/github" element={<Github />} />

      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="*" element={<div>no found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
