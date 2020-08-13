import React from 'react';

const NavDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
  // eslint-disable-next-line
  <a
    href=""
    className="nav-item nav-link dropdown-toggle"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

export default NavDropdownToggle;
