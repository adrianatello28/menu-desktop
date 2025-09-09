import React from 'react';
import './DropdownMenu.css';
import iconShape from '../../assets/chevron-down.svg';

const DropdownMenu = ({ title, isOpen }) => {
  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button">
        <span className="dropdown-menu__title">{title}</span>
        <img 
          src={iconShape} 
          alt="Chevron" 
          className={`dropdown-menu__icon ${isOpen ? 'dropdown-menu__icon--open' : ''}`} 
        />
      </button>
    </div>
  );
};

export default DropdownMenu;
