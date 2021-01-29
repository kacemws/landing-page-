import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/App.scss";
import CodeConfirmation from "./Views/CodeConfirmation";
import RessetPassword from "./Views/ResetPassword";
import ChangePassword from "./Views/ChangePassword";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/phone-confirmation">
            <CodeConfirmation />
          </Route>
          <Route path="/reset-password/:id">
            <ChangePassword />
          </Route>
          <Route path="/reset-password">
            <RessetPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
