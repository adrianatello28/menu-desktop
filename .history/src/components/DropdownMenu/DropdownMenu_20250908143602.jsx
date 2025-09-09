import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="dropdown-menu__content"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
