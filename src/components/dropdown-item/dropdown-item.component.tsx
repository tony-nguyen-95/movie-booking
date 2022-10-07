import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './dropdown-item.style.scss';
import { IDropdownItemProps } from './dropdown-item.type';

const prefixClassName = 'dropdown-item';

export const DropdownItem: React.FC<IDropdownItemProps> = (props) => {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <NavDropdown
      title="Dropdown"
      id="collasible-nav-dropdown"
      show={show}
      onMouseEnter={() => showDropdown()}
      onMouseLeave={() => hideDropdown()}
      className={prefixClassName}
    >
      <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};
