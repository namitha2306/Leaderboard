import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Leaderboard from "./leaderboard";
import "./App.css"; // Custom CSS

// Importing the SVG logo
import logo from "C:/Users/namit/Desktop/leaderboard/leaderboard-app/src/logo-black.svg";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}  // Use imported logo here
            width="120"
            height="40"
            className="d-inline-block align-top"
            alt="TEDxCUSAT logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="nav-text">
            Home
          </Nav.Link>
        </Nav>
      </Navbar>

      

      {/* Leaderboard */}
      <Container>
        <Leaderboard />
      </Container>
    </div>
  );
};

export default App;
