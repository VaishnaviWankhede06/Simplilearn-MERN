import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { InputGroup } from "react-bootstrap";
import { FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComp = ({  inputType, onInputChange, onSearch }) => {
  
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

 

//   const onEnter = (event) => {
//     if (event.key === 'Enter') {
//         onSearch();
//     }
// };

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleMouseEnter = () => {
    setIsCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCoursesOpen(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-white" style={{ fontFamily: "Roboto, sans-serif" }}>
      <Container fluid className="d-flex flex-lg-row justify-content-center align-items-center gap-3">
        <img
          src="https://www.simplilearn.com/ice9/new_logo.svgz"
          width="180"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
          onClick={handleLogoClick}
        />

        <div
          className="bg-primary p-2 rounded d-lg-inline position-relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        >
          <span className="fs-6 text-light fw-semibold me-3">All Courses</span>
          {isCoursesOpen ? <FaAngleUp className="text-light" /> : <FaAngleDown className="text-light" />}

          {isCoursesOpen && (
            <div
              className="position-absolute bg-white p-3 shadow"
              style={{ top: "50px", left: 0, zIndex: 1000 }}
            >
              {/* Additional dropdown items */}
            </div>
          )}
        </div>

        <Form className="d-flex w-25">
          <InputGroup className="custom-border-color rounded">
            <Form.Control
              className="custom-placeholder p-1 rounded outline-none border-none"
              placeholder="What do you want to learn?"
              aria-label="Search"
              value={inputType}  // Use the local inputType state here
              onChange={onInputChange}  // Use handleInputChange to update state
              // onKeyDown={onEnter}  // Call onSearch when Enter is pressed
               // Optional search event handler
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
            />
            <InputGroup.Text
              className="text-primary search-icon-hover"
              style={{ backgroundColor: "#e0f7fa" }}
            onClick={onSearch}  // Trigger handleSearch on click
            >
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
        </Form>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link
              href="#action1"
              className="fw-bold fs-7 text-secondary nav-link-hover-blue"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
            >
              Review
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="fw-bold fs-7 text-secondary nav-link-hover-blue"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
            >
              For Business
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="fw-bold fs-7 text-secondary nav-link-hover-blue"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
            >
              Resources
            </Nav.Link>

            <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              className="fw-bold fs-7 text-secondary nav-dropdown-hover nav-dropdown-hover1"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
            >
              <NavDropdown.Item href="#action3" className="fs-6" style={{ fontFamily: "Roboto, sans-serif" }}>
                Hire From Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="fs-6" style={{ fontFamily: "Roboto, sans-serif" }}>
                Become an Instructor
              </NavDropdown.Item>
            </NavDropdown>

            <Button
              variant="outline-dark"
              className="text-secondary fw-semibold ms-3 button-hover-blue"
              style={{ width: "120px", fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
            >
              Log in
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
