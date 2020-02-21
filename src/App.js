import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Login";
import { Principal } from "./pages/Principal";
import { Home } from "./pages/Home";
import { CreateHangout } from "./pages/CreateHangout";
import { Profile } from "./pages/Profile";
import { DetailedHangout } from "./pages/DetailedHangout";
import { CreateProfile } from "./pages/CreateProfile";
import { YourHangouts } from "./pages/YourHangouts";
import { Notifications } from "./pages/Notifications";
import { EditHangout } from "./pages/EditHangout";

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
            <Route path="/principal">
              <Principal />
            </Route>
            <PrivateRoute path="/create/hangout">
              <CreateHangout />
            </PrivateRoute>
            <PrivateRoute path="/create/profile">
              <CreateProfile />
            </PrivateRoute>
            <PrivateRoute path="/profile/:id">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/edit/hangout/:id">
              <EditHangout />
            </PrivateRoute>
            <PrivateRoute path="/hangout/:id">
              <DetailedHangout />
            </PrivateRoute>
            <PrivateRoute path="/myhangouts">
              <YourHangouts />
            </PrivateRoute>
            <PrivateRoute path="/notifications">
              <Notifications />
            </PrivateRoute>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
