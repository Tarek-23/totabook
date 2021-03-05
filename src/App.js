import "./App.css";

import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Rsidebar from "./Rsidebar.js";
import { useState } from "react";
import Login from "./Login";
import { useAuthValue } from "./AuthProvider";

function App() {
  const [{ user }, setUser] = useAuthValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Rsidebar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
