import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { NavDropdownToggle } from '../NavDropdownToggle';

export default function NavBar() {
  const { t } = useTranslation();
  return(
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-custom-dark">

      <Link to="/" className="navbar-brand">OpenGov</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarCollapse" aria-controls="navbarCollapse"
              aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <Dropdown className="navbar-nav">
          <Dropdown.Toggle as={NavDropdownToggle}>
            {t('components.navBar.about.label')}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/about-qualified-immunity">
              {t('components.navBar.about.qualifiedImmunity')}
            </Dropdown.Item>

            <Dropdown.Item href="/about-congress">
              {t('components.navBar.about.congress')}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}