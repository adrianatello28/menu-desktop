import React from 'react';
import './MenuOpenDesktop.css';

import item22 from '../../assets/item-22.png';
import logo from '../../assets/logo.svg';
import iconShape from '../../assets/chevron-down.svg';

export default function MenuOpenDesktop() {
  return (
    <div className="menu-open-desktop">
      <div className="menu-open-desktop__background" />
      <div className="menu-open-desktop__content">
        <nav className="navbar">
          <div className="navbar__header">
            <div className="navbar__logo-container">
              <img alt="Logo" className="navbar__logo" src={logo} />
              <div className="navbar__menu-container">
                <div className="header-menu-item">
                  <button className="header-menu-item__button">
                    <span className="header-menu-item__text">Conta Digital</span>
                    <img alt="Chevron Down" className="header-menu-item__icon" src={iconShape} />
                  </button>
                </div>
                <div className="header-menu-item">
                  <button className="header-menu-item__button">
                    <span className="header-menu-item__text">Conta Negócio</span>
                    <img alt="Chevron Down" className="header-menu-item__icon" src={iconShape} />
                  </button>
                </div>
              </div>
            </div>
            <div className="navbar__actions-container">
              <div className="navbar__help-login-container">
                <div className="header-menu-item">
                  <a href="#" className="header-menu-item__link">Ajuda</a>
                </div>
                <div className="header-menu-item">
                  {/* <CodeConnectSnippet> */}
                    <button className="header-menu-item__button header-menu-item__button--login">
                      Iniciar sessão
                    </button>
                  {/* </CodeConnectSnippet> */}
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
        <div className="menu-open-desktop__main-banner" style={{ backgroundImage: `url('${item22}')` }} />
      </div>
    </div>
  );
}
