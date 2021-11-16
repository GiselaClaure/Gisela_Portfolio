import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { EN, ES, Hero } from "./components"
import { CV } from "./CV/es-CV";
const { hero } = CV;


function App() {
  return (
    <Router>
      <div>
        <Hero hero={hero} />
      </div>
      <header style={{ "display": "flex", "justifyContent": "center" }}>
        <Link to="/">
          <button style={{
            "padding": "10px",
            "margin":"5px",
            "width":"50px",
            "fontWeight": "600",
            "fontSize": "15px",
            "color": "#6a6375fd",
            "backgroundColor": "#ffffff",
            "borderRadius": "25px",
            "border": "2px solid #6a6375fd",
            "cursor": "pointer"
          }} className="button">ES</button>
        </Link>
        <Link to="/en">
          <button style={{
            "padding": "10px",
            "margin":"5px",
            "width":"50px",
            "fontWeight": "600",
            "fontSize": "15px",
            "color": "#6a6375fd",
            "backgroundColor": "#ffffff",
            "borderRadius": "25px",
            "border": "2px solid #6a6375fd",
            "cursor": "pointer"
          }} className="button">EN</button>
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
