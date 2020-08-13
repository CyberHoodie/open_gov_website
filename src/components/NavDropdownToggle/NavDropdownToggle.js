import React from 'react';

const NavDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    class="nav-item nav-link dropdown-toggle"
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
