import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { NavDropdownToggle } from '../NavDropdownToggle';

export default function NavBar() {
  return(
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-custom-dark">

      <Link to="/" class="navbar-brand">OpenGov</Link>

      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarCollapse" aria-controls="navbarCollapse"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <Dropdown className="navbar-nav">
          <Dropdown.Toggle as={NavDropdownToggle}>
            About
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/about-qualified-immunity">Action</Dropdown.Item>
            <Dropdown.Item href="/about-congress">Another action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}