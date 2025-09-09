import React from 'react';
import './ContaDigitalMenu.css';
import mockupDigital from '../../assets/menu-digital-mockup.png';
import iconRight from '../../images/icon-right.svg';

const ContaDigitalMenu = () => {
  return (
    <div className="conta-digital-menu">
      <div className="conta-digital-menu__container">
        <div className="conta-digital-menu__account">
          <div className="conta-digital-menu__account-image-container">
            <img src={mockupDigital} alt="Conta Digital Mockup" className="conta-digital-menu__account-image" />
          </div>
          <p className="conta-digital-menu__account-title">A conta completa do Mercado Livre</p>
          <a href="#" className="conta-digital-menu__account-link">
            Conhecer Conta Digital
            <img src={iconRight} alt="Arrow" />
          </a>
        </div>
        <div className="conta-digital-menu__list">
          <div className="conta-digital-menu__list-section">
            <h3 className="conta-digital-menu__list-title">Rendimentos</h3>
            <ul className="conta-digital-menu__product-list">
              <li className="conta-digital-menu__product-item">
                <h4>Cofrinhos</h4>
                <p>Rendem até 120% do CDI</p>
              </li>
              <li className="conta-digital-menu__product-item">
                <h4>Dinheiro na conta</h4>
                <p>Rende até 105% do CDI</p>
              </li>
            </ul>
          </div>
          <div className="conta-digital-menu__list-section">
            <h3 className="conta-digital-menu__list-title conta-digital-menu__list-title--disabled">Crédito</h3>
            <ul className="conta-digital-menu__product-list">
              <li className="conta-digital-menu__product-item">
                <h4>Cartão</h4>
                <p>Até 18x sem juros</p>
              </li>
              <li className="conta-digital-menu__product-item">
                <h4>Linha de crédito</h4>
                <p>Compras sem cartão</p>
              </li>
            </ul>
          </div>
          <div className="conta-digital-menu__list-section">
            <h3 className="conta-digital-menu__list-title conta-digital-menu__list-title--disabled">Serviços</h3>
            <ul className="conta-digital-menu__product-list">
              <li className="conta-digital-menu__product-item">
                <h4>Pagamentos e tarifas</h4>
                <p>Pix e boletos</p>
              </li>
              <li className="conta-digital-menu__product-item">
                <h4>Seguros</h4>
                <p>Proteção para o que importa</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContaDigitalMenu;
