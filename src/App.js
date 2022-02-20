import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import NoutFound from "./pages/NoutFound";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv/nkono/knowledge" element={<Knowledges />} />
            <Route path="/cv/nkono/contact" element={<Contact />} />
            <Route path="*" element={<NoutFound />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
