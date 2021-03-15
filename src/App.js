import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SinglePage from "./containers/SinglePage/SinglePage";

function App() {
  return (
    <>
      <div className="App"></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/single-page/:name" component={SinglePage} />
        <Route path="/" render={() => <h1>404</h1>} />
      </Switch>
    </>
  );
}

export default App;
