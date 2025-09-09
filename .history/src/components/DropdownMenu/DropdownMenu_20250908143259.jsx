import React, { useState } from 'react';
import './DropdownMenu.css';
import iconShape from '../../assets/chevron-down.svg';

const DropdownMenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={toggleMenu}>
        <span className="dropdown-menu__title">{title}</span>
        <img 
          src={iconShape} 
          alt="Chevron" 
          className={`dropdown-menu__icon ${isOpen ? 'dropdown-menu__icon--open' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="dropdown-menu__content">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
