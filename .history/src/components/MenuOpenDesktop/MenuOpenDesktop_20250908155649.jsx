import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MenuOpenDesktop.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import ContaDigitalMenu from '../ContaDigitalMenu/ContaDigitalMenu';

import item22 from '../../assets/item-22.png';
import logo from '../../assets/logo.svg';

export default function MenuOpenDesktop() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuToggle = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="menu-open-desktop">
      <nav className="navbar">
        <div className="navbar__header">
          <div className="navbar__logo-container">
            <img alt="Logo" className="navbar__logo" src={logo} />
            <div className="navbar__menu-container">
              <DropdownMenu 
                title="Conta Digital"
                isOpen={openMenu === 'digital'}
                onClick={() => handleMenuToggle('digital')}
              />
              <DropdownMenu 
                title="Conta Negócio"
                isOpen={openMenu === 'negocio'}
                onClick={() => handleMenuToggle('negocio')}
              >
                <a href="#">Opción A</a>
                <a href="#">Opción B</a>
              </DropdownMenu>
            </div>
          </div>
          <div className="navbar__actions-container">
            <div className="navbar__help-login-container">
              <div className="header-menu-item">
                <a href="#" className="header-menu-item__link">Ajuda</a>
              </div>
              <div className="header-menu-item">
                <button className="header-menu-item__button header-menu-item__button--login">
                  Iniciar sessão
                </button>
              </div>
            </div>
            <div className="header-menu-item">
              <button className="header-menu-item__button header-menu-item__button--primary">
                Abrir conta grátis
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {openMenu === 'digital' && (
          <motion.div
            className="menu-open-desktop__dropdown-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContaDigitalMenu />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="menu-open-desktop__main-banner" style={{ backgroundImage: `url('${item22}')` }} />
    </div>
  );
}
