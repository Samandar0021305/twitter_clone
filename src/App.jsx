import './App.scss';

import {Switch , Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";


function App() {
  return (
   <>
      <Switch>
        <Route path="/" component={Home}  exact/>
      </Switch>
   </>
  );
}

export default App;
