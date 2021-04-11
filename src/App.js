import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Developers from './pages/AddDeveloper';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search/:id" exact component={Home} />
                <Route path="/:id" exact component={Developers} />
            </Switch>
        </Router>
    );
}

export default App;
