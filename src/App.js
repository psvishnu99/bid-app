import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import VechicleDetails from "./views/VehicleDetails";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Router>     
            
    <Switch>     
        <Route path="/" component={VechicleDetails} />    
    </Switch>
    </Router>
    </>
  );
}

export default App;
