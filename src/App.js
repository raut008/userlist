import React from 'react'
import CardListContainer from './Container/CardListContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Form from "./Components/Form";
import { Button, Container, Navbar } from 'react-bootstrap/';

const App = () => {
  const [loggedIn, setloggedIn] = React.useState(false);

  const isUserLoggedIn = (loggedIn) => {
    setloggedIn(loggedIn);
  }

  const handleLogout = () => {
    setloggedIn(false);
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            {loggedIn ? <>
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">People's Interactive</Navbar.Brand>
                  <Button onClick={handleLogout}>Logout</Button>
                </Container>
              </Navbar>
              <CardListContainer />
            </> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {loggedIn ? (
              <Redirect to="/home" />
            ) : (
              <Form isUserLoggedIn={isUserLoggedIn} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
