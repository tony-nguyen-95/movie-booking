import React, { useMemo, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './dropdown-item.style.scss';
import { IDropdownItemProps } from './dropdown-item.type';
import { useSpring, animated } from 'react-spring';

const prefixClassName = 'dropdown-item';

export const DropdownItem: React.FC<IDropdownItemProps> = (props) => {
  const { title, subMenu } = props;

  const [show, setShow] = useState(false);

  const { transform: rotateTabIcon } = useSpring({
    from: { transform: 'rotate(0deg)' },
    transform: show ? 'rotate(180deg)' : 'rotate(0deg)',
  });

  const titleNav: React.ReactNode = useMemo(() => {
    return (
      <div className={`${prefixClassName}__title`}>
        <div>{title}</div>
        <animated.i style={{ transform: rotateTabIcon }} className="fa-solid fa-angle-up" />
      </div>
    );
  }, [rotateTabIcon, title]);

  return (
    <NavDropdown
      title={titleNav}
      show={show}
      onMouseEnter={() => setShow(!show)}
      onMouseLeave={() => setShow(false)}
      className={prefixClassName}
    >
      {subMenu &&
        subMenu.map((item, index) => (
          <NavDropdown.Item key={index} href={item.link} eventKey={item.subTitle}>
            {item.subTitle}
          </NavDropdown.Item>
        ))}
    </NavDropdown>
  );
};
