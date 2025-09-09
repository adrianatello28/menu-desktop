import React from 'react';
import './ContaNegocioMenu.css';
import mockupNegocio from '../../assets/mockup-negocio.png';
import iconRight from '../../images/icon-right.svg';

const ContaNegocioMenu = () => {
  return (
    <div className="conta-negocio-menu">
      <div className="conta-negocio-menu__container">
        <div className="conta-negocio-menu__account">
          <div className="conta-negocio-menu__account-image-container">
            <img src={mockupNegocio} alt="Conta Negócio Mockup" className="conta-negocio-menu__account-image" />
          </div>
          <p className="conta-negocio-menu__account-title">Soluções de venda, gestão e crédito</p>
          <a href="#" className="conta-negocio-menu__account-link">
            Conhecer Conta Negócio
            <img src={iconRight} alt="Arrow" />
          </a>
        </div>
        <div className="conta-negocio-menu__list">
          {/* Columnas de la lista */}
        </div>
      </div>
    </div>
  );
};

export default ContaNegocioMenu;
