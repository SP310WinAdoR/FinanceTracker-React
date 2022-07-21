import './App.css';
import "./assets/css/App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import  HomePage  from './views/presentation/Home';
import  NotFound  from './views/presentation/NotFound';
import  ForgetPasswordPage  from './views/auth/ForgetPasswordPage';
import  SignIn  from './views/auth/SignIn';
import  SignUp  from './views/auth/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


import AdminLayout from "./layouts/admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from "./theme/theme";
import './App.css';

export default function App() {
  return (
<ChakraProvider theme={theme}>
    <Router>
    <div>
        <Switch>
        <Route path="/"exact component={ HomePage } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
            <Route path="/forget-password" component={ ForgetPasswordPage } />
            <Route path="/admin" component={ AdminLayout } />
            <Route path="/*" component={ NotFound } />

        </Switch>
    </div>
</Router>
</ChakraProvider>

  );
}
