import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AUthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import ExploreHome from './pages/Explore/ExploreHome/ExploreHome';
import PlaceOrderHome from './pages/PlaceOrder/PlaceOrderHome/PlaceOrderHome';


function App() {
  return (
    <div className="App">
      <AUthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/explorehome">
              <ExploreHome></ExploreHome>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrderHome></PlaceOrderHome>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AUthProvider>
    </div>
  );
}

export default App;
