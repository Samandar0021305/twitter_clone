import './App.scss';

import {Switch , Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Profile from './pages/profile/Profile';

function App() {
  return (
   <>
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/profile" component={Profile} />
      </Switch>
   </>
  );
}

export default App;
