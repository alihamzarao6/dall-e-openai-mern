import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { Home, CreatePost } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
