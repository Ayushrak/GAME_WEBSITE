import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Form, InputGroup } from "react-bootstrap";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { X } from "lucide-react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="bg-dark shadow-sm fixed-top">
      <Container className="d-flex justify-content-between align-items-center py-2">
        {/* Logo */}
        <Link to="/" className="fw-bold text-light text-decoration-none">🎮 GameZone</Link>

        {/* Icons Container */}
        <div className="d-flex gap-5">
          {/* Toggle Button */}
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>

          {/* User or Login Button */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="success" onClick={() => setIsOpen(false)}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" className="btn btn-outline-light user-btn-lg" onClick={() => setIsOpen(false)} />
          </SignedIn>
        </div>
      </Container>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="bg-dark text-light p-3 position-absolute w-100 top-100 start-0 shadow">
          <Form className="d-flex mb-3" onSubmit={handleSearchSubmit}>
            <InputGroup>
              <InputGroup.Text><FaSearch /></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button variant="warning" type="submit">
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>

          <Nav className="d-flex flex-column gap-2">
            <Button as={Link} to="/library" variant="outline-light" className="w-100" onClick={() => setIsOpen(false)}>
              📚 Library
            </Button>
          </Nav>
        </nav>
      )}
    </header>
  );
};

export default MobileNavbar;
