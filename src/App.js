import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Navbar from './components/navbar';
import Signup from './components/signup';

function App() {
  return (
    <div>
      <Navbar /> 
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login}>
            <Login></Login>
          </Route>
          <Route path="/signup" component={Signup}>
            <Signup></Signup>
          </Route>  
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
