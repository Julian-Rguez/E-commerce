import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Home from "../components/home/home";
import About from "../Pages/About/About";
import NotFound from "../Pages/Not found/NotFound";
import Features from "../Pages/Features/Features";
import Pricing from "../Pages/Pricing/Pricing";
import Details from "../components/Detail/details";
import Validating from "../components/validating/validating";
import Shopping from "../components/Shopping/shopping";
import Contact from "../components/Contact/contact";
// import Nav from "../admin/Components/Nav/Nav";
import Users from "../admin/pages/Users/Users";
import Foods from "../admin/pages/Foods/Foods";
import Sales from "../admin/pages/Sales/Sales";
import Dashboard from "../admin/pages/Dashboard/Dashboard";
import { FoodForm } from "../admin/Components/Forms/FoodForm";

function RouteApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/detail/:id" element={<Details />} />
        <Route exact path="/validating" element={<Validating />} />
        <Route exact path="/shopping" element={<Shopping />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/dashboard" element={<Dashboard />}>
          {/* <Route index element={<Nav />} /> */}
          <Route path="users" element={<Users />} />
          <Route path="foods" element={<Foods />} />
          <Route path="sales" element={<Sales />} />
          <Route path="create-food" element={<FoodForm />} />
        </Route>

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteApp;
