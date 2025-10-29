import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MenuOpenDesktop.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import ContaDigitalMenu from '../ContaDigitalMenu/ContaDigitalMenu';
import ContaNegocioMenu from '../ContaNegocioMenu/ContaNegocioMenu';
import AjudaSegurancaMenu from '../AjudaSegurancaMenu/AjudaSegurancaMenu';

import item22 from '../../assets/item-22.png';
import logo from '../../assets/logo.svg';

export default function MenuOpenDesktop() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setOpenMenu(null); // Cierra el menú al hacer scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const isMenuActive = openMenu !== null || isScrolled;

  return (
    <>
      {isScrolled && <div className="menu-open-desktop__placeholder" />}
      <div className="menu-open-desktop">
        <nav className={`navbar ${isMenuActive ? 'navbar--active' : ''}`}>
          <div className="navbar__header">
            <div className="navbar__logo-container">
              <img alt="Logo" className="navbar__logo" src={logo} />
              <div className="navbar__menu-container">
                <DropdownMenu 
                  title="Conta Digital"
                  isOpen={openMenu === 'digital'}
                  isInactive={openMenu !== null && openMenu !== 'digital'}
                  onClick={() => handleMenuToggle('digital')}
                />
                <DropdownMenu 
                  title="Conta Negócio"
                  isOpen={openMenu === 'negocio'}
                  isInactive={openMenu !== null && openMenu !== 'negocio'}
                  onClick={() => handleMenuToggle('negocio')}
                />
                <DropdownMenu 
                  title="Ajuda e Segurança"
                  isOpen={openMenu === 'ajuda'}
                  isInactive={openMenu !== null && openMenu !== 'ajuda'}
                  onClick={() => handleMenuToggle('ajuda')}
                />
              </div>
            </div>
            <div className="navbar__actions-container">
              <div className="navbar__help-login-container">
                <div className="header-menu-item">
                  <button className={`header-menu-item__button header-menu-item__button--login ${isMenuActive ? 'header-menu-item__button--login-active' : ''}`}>
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
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '72px', left: 0, right: 0, zIndex: 10 }}
            >
              <ContaDigitalMenu />
            </motion.div>
          )}
          {openMenu === 'negocio' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '72px', left: 0, right: 0, zIndex: 10 }}
            >
              <ContaNegocioMenu />
            </motion.div>
          )}
          {openMenu === 'ajuda' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '72px', left: 0, right: 0, zIndex: 10 }}
            >
              <AjudaSegurancaMenu />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="menu-open-desktop__main-banner" style={{ backgroundImage: `url('${item22}')` }} />
      </div>
    </>
  );
}
