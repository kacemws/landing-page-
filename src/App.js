import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <div
              style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "red",
              }}
            ></div>
          </Route>
          <Route path="/sign-up">
            <div
              style={{
                height: "100vh",
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
