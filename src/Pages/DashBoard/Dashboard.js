import Header from './header'
import Sidebar from '../DashBoard/Sidebar'
import SignUp from '../signup';
import Home from '../../Components/Home';
import Surgery from '../DashBoard/surgery';
import Bill from '../DashBoard/Bill';
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';





const Dashboard = () => {
  return (
    <>
            <Router> 
            <Sidebar/>
                <Switch>
                    <Route path="/surgery" component={Surgery} />
                    <Route path="/bill" component={Bill} />
                </Switch>
            </Router>
    
 
    </>
  );
};

export default Dashboard;