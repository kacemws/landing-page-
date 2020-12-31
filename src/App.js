import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/App.scss";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
