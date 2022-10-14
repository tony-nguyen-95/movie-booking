/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage, Login } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <Route exact path="/home" render={(props) => <HomePage {...props} />} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
