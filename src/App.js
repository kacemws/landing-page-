import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/App.scss";
import Signin from "./Views/Signin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/sign-up">
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "blue",
              }}
            ></div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
