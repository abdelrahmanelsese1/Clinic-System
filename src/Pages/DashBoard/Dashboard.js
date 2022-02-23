import Header from './header'
import Sidebar from '../DashBoard/Sidebar'
import SignUp from '../signup';
import Home from '../../Components/Home';
import Surgery from '../DashBoard/surgery';
import Bill from '../DashBoard/Bill';
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Materials from '../DashBoard/materials';





const Dashboard = () => {
  return (
    <>
            <Router> 
            <Sidebar/>
                <Switch>
                    <Route path="/surgery" component={Surgery} />
                    <Route path="/bill" component={Bill} />
                    <Route path="/materials" component={Materials}/>
                </Switch>
            </Router>
    
 
    </>
  );
};

export default Dashboard;