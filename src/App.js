import "./App.css";

import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Rsidebar from "./Rsidebar.js";

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
        <Rsidebar />
      </div>
    </div>
  );
}

export default App;
