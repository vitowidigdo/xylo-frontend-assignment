import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import Sticky from "sticky-js";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Helmet } from "react-helmet-async";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky("[data-sticky]");
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Helmet titleTemplate="%s - HeloPro" defaultTitle="HeloPro">
        <meta name="description" content="HeloPro" />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
