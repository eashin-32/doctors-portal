import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Appointment from './Components/Appointment/Apointment/Appointment';
import Login from './Components/Appointment/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/dashboard/appointment'>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/doctor/addDoctors">
           <AddDoctor/>
          </Route>
          <Route path='/login'>
              <Login></Login>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
