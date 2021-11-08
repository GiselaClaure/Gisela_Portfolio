import { Link, Route,Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import {EN,ES} from "./components"


function App() {
  return (
    <Router>
    <header style={{"display": "flex" , "justify-content": "center"}}>
    <Link to="/">
      {<button style={{"border": "solid 2px #4c445aaf", "background":"transparent", "margin":"10px", "padding":"10px"}} className="button">ES</button>}
    </Link>
    <Link to="/en">
      <button style={{"border": "solid 2px #4c445aaf", "background":"transparent", "margin":"10px", "padding":"10px"}} className="button">EN</button>
    </Link>
  </header>
    <main>
      <Switch>
      <Route exact path="/" component={ES} />
      <Route path="/en" component={EN} />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
