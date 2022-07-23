import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import WeddingPhotos from './components/WeddingPhotos'
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/wedding">
            <WeddingPhotos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
