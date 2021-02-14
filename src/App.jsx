import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Faq from "./pages/Faq";
import About from "./pages/About";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

function App() {
    return (
        <Router>
            <Header />
            <Route exact path="/about" component={About} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/">
                <Redirect to="/about" />
            </Route>
            <Footer />
        </Router>
    );
}

export default App;
