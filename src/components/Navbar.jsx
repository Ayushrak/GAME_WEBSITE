import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Container, Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";
import MobileNavbar from "./MobileNavbar";
import Login from "./Login"; // Login Component
import useScreenSize from "../hooks/useScreenSize";

const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { isMobile: isSmall, isMedium } = useScreenSize();

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return isSmall || isMedium ? (
    <MobileNavbar />
  ) : (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" className="py-3 shadow" fixed="top">
      <Container>
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">🎮 GameZone</Link>

        {/* Mobile Toggle Button */}
        <BootstrapNavbar.Toggle aria-controls="navbar-content">
          <FaBars className="text-light" />
        </BootstrapNavbar.Toggle>

        {/* Navbar Items */}
        <BootstrapNavbar.Collapse id="navbar-content">
          <Nav className="ms-auto d-flex align-items-center w-100">
            {/* Centered Search Bar */}
            <Form className="d-flex mx-auto w-50" onSubmit={handleSearchSubmit}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Button variant="warning" type="submit">Search</Button>
              </InputGroup>
            </Form>

            {/* Library & Login */}
            <Button as={Link} to="/library" variant="outline-light" className="rounded-pill px-4 py-2 mx-3">
              📚 Library
            </Button>
            <Login />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default MyNavbar;
