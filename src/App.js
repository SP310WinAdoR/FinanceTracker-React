import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import { Home, LoginPage, RegisterPage, ForgetPasswordPage, NotFound } from './pages/index'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

export default function App() {
  return (

    <Router>
    <div>
        <Switch>
        <Route path="/"exact component={ Home } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegisterPage } />
            <Route path="/forget-password" component={ ForgetPasswordPage } />
        </Switch>
    </div>
</Router>


  );
}
