import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import  AddMenu  from "./components/AddMenu";
import ListMenu from "./components/ListMenu";
import  UpdateMenu from "./components/UpdateMenu";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          Restaurant Menu
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/add/"} className="nav-link">
              Add a menu
            </Link>
          </li>
        </div>
      </nav>

      <div className="container m-10">
        <Routes>
          <Route path="/add/" element={<AddMenu />} />
          <Route path="/" element={<ListMenu />} />
          <Route path="/menu/:id/update/" element={<UpdateMenu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
