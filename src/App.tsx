/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Booking, Detail, HomePage, Login, Register } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <Route exact path="/register" render={(props) => <Register {...props} />} />

        <Route exact path="/detail" render={(props) => <Detail {...props} />} />

        <Route exact path="/booking" render={(props) => <Booking {...props} />} />

        <Route exact path="/home" render={(props) => <HomePage {...props} />} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
