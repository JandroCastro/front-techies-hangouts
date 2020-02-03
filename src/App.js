import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
//import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { CreateHangout } from "./pages/CreateHangout";
import { Profile } from "./pages/Profile";
import { DetailedHangout } from "./pages/DetailedHangout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Dashboard />
            </Route>
            <Route path="/create/hangout">
              <CreateHangout />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/hangout/:id">
              <DetailedHangout />
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
