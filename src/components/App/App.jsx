import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { primaryInput } from "detect-it";
import HomePage from "../../pages/HomePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";
import AccountPage from "../../pages/AccountPage";
import MediaPage from "../../pages/MediaPage";
import AboutProject from "../../pages/AboutProject";

const App = () => {
  useEffect(() => {
    if (primaryInput === "touch") {
      document.body.classList.add("touch");
    } else {
      document.body.classList.add("no-touch");
    }
  }, []);
  return (
    <Router>
      <div className="page-content">
        <Header />
        <main className="page-main">
          <Switch>
            <Route path="/project">
              <AboutProject/>
            </Route>
            <Route path="/media">
              <MediaPage />
            </Route>
            <Route path="/account">
              <AccountPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
