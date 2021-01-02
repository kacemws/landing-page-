import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/App.scss";
const Signin = React.lazy(() => import("./Views/Signin"));
const Signup = React.lazy(() => import("./Views/Signup"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/sign-up">
              <Signup />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
