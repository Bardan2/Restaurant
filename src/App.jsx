import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Reservation from "./components/reservation/Reservation";
import Contact from "./components/contact/Contact";
import Alldishes from "./components/menu/Alldishes";
import SingleItems from "./components/menu/SingleItems";
import FeedbackSent from "./components/ThanksCom/FeedbackSent";
import Booking from "./components/ThanksCom/Booking";
import OrderConfirm from "./components/ThanksCom/OrderConfirm";
import LoginPage from "./components/Auth/LoginPage";
import SignUpPage from "./components/Auth/SignUpPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/home/about" Component={About} />
          <Route exact path="/home/menu" Component={Menu} />
          <Route exact path="/home/reservation" Component={Reservation} />
          <Route exact path="/home/contact" Component={Contact} />
          <Route exact path="/home/menu/alldishes" Component={Alldishes} />
          <Route exact path="/home/menu/singleItems" Component={SingleItems} />
          <Route exact path="/home/contact/feedback" Component={FeedbackSent} />
          <Route exact path="/home/contact/booking" Component={Booking} />
          <Route exact path="/home/contact/orderconfirm" Component={OrderConfirm} />
          <Route exact path="/home/contact/login" Component={LoginPage} />
          <Route exact path="/home/contact/sign-up" Component={SignUpPage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
