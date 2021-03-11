//#region imports
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import * as security from "./security";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import ManageUsers from "./pages/ManageUsers";
import ManageProjects from "./pages/Projects/index";
import ManageTasks from "./pages/Tasks/index";
import LoginForm from "./login/index";
import Profile from "./pages/Setting/Index";
import Error404 from "./pages/Error404";
import { UserContext } from "./UserContext";
import { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/style.css";
//#endregion

function App() {
  const [Open, setOpen] = useState(true);
  const ToggleMobileNavbar = (isOpen) => {
    setOpen(isOpen);
  };
  const User = security.GetUser();
  if (!User) {
    return (
      <>
        <Router>
          <LoginForm />
          <Redirect to="/Login" />
        </Router>
      </>
    );
  } else
    return (
      <UserContext.Provider value={User}>
        <main>
          <Router>
            <div className="d-flex align-items-stretch">
              <Sidebar isOpen={Open} />
              <div className="page-content active">
                <Navbar isOpen={ToggleMobileNavbar} />
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route path="/ManageUsers" component={ManageUsers} />
                  <Route path="/ManageTasks" component={ManageTasks} />
                  <Route path="/ManageProjects" component={ManageProjects} />
                  <Route path="/Setting" component={Profile} />
                  <Route component={Error404} />
                </Switch>
              </div>
            </div>
          </Router>
        </main>
      </UserContext.Provider>
    );
}

export default App;
