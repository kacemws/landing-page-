import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/App.scss";
import CodeConfirmation from "./Views/CodeConfirmation";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
