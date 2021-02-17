import "./App.css";

import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
