import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
//import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Login";
import { Principal } from "./pages/Principal";
import { Home } from "./pages/Home";
import { CreateHangout } from "./pages/CreateHangout";
import { Profile } from "./pages/Profile";
import { DetailedHangout } from "./pages/DetailedHangout";
import { CreateProfile } from "./pages/CreateProfile";
import { YourHangouts } from "./pages/YourHangouts";
import { Ratings } from "./pages/Ratings";
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
            <Route path="/create/hangout">
              <CreateHangout />
            </Route>
            <Route path="/create/profile">
              <CreateProfile />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/edit/hangout/:id">
              <EditHangout />
            </Route>
            <Route path="/hangout">
              <DetailedHangout />
            </Route>
            <Route path="/myhangouts">
              <YourHangouts />
            </Route>
            <Route path="/ratings">
              <Ratings />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
